import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import Question from '../../components/question-set/question/Question';
import QuestionSet from '../../components/question-set/QuestionSet';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import styles from './CharacterBasics.module.css';
import { useEffect, useReducer } from 'react';
import {
  CharacterBasicsInitialState,
  CharacterBasicsReducer,
  updateGender,
  updateName
} from './reducers/CharacterBasicsReducer';

export type CharacterGender = 'male' | 'female' | 'other' | '';
export interface CharacterBasics {
  name: string;
  gender: CharacterGender;
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
        <p>What is your character's name?</p>
        <p>You will be role playing this character, choose wisely...</p>
        <div className={styles['character-name']}>
          <TextField
            variant="outlined"
            fullWidth
            onChange={(event) => dispatch(updateName(event.target.value))}
          >
            {state.name}
          </TextField>
          <ShuffleOnIcon color="primary" fontSize="large" />
        </div>
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
    </QuestionSet>
  );
}
