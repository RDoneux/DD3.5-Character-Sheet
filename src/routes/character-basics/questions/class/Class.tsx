import styles from './Class.module.css';
import ClassCard from '../../components/class-card/ClassCard';

const classes: ClassCardDetails[] = [
  {
    name: 'Barbarian',
    description: 'A fierce warrior who relies on rage and brute strength.',
    image: 'barbarian'
  },
  {
    name: 'Bard',
    description: 'A jack-of-all-trades who uses magic through music and lore.',
    image: 'bard'
  },
  {
    name: 'Cleric',
    description:
      'A divine spellcaster with powerful healing and buffing abilities.',
    image: 'cleric'
  },
  {
    name: 'Druid',
    description: 'A nature-based spellcaster who can shapeshift into animals.',
    image: 'druid'
  },
  {
    name: 'Fighter',
    description:
      'A heavily trained warrior skilled in weapons and combat tactics.',
    image: 'fighter'
  },
  {
    name: 'Monk',
    description:
      'A disciplined martial artist who fights unarmed and unarmored.',
    image: 'monk'
  },
  {
    name: 'Paladin',
    description: 'A holy knight with divine abilities and a strict moral code.',
    image: 'paladin'
  },
  {
    name: 'Ranger',
    description:
      'A wilderness warrior with tracking abilities and some spellcasting.',
    image: 'ranger'
  },
  {
    name: 'Rogue',
    description:
      'A stealthy, skillful character adept at traps and sneak attacks.',
    image: 'rogue'
  },
  {
    name: 'Sorcerer',
    description:
      'A spontaneous arcane spellcaster who draws power from innate magic.',
    image: 'sorcerer'
  },
  {
    name: 'Wizard',
    description:
      'A scholarly spellcaster who prepares spells from a spellbook.',
    image: 'wizard'
  }
];

export interface ClassCardDetails {
  name: string;
  description: string;
  image: string;
}

interface ClassProps {
  characterName: string;
  clazz: string;
  onChange: (card: ClassCardDetails) => void;
}

export default function Class({ characterName, clazz, onChange }: ClassProps) {
  return (
    <>
      <p>What class does {characterName} belong to?</p>
      <p>
        The class is the biggest influencer of how you will play the game, as it
        determines how certain skills and abilities evolve over the course of
        the story.
      </p>
      <div className={styles['class-card-wrapper']}>
        {classes.map((cardDetails: ClassCardDetails) => (
          <ClassCard
            clazz={clazz}
            key={cardDetails.name}
            classCardDetails={cardDetails}
            onClick={onChange}
          />
        ))}
      </div>
    </>
  );
}
