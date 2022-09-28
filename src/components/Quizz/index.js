// == Import
// composants
import LeftSide from './LeftSide';
import RightSide from './RightSide';

// data, styles
import './style.scss';

function Quizz() {
  return (
    <div className="quizz">
      <h2>Question</h2>
      <p className="question">Et toi à quoi tu joues ?!Et toi à quoi tu joues ?!Et toi à quoi tu joues ?!Et toi à quoi tu joues ?!</p>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Quizz;
