import "./Infobox.css";
import Coffee1 from '../../../assets/img1.png';
import Coffee2 from '../../../assets/img2.png'
import Coffee3 from '../../../assets/img3.png'

export const Infobox = ({handleState}) => {

  return (
    <div className="infobox">
      <h1>It's not just Coffee</h1>
      <h1>It's a <span style={{color:'green'}}>Starbucks</span></h1>
      <p>
        Qui in sint dolore adipisicing excepteur pariatur incididunt eu. Elit
        quis exercitation elit proident officia reprehenderit exercitation
        voluptate. Mollit quis aliqua labore proident cupidatat occaecat
        excepteur est sint esse nostrud minim excepteur. Id pariatur minim
        dolore amet id non ut sint excepteur aliquip.
        Qui in sint dolore adipisicing excepteur pariatur incididunt eu. Elit
        quis exercitation elit proident officia reprehenderit exercitation
        voluptate. Mollit quis aliqua labore proident cupidatat occaecat
        excepteur est sint esse nostrud minim excepteur. Id pariatur minim
        dolore amet id non ut sint excepteur aliquip.
      </p>
      <button>LEARN MORE</button>
      <div className="options-selector">
        <img src={Coffee1} alt="" onClick={() => handleState('a')}/>
        <img src={Coffee2} alt="" onClick={() => handleState('b')}/>
        <img src={Coffee3} alt="" onClick={() => handleState('c')}/>
      </div>
    </div>
  );
};
