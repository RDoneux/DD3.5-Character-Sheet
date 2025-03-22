export interface ClassRole {
  name: string;
  description: string;
  image: string;
  alignmentsNotAllowed: Alignment[];
  hitPoints: number;
  hitPointsIncreasePerLevel: string;
  languages: string[];
  weaponProficiencies: string[];
  armourProficiencies: string[];
  extraordinaryAbilities: string[];
  other: string[];
}

export type Alignment =
  | 'lawful-good'
  | 'neutral-good'
  | 'chaotic-good'
  | 'lawful-neutral'
  | 'true-neutral'
  | 'chaotic-neutral'
  | 'lawful-evil'
  | 'neutral-evil'
  | 'chaotic-evil';
