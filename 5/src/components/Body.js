import ResCard from "./ResCard"
import { resList } from "../utils/mockData"
import { useState } from "react";
const Body = ()=>{
    let [listOfRestaurents,setListOfRes] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurents.filter(res=>res.data.avgRating>4);
                    setListOfRes(filteredList);
                }}>
                Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurents.map(restaurant=>{
                    return(
                        <ResCard key={restaurant.data.id} resData={restaurant} />
                    )
                })}
            </div>
        </div>
    )
}
export default Body