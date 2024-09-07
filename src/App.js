import { useState } from 'react';
import BikeMenu from './components/BikeMenu';
import BikeDisplay from './components/BikeDisplay.js';
import bikesData from './components/bikes.json';
import reviewsData from './components/reviews.json';
import './App.css';
import Card from './components/Card.js';

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
      <BikeMenu 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} 
      />
      <BikeDisplay 
        selectedCategory={selectedCategory} 
        bikes={bikeCategoryArray}
      />
      <div className="cardContainer">
        <Card /><Card /><Card />
      </div>
      <div className='cardContainer reviewContainer'>
        <Card review={reviewsData[0]} type="review" />
        <Card review={reviewsData[1]} type="review" />
        <Card review={reviewsData[2]} type="review" />
      </div>
      
      
    </div>
  );
}

export default App;