import './HeroSection.css';
import Button from "../button/Button";
import Card from "../card/Card";

function HeroSection() {
    return (
        <div className="container hero-section">
            <div className="row hero-section-1">
                <div className="col col-md-2 col-lg-4" style={{ padding: "50px", paddingBottom: "0px" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Discover Digital Arts & Collects NFTs</h1>
                    <p>NTf Marketplace UI Creates with Anima for Figma. Collect, Buy And Sell Arts from More Than 20k NFTs Artists.</p>
                    <Button />
                </div>
                <div className="actions" style={{display : "flex", justifyContent : "space-evenly" , marginBottom : "140px"}}>
                    <div className="1">
                        <h3>240k+</h3>
                        <p>Total Sale</p>
                    </div>
                    <div className="2"><h3>100k+</h3>
                        <p>Auctions</p>
                    </div>
                    <div className="3">
                        <h3>240k+</h3>
                        <p>Artists</p>
                    </div>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default HeroSection;