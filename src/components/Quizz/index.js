import './style.scss';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Quizz() {
  return (
    <div className='quizz'>
      <h2>Question</h2>
      <p>Et toi à quoi tu joues ?!</p>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Quizz;
