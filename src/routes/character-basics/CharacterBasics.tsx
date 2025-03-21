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
  updateClass,
  updateGender,
  updateName,
  updateRace
} from './reducers/CharacterBasicsReducer';
import CharacterName from './questions/character-name/CharacterName';
import Class from './questions/class/Class';
import Summary from './questions/summary/Summary';
import { Race } from '../../interfaces/Race';
import RaceQuestion from './questions/race/RaceQuestion';
import { save } from '../../utils/PersistantStorage';
import { ClassRole } from '../../interfaces/Class';
import { useNavigate } from 'react-router-dom';

export type CharacterGender = 'male' | 'female' | 'other' | '';
export interface CharacterBasics {
  name: string;
  gender: CharacterGender;
  race: Race;
  clazz: ClassRole;
}

export default function CharacterBasics() {
  const [state, dispatch] = useReducer(
    CharacterBasicsReducer,
    CharacterBasicsInitialState
  );

  const navigate = useNavigate();

  useEffect(() => {
    save('character-basics', state);
  }, [state]);

  return (
    <QuestionSet title="Character Basics" onProceed={() => navigate('/')}>
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
        <RaceQuestion
          characterName={state.name}
          race={state.race.name}
          onChange={(race: Race) => dispatch(updateRace(race))}
        />
      </Question>

      <Question id="class">
        <Class
          characterName={state.name}
          clazz={state.clazz.name}
          onChange={(clazz: ClassRole) => dispatch(updateClass(clazz))}
        />
      </Question>

      <Question id="summary">
        <Summary state={state} />
      </Question>
    </QuestionSet>
  );
}
