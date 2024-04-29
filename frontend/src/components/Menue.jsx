import React, { useState } from 'react';
import '../components/styling/MenuToggle.css'; // move your styles to MenuToggle.css

function MenuToggle() {
  const [isToggled, setToggled] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setToggled(!isToggled);
  };

  return (
    <div className={`container ${isToggled ? 'expanded' : ''}`}>
      <div className="menue">
        <a href="#" onClick={handleClick}>
          <div className={`barr1 ${isToggled ? 'rotate' : ''}`}></div>
          <div className={`barr2 ${isToggled ? 'hidden' : ''}`}></div>
          <div className={`barr3 ${isToggled ? 'rotate' : ''}`}></div>
        </a>
      </div>
    </div>
  );
}

export default MenuToggle;