import './NavBar.css'
import Button from "../button/Button";

function NavBar() {
    return(
        <div className="navbar-section">
            <div className="panal-1">
            <din className="logo-img"></din>
            <h3>NFT Marketplace</h3>
            </div>
            <div>Marketplace</div>
            <div>Ranking</div>
            <div>Connect a wallet</div>
            <Button/>
        </div>

    )
}

export default NavBar;