import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ColorChangingButtons() {
  const [button1Color, setButton1Color] = useState('#D1D1D1');
  const [button2Color, setButton2Color] = useState('#D1D1D1');

  const handleButtonClick1 = () => {
    setButton1Color('#FFD402');
    setButton2Color('#D1D1D1');
  };

  const handleButtonClick2 = () => {
    setButton1Color('#D1D1D1');
    setButton2Color('#FFD402');
  };

  return (
    <div>
      <button style={{ backgroundColor: button1Color }} onClick={handleButtonClick1}>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/" >1</Link>
      </button>
      <button style={{ backgroundColor: button2Color }} onClick={handleButtonClick2}>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/pdf" >2</Link>
      </button>
    </div>
  );
}

export default ColorChangingButtons;
