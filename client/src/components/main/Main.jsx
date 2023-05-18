import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from '../slider/Slider';
import NavigateButtons from '../navigateButtons/NavigateButtons';
import ProductSection from '../productSection/ProductSection';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Main;
