// == Import
// data, styles
import './style.scss';

function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="about-us-title">About us?</h2>
      <p className="about-us-content">
        The MNG team consist of 5 dév : <br />
        Stanislas Bernard the Product Owner and Dev Backend <br />
        Cédric Gerbault the Scrum Master and Lead Backend <br />
        Marion Castanié the Git Master and Dev Backend <br />
        Camille Salomon the Lead Frontend <br />
        Antoine Guillot the Dev Frontend <br />
      </p>
      <p className="about-us-content">
        After the end of our base program and spécialization
        (Symfony et React) MNG is our training course's apothéose project.
      </p>
    </div>
  );
}
export default AboutUs;
