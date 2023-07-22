import Button from "../button/Button";
import ProfileCard from '../profileCArd/ProfileCard'

 function TopCreators() {
    return(
        <div className="outer-div" style={{width : "100%" , height: "1080px"}}>
         <div className="heading-div" style={{width : "1050px" , height: "100px", display: "flex", justifyContent: "space-between", 
         marginRight: "115px", marginLeft: "115px", marginBottom: "90px", marginTop: "90px"}}>
            <div>
                <h3>Top Creators</h3>
            <p>Checkout Top Rated Creators On The NFT Marketplace</p>
            </div>
            <div><Button/></div>
            </div>
            <div className="profile-img" style={{width: "1050px" , height: "775px", 
              marginLeft: "200px", marginRight: "115px",marginBottom: "50px",marginTop: "50px",  }}>
                <div className="container">
                <div className="row">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </div>
            </div>
            </div>   
        
        </div>
    )
 }

 export default TopCreators;