import React from 'react';
import '../css/style.css';

const VerticalNavBar = ({ setSelectedCategory }) => {
  return (
    <div className="vertical-navbar">
      <ul>
        <li><button type="button" onClick={() => setSelectedCategory("Programming Languages")}>Programming Languages</button></li>
        <li><button type="button" onClick={() => setSelectedCategory("Full Stack Development")}>Full Stack Development</button></li>
        <li><button type="button" onClick={() => setSelectedCategory("Data Science")}>Data Science</button></li>
        <li><button type="button" onClick={() => setSelectedCategory("Cyber Security")}>Cyber Security</button></li>
        <li><button type="button" onClick={() => setSelectedCategory("Others")}>Others</button></li>
      </ul>
    </div>
  );
};

export default VerticalNavBar;
