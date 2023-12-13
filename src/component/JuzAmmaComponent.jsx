import React from 'react';
import { tahlilDoa } from '../API/Tahlil';

function JuzAmmaComponent() {
  return (
    <div className='element_juz_amma_items'>
      {tahlilDoa.map((tahdo) => (
        <div className='card_element_items' key={tahdo.no}>
          <h6>{tahdo.judul}</h6>
          <p>{tahdo.arab}</p>
        </div>
      ))}
    </div>
  );
}

export default JuzAmmaComponent;
