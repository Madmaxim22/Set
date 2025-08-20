import { Team } from '../Team.js';

describe('Team', () => {
  class Character {
    constructor(name) {
      this.name = name;
    }
  }

  let team;
  let hero1;
  let hero2;
  let hero3;

  beforeEach(() => {
    team = new Team();
    hero1 = new Character('Hero1');
    hero2 = new Character('Hero2');
    hero3 = new Character('Hero3');
  });

  test('если добавить нового персонажа в команду', () => {
    team.add(hero1);
    expect(team.toArray()).toContain(hero1);
  });

  test('если добавить в команду одного и того же персонажа, получим ошибку', () => {
    team.add(hero1);
    expect(() => team.add(hero1)).toThrow('Этот персонаж уже в команде');
  });

  test('если добавить несколько новых персонажей в команду', () => {
    team.addAll(hero1, hero2);
    expect(team.toArray()).toEqual(expect.arrayContaining([
      hero1, hero2
    ]));
  });

  test('если добавить в команду несолько одинаковых персонажей', () => {
    team.addAll(hero1, hero2);
    expect(() => team.addAll(hero2, hero3)).toThrow(
      'Этот персонаж уже в команде'
    );
  });

  test('если конвертируем Set в массив', () => {
    team.add(hero1);
    team.add(hero2);
    const array = team.toArray();
    expect(Array.isArray(array)).toBe(true);
    expect(array).toEqual([
      hero1, hero2
    ]);
  });
});
