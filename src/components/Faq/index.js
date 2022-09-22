// == Import
// data, styles
import './style.scss';

function Faq() {
  return (
    <div className="faq">
      <h1 className="faq-main-title">FAQ My-Next-Game</h1>
      <h2 className="faq-title">Qu'est-ce que MNG ?</h2>
      <p className="faq-content">Un site qui vous suggère des jeux en fonctions de vos réponses au questionnaire</p>
      <h2 className="faq-title">Suis-je obligé d'avoir déjà jouer aux jeux vidéos ?</h2>
      <p className="faq-content">Pas du tout! Le questionnaire est crée de sorte que tout les joueurs nouveaux et anciens y trouvent leur compte avec des questions larges qui vous dirigerons vers votre style de jeux !</p>
      <h2 className="faq-title">Puis-je faire un questionnaire sans être connecté ?</h2>
      <p className="faq-content">Vous pouvez faire un questionnaire sans être préalablement connecté mais vous n'aurez pas accès aux avantages utilisateur</p>
      <h2 className="faq-title">Qu'est ce que les avantages utilisateur ?</h2>
      <p className="faq-content">L'avantages d'une connection avant d'effectuer un quizz est de pouvoir sauvegarder celui-ci,
        d'autres avantages seront a venir tel que la wishList ou la CheckList qui vopus permettrons
        un suivi de vos jeux
      </p>
    </div>
  );
}
export default Faq;
