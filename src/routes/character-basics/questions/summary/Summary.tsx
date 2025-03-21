import Title from '../../../../components/question-set/title/Title';
import { CharacterBasics } from '../../CharacterBasics';
import Section from './components/Section';
import styles from './Summary.module.css';

interface SummaryProps {
  state: CharacterBasics;
}

export default function Summary({ state }: SummaryProps) {
  return (
    <>
      <p>So, {state.name}, let me get this straight...</p>
      <p>
        You are a {state.gender} {state.race.name} {state.clazz}.
      </p>
      <div className={styles['attributes-wrapper']}>
        <div className={styles['race-attributes']}>
          <Title title="Race Attributes" />
          <p>As a {state.race.name}, the following applies.</p>
          <Section title="Size">
            <p>{state.race.size}</p>
          </Section>
          <Section title="Land Speed">
            <p>{state.race.landSpeed}</p>
          </Section>
          <Section title="Ability Adjustments">
            {Object.entries(state.race.abilityAdjustments).map(
              ([key, value]) => (
                <p>
                  {value} {key}
                </p>
              )
            )}
          </Section>
        </div>
        <div className={styles['class-attributes']}>
          <Title title="Class Attributes" />
        </div>
      </div>
      <p>Have I got these details correct and should we proceed?</p>
    </>
  );
}
