import Title from '../../../../components/question-set/title/Title';
import { CharacterBasics } from '../../CharacterBasics';
import Section from './components/section/Section';
import styles from './Summary.module.css';
import ObjectList from './components/object-list/ObjectList';

interface SummaryProps {
  state: CharacterBasics;
}

export default function Summary({ state }: SummaryProps) {
  return (
    <>
      <p>So, {state.name}, let me get this straight...</p>
      <p>
        You are a {state.gender} {state.race.name} {state.clazz.name}.
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
            <ObjectList object={state.race.abilityAdjustments} />
          </Section>
          <Section title="Starts With">
            <ObjectList object={state.race.modifiers} />
          </Section>
          <Section title="Every Level">
            <ObjectList object={state.race.levelModifier} />
          </Section>
          <Section title="Weapon Proficiencies">
            <ObjectList object={state.race.weaponProficiencies} valuesOnly />
          </Section>
          <Section title="Other">
            <ObjectList object={state.race.otherModifiers} valuesOnly />
          </Section>
        </div>
        <div className={styles['class-attributes']}>
          <Title title="Class Attributes" />
          <p>As a {state.clazz.name}, the following applies.</p>
          <Section title="Alignments not Allowed">
            <ObjectList object={state.clazz.alignmentsNotAllowed} valuesOnly />
          </Section>
          <Section title="Hit Points">
            <p>
              {state.clazz.hitPoints}({state.clazz.hitPointsIncreasePerLevel})
            </p>
          </Section>
          <Section title="Languages">
            <ObjectList object={state.clazz.languages} valuesOnly />
          </Section>
          <Section title="Weapon Proficiencies">
            <ObjectList object={state.clazz.weaponProficiencies} valuesOnly />
          </Section>
          <Section title="Armour Proficiencies">
            <ObjectList object={state.clazz.armourProficiencies} valuesOnly />
          </Section>
          <Section title="Other">
            <ObjectList object={state.clazz.other} valuesOnly />
          </Section>
        </div>
      </div>
      <p>Have I got these details correct and should we proceed?</p>
    </>
  );
}
