import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/cutsomHooks/useOnlineStatus";
const Header = ()=>{
    const [btnName,setBtnName] = useState('Login');
    //this function helps to get the user is connected to internet or not.
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus?'active':'inactive'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button onClick={()=>{
                            if(btnName == 'Login'){
                                setBtnName('Logout');
                            }
                            else{
                                setBtnName('Login');
                            }
                        }}>
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header