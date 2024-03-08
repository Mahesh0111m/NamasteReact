import { LOGO_URL } from "../utils/constants";

const Header =()=>{
    return (
            <div className="header">
            
                <img className="logo" src={LOGO_URL} ></img>

                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
    
    );
}

export default Header;