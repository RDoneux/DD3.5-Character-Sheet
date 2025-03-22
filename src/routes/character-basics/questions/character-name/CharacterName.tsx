import { TextField } from '@mui/material';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import styles from './CharacterName.module.css';
import { generateFantasyName } from '../../../../utils/FantasyNameGenerator';

interface CharacterNameProps {
  name: string;
  onChange: (name: string) => void;
}

export default function CharacterName({ name, onChange }: CharacterNameProps) {
  return (
    <>
      <p>What is your character's name?</p>
      <p>You will be role playing this character, choose wisely...</p>
      <div className={styles['character-name']}>
        <TextField
          variant="outlined"
          fullWidth
          onChange={(event) => onChange(event.target.value)}
          value={name}
        />
        <ShuffleOnIcon
          className={styles['shuffle-icon']}
          color="primary"
          fontSize="large"
          onClick={() => onChange(generateFantasyName())}
        />
      </div>
    </>
  );
}
