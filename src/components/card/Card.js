import './Card.css';
import heroCard from '../../assets/imgs/Image Placeholder.png';
import Profile from '../profile/Profile';
function Card() {
    return(
      <div className="Card" style={{margin: "20px", }}>
        <div className="img-div">
      <img src={heroCard} style={{width: "100%", height: "360px", }} alt="card-img" />
        </div>
        <Profile/>
      </div>
    )
}

export default Card;