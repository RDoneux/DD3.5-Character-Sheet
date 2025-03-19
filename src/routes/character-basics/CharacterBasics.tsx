import Info from '../../components/question-set/info/Info';
import QuestionSet from '../../components/question-set/QuestionSet';

export default function CharacterBasics() {
  return (
    <QuestionSet title="Character Basics">
      <Info>
        <h4 id="character-basics">
          We will walk you through the following steps to setup your character
          basics:
          <ul>
            <li>Name</li>
            <li>Gender</li>
            <li>Race</li>
            <li>Class</li>
          </ul>
        </h4>
      </Info>

      <Info>
        <h4 id="page-1">
          First Page
          <ul>
            <li>Name</li>
            <li>Gender</li>
            <li>Race</li>
            <li>Class</li>
          </ul>
        </h4>
      </Info>

      <Info>
        <h4 id="page-2">
          Second Page
          <ul>
            <li>Name</li>
            <li>Gender</li>
            <li>Race</li>
            <li>Class</li>
          </ul>
        </h4>
      </Info>
    </QuestionSet>
  );
}
