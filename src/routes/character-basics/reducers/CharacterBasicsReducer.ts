import { CharacterBasics, CharacterGender } from '../CharacterBasics';

export const CharacterBasicsInitialState: CharacterBasics = {
  name: '',
  gender: ''
};

interface CharacterBasicsReducerAction {
  type: CharacterBasicsReducerType;
  payload: string;
}

const CharacterBasicsReducerType = {
  UPDATE_NAME: 'update-name',
  UPDATE_GENDER: 'update-gender'
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
    default:
      return state;
  }
}

export function updateName(name: string): CharacterBasicsReducerAction {
  return { type: CharacterBasicsReducerType.UPDATE_NAME, payload: name };
}

export function updateGender(gender: CharacterGender) {
  return { type: CharacterBasicsReducerType.UPDATE_GENDER, payload: gender };
}
