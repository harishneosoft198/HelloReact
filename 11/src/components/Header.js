import { useState,useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/cutsomHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
    const [btnName,setBtnName] = useState('Login');
    //this function helps to get the user is connected to internet or not.
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="flex justify-between bg-pink-100 items-center">
            <div className="logo-container">
                <img className="px-5 w-[150px]" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex gap-x-10 items-center px-[10]">
                    <li className="pink">Online Status: {onlineStatus?'active 😀':'inactive ☹'}</li>
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
                        }} className="bg-green-400 px-4  rounded-lg py-1">
                            {btnName}
                        </button>
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header