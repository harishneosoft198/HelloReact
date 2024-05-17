import { useEffect, useState } from "react";

const User = (props)=>{
    const {name} = props
    const [count] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('harish function');
        },1000)

        return ()=>{
            //clear interals here this is like componentwillUnmount
            clearInterval(timer);
        }
    },[])
    return(
        <div className="user-card">
            <h2>Count:{count}</h2>
            <h2>Name:{name}</h2>
            <h2>Location:</h2>
            <h2>Contact:limeroad123@gmail.com</h2>
        </div>
    )
}

export default User;