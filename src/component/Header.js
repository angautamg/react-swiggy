import { IMG_LOGO_URL } from "../../utils/constant";
import { Link,to } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className='img-logo' src={IMG_LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                    
                </ul>
            </div>
        </div>

    );
}
export default Header