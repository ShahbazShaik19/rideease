import './styles/Review.css';
import { Rating } from '@mui/material';

// Helper function to dynamically import images
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // Dynamically import all images from the assets folder
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Card = (props) => {

    const imageSrc = props.review?images[props.review["name"].toLowerCase()+'.png' ]:"";
  return(
    <div className="card">
        <div className="cardMain">
            <img src={imageSrc} alt="profile" />
            <div>
                { props.type==="review" && 
                  <div className="reviewStars">
                    <Rating value={5.0} precision={0.1} readOnly /><br/>
                    <span className="reviewName">{props.review["name"]} | </span>
                    <span className="reviewCity">{props.review["city"]}</span>
                  </div>
                }
            </div>
        </div>
        <h3 className='cardHeading'>{props.review?props.review["heading"] : "a"}</h3>
        <div className="cardText">{props.review?props.review["text"] : "b"}</div>
    </div>
  )
}

export default Card;