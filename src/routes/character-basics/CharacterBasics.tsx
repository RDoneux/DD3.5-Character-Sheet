import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import Question from '../../components/question-set/question/Question';
import QuestionSet from '../../components/question-set/QuestionSet';
import { useEffect, useReducer } from 'react';
import {
  CharacterBasicsInitialState,
  CharacterBasicsReducer,
  updateGender,
  updateName,
  updateRace
} from './reducers/CharacterBasicsReducer';
import CharacterName from './questions/character-name/CharacterName';
import Race, { RaceCardDetails } from './questions/race/Race';

export type CharacterGender = 'male' | 'female' | 'other' | '';
export interface CharacterBasics {
  name: string;
  gender: CharacterGender;
  race: string;
}

export default function CharacterBasics() {
  const [state, dispatch] = useReducer(
    CharacterBasicsReducer,
    CharacterBasicsInitialState
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <QuestionSet title="Character Basics">
      <Question id="landing">
        <div id="character-basics">
          <p>
            We will walk you through the following steps to setup your character
            basics:
          </p>
          <ul>
            <li>Name</li>
            <li>Gender</li>
            <li>Race</li>
            <li>Class</li>
          </ul>
        </div>
      </Question>
      <Question id="character-name">
        <CharacterName
          name={state.name}
          onChange={(name: string) => dispatch(updateName(name))}
        />
      </Question>
      <Question id="character-gender">
        <p>What gender is {state.name}?</p>
        <p>
          There are no specific changes to the mechanics based on your answer,
          it is purely for storytelling and role playing purposes.
        </p>
        <FormControl>
          <RadioGroup
            onChange={(event) =>
              dispatch(updateGender(event.target.value as CharacterGender))
            }
            value={state.gender}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Non-Binary (they/them)"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female (she/her)"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male (he/him)"
            />
          </RadioGroup>
        </FormControl>
      </Question>

      <Question id="race">
        <Race
          characterName={state.name}
          race={state.race}
          onChange={(race: RaceCardDetails) => dispatch(updateRace(race.name))}
        />
      </Question>
    </QuestionSet>
  );
}
