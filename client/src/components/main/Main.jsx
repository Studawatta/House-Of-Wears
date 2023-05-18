import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from '../slider/Slider';
import NavigateButtons from '../navigateButtons/NavigateButtons';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
    </div>
  );
};

export default Main;
