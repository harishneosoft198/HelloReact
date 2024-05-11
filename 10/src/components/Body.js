import ResCard from "./ResCard"
import { resList } from "../utils/mockData"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
    let [listOfRestaurents,setListOfRes] = useState([]);
    let [filteredRestaurants,setFilterRestaurants] = useState([]);


    const [searchText,setSearchText] = useState();
    useEffect(()=>{
        fetchData();
        // console.log('renderd')
    },[]);
    const fetchData = async ()=>{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        setListOfRes(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    };
    if(listOfRestaurents.length === 0){
        return(
            <>
                <Shimmer/>
            </>
        )
    }
    return(
        <div className="body m-2">
            <div className="filter flex items-center">
                <div className="search-container">
                    <input type="text" className="border border-solid border-black py-1 rounded-lg" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        const filteredList = listOfRestaurents.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterRestaurants(filteredList);
                    }} className="px-4 py-1 bg-green-400 m-2 border border-solid border-green-100 rounded-lg">Search</button>
                </div>
                <button className="px-4 py-1 bg-gray-100 border border-solid border-gray-100 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurents.filter(res=>res.info.avgRating>4.4);
                    setFilterRestaurants(filteredList);
                }}>
                Top Rated Restaurents
                </button>
            </div>
            <div className="flex flex-wrap gap-5">
                {filteredRestaurants.map(restaurant=>{
                    return(
                        <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id}><ResCard resData={restaurant.info} /></Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Body