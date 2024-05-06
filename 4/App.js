import React from "react";
import ReactDOM from 'react-dom/client';

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor:'#f0f0f0'
}
const ResCard = (props)=>{
    const {restarent,cuisine,rating} = props.resObj;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d86db1e9c3e122b7de80cb749ea072f1"/>
            <h3>{restarent}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>45mins</h4>
        </div>
    )
}
const resList = [
    {restarent:'Meghana Foods',cuisine:'dosa south india',rating:'4.2stars'},
    {restarent:'KFC',cuisine:'burger, fast food',rating:'3.2stars'}
]
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map(restaurent=>{
                    return(
                        <ResCard resObj={restaurent} />
                    )
                })}
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);