export interface Race {
  name: string;
  description: string;
  image: string;
  size: RaceSize;
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

export interface Modifiers {
  skillPoints: number;
  feats: number;
}

export type RaceSize = 'small' | 'medium' | 'large';
