import './styles/Review.css';
import clint from '../assets/clint.png'
import stars from '../assets/stars.svg'

const Review = (props) => {
  return(
    <div className="review">
        <div className="reviewMain">
            <img src={clint} alt="profile picture" />
            <div>
                <div className="reviewStars">
                    <img src={stars} /><br/>
                    <span className="reviewName">Clint | </span>
                    <span className="reviewCity">New York</span>
                </div>
            </div>
        </div>
        <h3 className='reviewHeading'>Lorem Ipsum Lorem</h3>
        <div className="reviewText">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </div>
    </div>
  )
}

export default Review;