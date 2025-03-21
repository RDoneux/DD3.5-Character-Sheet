import { ClassRole } from '../../../interfaces/Class';
import { Race } from '../../../interfaces/Race';
import { CharacterBasics, CharacterGender } from '../CharacterBasics';

export const CharacterBasicsInitialState: CharacterBasics = {
  name: '',
  gender: '',
  race: {
    name: '',
    description: '',
    image: '',
    size: 'medium',
    landSpeed: 0,
    abilityAdjustments: {},
    modifiers: {},
    levelModifier: {},
    weaponProficiencies: [],
    otherModifiers: []
  },
  clazz: {
    name: '',
    description: '',
    image: '',
    alignmentsNotAllowed: [],
    hitPoints: 0,
    hitPointsIncreasePerLevel: '',
    languages: [],
    weaponProficiencies: [],
    armourProficiencies: [],
    extraordinaryAbilities: [],
    other: []
  }
};

interface CharacterBasicsReducerAction {
  type: CharacterBasicsReducerType;
  payload: string;
}

const CharacterBasicsReducerType = {
  UPDATE_NAME: 'update-name',
  UPDATE_GENDER: 'update-gender',
  UPDATE_RACE: 'update-race',
  UPDATE_CLASS: 'update-class'
} as const;
type CharacterBasicsReducerType =
  (typeof CharacterBasicsReducerType)[keyof typeof CharacterBasicsReducerType];

export function CharacterBasicsReducer(
  state: CharacterBasics,
  action: CharacterBasicsReducerAction
) {
  switch (action.type) {
    case CharacterBasicsReducerType.UPDATE_NAME:
      return { ...state, name: action.payload };
    case CharacterBasicsReducerType.UPDATE_GENDER:
      return { ...state, gender: action.payload as CharacterGender };
    case CharacterBasicsReducerType.UPDATE_RACE:
      return { ...state, race: JSON.parse(action.payload) };
    case CharacterBasicsReducerType.UPDATE_CLASS:
      return { ...state, clazz: JSON.parse(action.payload) };
    default:
      return state;
  }
}

export function updateName(name: string): CharacterBasicsReducerAction {
  return { type: CharacterBasicsReducerType.UPDATE_NAME, payload: name };
}

export function updateGender(
  gender: CharacterGender
): CharacterBasicsReducerAction {
  return { type: CharacterBasicsReducerType.UPDATE_GENDER, payload: gender };
}

export function updateRace(race: Race): CharacterBasicsReducerAction {
  return {
    type: CharacterBasicsReducerType.UPDATE_RACE,
    payload: JSON.stringify(race)
  };
}

export function updateClass(clazz: ClassRole): CharacterBasicsReducerAction {
  return {
    type: CharacterBasicsReducerType.UPDATE_CLASS,
    payload: JSON.stringify(clazz)
  };
}
