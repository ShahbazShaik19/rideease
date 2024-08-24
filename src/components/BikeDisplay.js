import Bike from './Bike';
import { useEffect, useState } from 'react';
import './styles/BikeDisplay.css'

const BikeDisplay = ({ selectedCategory, bikes }) => {
    console.log(bikes);
    const [showBikes, setShowBikes] = useState(false);

    useEffect(() => {
      setShowBikes(false);
      const timer = setTimeout(() => setShowBikes(true), 300);
      console.log(showBikes);
      return () => clearTimeout(timer);
    }, [selectedCategory]);
  return (
    <div className={`bikeDisplay ${selectedCategory} ${showBikes? 'showBikes': ''}`}>
      {bikes.map((bike, index) => (
        <Bike key={index} bike={{"bikeImage":index,...bike}} />
        
      ))}
    </div>
  );
};

export default BikeDisplay;