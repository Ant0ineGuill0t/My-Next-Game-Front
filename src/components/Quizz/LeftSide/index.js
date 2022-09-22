// == Import
// data, styles
import './style.scss';
import NeonButton from '../../../assets/images/neonbutton.png'

function LeftSide() {
  return (
    <div className="leftSide">
      <div className="checkboxes"> 
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1"><img className="checkbox__img" src={NeonButton} alt="checkbox"/></label>
        <input type="checkbox" name="checkbox2" id="checkbox2" />
        <label htmlFor="checkbox2"><img className="checkbox__img" src={NeonButton} alt="checkbox"/></label>
        <input type="checkbox" name="checkbox3" id="checkbox3" />
        <label htmlFor="checkbox3"><img className="checkbox__img" src={NeonButton} alt="checkbox"/></label>
        <input type="checkbox" name="checkbox4" id="checkbox4" />
        <label htmlFor="checkbox4"><img className="checkbox__img" src={NeonButton} alt="checkbox"/></label>
        <input type="checkbox" name="checkbox1" id="checkbox5" />
        <label htmlFor="checkbox5"><img className="checkbox__img" src={NeonButton} alt="checkbox"/></label>
      </div>
      <div className="responses">
        <p>World of Warcraft</p>
        <p>Skyrim</p>
        <p>The Witcher 3</p>
        <p>Cyberpunk 2077</p>
        <p>Undertale</p>
      </div>
    </div>
  );
}

export default LeftSide;
