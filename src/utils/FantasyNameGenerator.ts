const firstNamePrefixes = [
  'Ara',
  'Eld',
  'Thal',
  'Mor',
  'Bel',
  'Zan',
  'Vor',
  'Lor',
  'Ser',
  'Dra'
];
const firstNameSuffixes = [
  'dor',
  'ion',
  'mir',
  'gorn',
  'reth',
  'dil',
  'thas',
  'wyn',
  'anor',
  'iel'
];

const lastNamePrefixes = [
  'Shadow',
  'Storm',
  'Moon',
  'Iron',
  'Silver',
  'Fire',
  'Dark',
  'Dragon',
  'Bright',
  'Stone'
];
const lastNameSuffixes = [
  'bane',
  'heart',
  'fang',
  'forge',
  'wind',
  'brook',
  'blade',
  'helm',
  'thorn',
  'stride'
];

export function generateFantasyName(): string {
  const firstName =
    firstNamePrefixes[Math.floor(Math.random() * firstNamePrefixes.length)] +
    firstNameSuffixes[Math.floor(Math.random() * firstNameSuffixes.length)];

  const lastName =
    lastNamePrefixes[Math.floor(Math.random() * lastNamePrefixes.length)] +
    lastNameSuffixes[Math.floor(Math.random() * lastNameSuffixes.length)];

  return `${firstName} ${lastName}`;
}
