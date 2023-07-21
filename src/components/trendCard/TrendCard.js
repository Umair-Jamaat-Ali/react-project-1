import mainImg from '../../assets/imgs/main-img-1.jpg.png';
import subImg1 from '../../assets/imgs/sub-img-1.jpg.png';
import subImg2 from '../../assets/imgs/sub-img-2.jpg.png';
function TrendCard() {
    return (
        <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="main-img" >
                            <img src={mainImg} style={{ width: "300px", height: "300px" }} alt="" />
                        </div>
                        <div className="sub-img" style={{
                            display: "flex", justifyContent: "space-evenly",
                            width: "300px", height: "100px", margin: "15px"
                        }}>
                            <img src={subImg1} alt="" style={{ width: "100px", height: "100px" }} />
                            <img src={subImg2} alt="" style={{ width: "100px", height: "100px" }} />
                            <div style={{
                                width: "100px", height: "100px", backgroundColor: "darkgray", display: "flex",
                                justifyContent: "center", alignItems: "center"
                            }}> <h3>1025+</h3></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default TrendCard;