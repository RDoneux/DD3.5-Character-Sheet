import styles from './Class.module.css';
import ClassCard from '../../components/class-card/ClassCard';
import { ClassRole } from '../../../../interfaces/Class';
import { classes } from '../../../../data/ClassData';

interface ClassProps {
  characterName: string;
  clazz: string;
  onChange: (card: ClassRole) => void;
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
        {classes.map((cardDetails: ClassRole) => (
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
