import myLogo from '../../assets/imgs/logo.jpg.png';
import './NavBar.css'
import Button from "../button/Button";

function NavBar() {
    return (
        <div className="navbar-section">
            <div className="panal-1">
                <img src={myLogo} alt="logo-image" />
                <h3>NFT Marketplace</h3>
            </div>
            <div>Marketplace</div>
            <div>Ranking</div>
            <div>Connect a wallet</div>
            <Button />
        </div>

    )
}

export default NavBar;