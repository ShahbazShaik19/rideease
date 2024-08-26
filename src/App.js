import { useState } from 'react';
import BikeMenu from './components/BikeMenu';
import BikeDisplay from './components/BikeDisplay.js';
import bikesData from './components/bikes.json';
import './App.css';
import Review from './components/Review.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Standard");

  const categories = Object.keys(bikesData);

     const bikeCategoryArray = Object.entries(bikesData[selectedCategory]).flatMap(([bikeImage, bikes]) =>
      Object.values(bikes).map(bike => ({
        bikeImage,
        ...bike
      })));

  return (
    <div className="App">
      {/* <BikeMenu 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} 
      />
      <BikeDisplay 
        selectedCategory={selectedCategory} 
        bikes={bikeCategoryArray}
      /> */}
      <div className='reviewContainer'>
        <Review />
        <Review />
        <Review />
      </div>
      
      
    </div>
  );
}

export default App;