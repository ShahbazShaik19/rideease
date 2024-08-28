import './styles/Bike.css';

// Helper function to dynamically import images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Dynamically import all images from the assets folder
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Bike = ({bike}) => {
   const imageSrc = images[bike.bikeImage+'.png'];

  return (
    <div className="bikeGradient" style={{"background-image": "linear-gradient(rgba(0,0,0, 0) 25%,rgba("+bike.color+", 0.8) 50%)"}}>
      <img src={imageSrc} alt={bike.model} />
      <div className="bikeDetails">
        <div className="bikeCompany">{bike.company}</div>
        <div className="bikeModel">{bike.model}</div>
        <div className="bikeSpecs">{bike.specs}</div>
        <div className="bikeCost"><strong>₹ {bike.cost}</strong>/Day</div>
        <div className="bikeRentButton">→</div>
      </div>
    </div>
  );
};

export default Bike;