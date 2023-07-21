import './Card.css';
import proImage from '../../assets/imgs/image-2.jpg.png';
import heroCard from '../../assets/imgs/Image Placeholder.png';
function Card() {
    return(
      <div className="Card" style={{margin: "20px", }}>
        <div className="img-div">
      <img src={heroCard} style={{width: "100%", height: "360px", }} alt="card-img" />
        </div>
        <div className="title-div" style={{margin: "10px",width: "400px", }}>
          <h5 >Space Walking</h5>
          <div style={{display:'flex'}}>
            <img src={proImage} alt="author-img" />
            <p style={{paddingLeft: "10px"}}>Animakid</p>
          </div>
        </div>
      </div>
    )
}

export default Card;