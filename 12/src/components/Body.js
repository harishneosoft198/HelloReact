import ResCard, {withPromotedLabel} from "./ResCard"
import { resList } from "../utils/mockData"
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    let [listOfRestaurents,setListOfRes] = useState([]);
    let [filteredRestaurants,setFilterRestaurants] = useState([]);


    const [searchText,setSearchText] = useState();
    const ResCardPromoted = withPromotedLabel(ResCard);
    const {loggedInUser,setUserLoggedIn} = useContext(UserContext);
    useEffect(()=>{
        fetchData();
        // console.log('renderd')
    },[]);
    const fetchData = async ()=>{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
        const data = await response.json();
        const restaurants = data?.data?.cards.filter(each=>{
           return each.card.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
        })
        setListOfRes(restaurants);
        setFilterRestaurants(restaurants);
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
                        const filteredList = listOfRestaurents.filter(res=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterRestaurants(filteredList);
                    }} className="px-4 py-1 bg-green-400 m-2 border border-solid border-green-100 rounded-lg">Search</button>
                </div>
                <button className="px-4 py-1 bg-gray-100 border border-solid border-gray-100 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurents.filter(res=>res.card.card.info.avgRating>4.4);
                    setFilterRestaurants(filteredList);
                }}>
                Top Rated Restaurents
                </button>
                <input type="text" className="border border-solid border-black py-1 rounded-lg" onChange={(e)=>{
                        setUserLoggedIn(e.target.value);
                    }}/>
            </div>
            <div className="flex flex-wrap gap-5">
                {filteredRestaurants.map(restaurant=>(
                   <Link to={"restaurants/"+restaurant.card.card.info.id} key={restaurant.card.card.info.id}>
                    {restaurant.card.card.info.promoted ? (<ResCardPromoted resData={restaurant.card.card.info}/>) : <ResCard resData={restaurant.card.card.info} /> }
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body