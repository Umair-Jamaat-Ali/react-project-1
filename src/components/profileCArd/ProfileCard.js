import cardImg from '../../assets/imgs/ProfileCard-1.jpg.png'
function ProfileCard() {
    return (


        <div className="col-lg-3">
            <div className="card-div" style={{ width: "240px", height: "240px", display: "contents", 
            justifyContent: "center", alignItems: "center" }}>
                <div>
                   <img src={cardImg} alt="" style={{ width: "120px", height: "120px" }} />
                </div>
                <div style={{ width: "200px", height: "55px" }}>
                    <h6>Keepitreal</h6>
                    <p>Total Sales: <b>34.54 ETH</b></p>
                </div>
            </div>
        </div>




    )
}

export default ProfileCard;