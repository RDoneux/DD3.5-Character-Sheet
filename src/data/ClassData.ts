import { ClassRole } from '../interfaces/Class';

export const classes: ClassRole[] = [
  {
    name: 'Barbarian',
    description: 'A fierce warrior who relies on rage and brute strength.',
    image: 'barbarian',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Bard',
    description: 'A jack-of-all-trades who uses magic through music and lore.',
    image: 'bard',
    alignmentsNotAllowed: ['lawful-neutral', 'lawful-evil', 'neutral-good'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Cleric',
    description:
      'A divine spellcaster with powerful healing and buffing abilities.',
    image: 'cleric',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Druid',
    description: 'A nature-based spellcaster who can shapeshift into animals.',
    image: 'druid',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Fighter',
    description:
      'A heavily trained warrior skilled in weapons and combat tactics.',
    image: 'fighter',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Monk',
    description:
      'A disciplined martial artist who fights unarmed and unarmored.',
    image: 'monk',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Paladin',
    description: 'A holy knight with divine abilities and a strict moral code.',
    image: 'paladin',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Ranger',
    description:
      'A wilderness warrior with tracking abilities and some spellcasting.',
    image: 'ranger',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    hitPointsIncreasePerLevel: '1d8 each additional level',
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Rogue',
    description:
      'A stealthy, skillful character adept at traps and sneak attacks.',
    image: 'rogue',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    hitPointsIncreasePerLevel: '1d8 each additional level',
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Sorcerer',
    description:
      'A spontaneous arcane spellcaster who draws power from innate magic.',
    image: 'sorcerer',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  },
  {
    name: 'Wizard',
    description:
      'A scholarly spellcaster who prepares spells from a spellbook.',
    image: 'wizard',
    alignmentsNotAllowed: ['lawful-good', 'lawful-neutral', 'lawful-evil'],
    hitPoints: 8,
    hitPointsIncreasePerLevel: '1d8 each additional level',
    languages: ['Abyssal', 'Celestial', 'Draconic', 'Infernal'],
    weaponProficiencies: ['simple', 'martial'],
    armourProficiencies: ['light', 'medium', 'shields'],
    extraordinaryAbilities: ['rage', 'fast movement'],
    other: ['illiteracy']
  }
];
