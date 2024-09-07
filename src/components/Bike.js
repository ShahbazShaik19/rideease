import './styles/Bike.css';
import delivery from '../assets/delivery.svg'
import { Rating } from '@mui/material';

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
      <img src={imageSrc} alt={bike.model} className='bikeImage' />
      <div className="bikeDetails">
        <div className="bikeCompany">{bike.company}</div>
        <div className="bikeModel">{bike.model}</div>
        <div className='flex-group'>
            <div className='bikeRating'>
                <Rating 
                  name="half-rating-read" 
                  size='small' defaultValue={4.6} precision={0.1} readOnly 
                />
                <span>(32)</span>
            </div>
            <div className='bikeDelivery'>
              <img src={delivery} alt='Bike delivery' style={{"width":"16 px"}} /> Home Delivery
            </div>
        </div>
        <select name="" className='bikeLocation' >
          <option value="" disabled selected hidden>Pickup Location</option>
          <option>Charminar</option>
          <option>Gachibowli</option>
        </select>
        <div className="flex-group">
            <div className="bikeDeposit">Deposit : ₹ 1000</div>
            <div className="bikeYear">Make Year : 2022</div>
        </div>
        <div className="flex-group">
        <div className="bikeCost"><strong>₹ {bike.cost}</strong>/Day</div>
        <div className="bikeRentButton">Rent Now</div>
        </div>
      </div>
    </div>
  );
};

export default Bike;