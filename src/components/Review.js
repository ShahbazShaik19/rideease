import './styles/Review.css';
import stars from '../assets/stars.svg'

// Helper function to dynamically import images
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // Dynamically import all images from the assets folder
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Review = (props) => {
    const imageSrc = images[props.review["name"].toLowerCase()+'.png'];
  return(
    <div className="review">
        <div className="reviewMain">
            <img src={imageSrc} alt="profile" />
            <div>
                <div className="reviewStars">
                    <img src={stars} alt="5 star rating" /><br/>
                    <span className="reviewName">{props.review["name"]} | </span>
                    <span className="reviewCity">{props.review["city"]}</span>
                </div>
            </div>
        </div>
        <h3 className='reviewHeading'>{props.review["heading"]}</h3>
        <div className="reviewText">{props.review["text"]}</div>
    </div>
  )
}

export default Review;