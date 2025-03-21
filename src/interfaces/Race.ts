export interface Race {
  name: string;
  description: string;
  image: string;
  size: RaceSizeType;
  landSpeed: number;
  abilityAdjustments: Partial<RaceAbilities>;
  modifiers: Partial<Modifiers>;
  levelModifier: Partial<Modifiers>;
  weaponProficiencies: string[];
  otherModifiers: string[];
}

export interface RaceAbilities {
  dexterity: number;
  constitution: number;
  strength: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type Modifiers = {
  [key in ModifierType]: number;
};

export type ModifierType = 'skillPoints' | 'feats';
export type RaceSizeType = 'small' | 'medium' | 'large';
