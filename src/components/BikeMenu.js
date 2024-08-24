
import './styles/BikeMenu.css'

const BikeMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="bikeMenu">
      {categories.map((category, index) => (
        <div 
          key={index}
          className={`menuItem ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default BikeMenu;