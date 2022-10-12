// == Import
// data, styles
import './style.scss';

function Faq() {
  return (
    <div className="faq">
      <h1 className="faq__main-title">FAQ My-Next-Game</h1>
      <h2 className="faq__title">What is MNG ?</h2>
      <p className="faq__content">A website where through a quiz you'll get suggested a corresponding selection of games.</p>
      <h2 className="faq__title">Do i need to already be a gamer ?</h2>
      <p className="faq__content">Not at all! The quiz is made in a way that every new or veteran gamer will find a selection of game according to their preference !</p>
      <h2 className="faq__title">Do i have to be registered to take a quiz ?</h2>
      <p className="faq__content">Yes, you can the a quiz as a visitor but you'll not access to users privileges.</p>
      <h2 className="faq__title">What are the users privileges?</h2>
      <p className="faq__content">Being connected as a user will grant you the access to your personal Wishlist and DoneList as well as an access to all previous taked quiz and set of results.
      </p>
    </div>
  );
}
export default Faq;
