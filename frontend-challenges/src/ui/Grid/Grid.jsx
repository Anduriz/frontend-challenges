import './Grid.css';
import { Infobox } from './Infobox/Infobox';
import { Display } from './Display/Display';
import Coffee1 from '../../assets/img1.png';
import Coffee2 from '../../assets/img2.png';
import Coffee3 from '../../assets/img3.png';
import { useState } from 'react';


export const Grid = () => {

  const [option, setOption] = useState(Coffee1);

  const handleState = (optionSelected) => {

    optionSelected === 'a' ? setOption(Coffee1) : '';
    optionSelected === 'b' ? setOption(Coffee2) : '';
    optionSelected === 'c' ? setOption(Coffee3) : '';

  }

  return (
    <div className='grid'>
        <Infobox handleState={handleState}/>
        <Display coffee={option}/>
    </div>
  )
}
