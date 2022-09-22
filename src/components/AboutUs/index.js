// == Import
// data, styles
import './style.scss';

function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="about-us-title">Qui sommes-nous?</h2>
      <p className="about-us-content">
        La Team MNG est composée de 5 développeurs : <br />
        Stanislas Bernard le Product Owner et Dev Backend <br />
        Cédric Gerbault le Scrum Master et Lead Backend <br />
        Marion Castanié la Git Master et Dev Backend <br />
        Camille Salomon le Lead Frontend <br />
        et Antoine Guillot le Dev Frontend <br />
      </p>
      <p className="about-us-content">
        Après avoir terminé notre socle ainsi que nos spécialisations
        (Symfony et React) MNG est donc notre projet d'Apothéose de notre formation
      </p>
    </div>
  );
}
export default AboutUs;
