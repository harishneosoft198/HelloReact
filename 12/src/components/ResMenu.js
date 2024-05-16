import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/cutsomHooks/useResMenu";
import useOnlineStatus from "../utils/cutsomHooks/useOnlineStatus";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  const { id } = useParams();
  const [showIndex,setShowItems] = useState(null);
  //below one is custom hook
  const resInfo = useResMenu(id);
  const onlineStatus = useOnlineStatus();
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>{
    return category?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })
  // console.log(categories);



if(onlineStatus===false){
  return(
    <h1>Looks like you are Offline....</h1>
  )
}

  return (
    <div className="menu">
      <h1 className="text-center font-bold text-2xl">{name}</h1>
      <p className="text-center font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="categories text-center">
        {categories.map((each,index)=>(
          <ResCategory categoryData={each.card.card} showItems={showIndex === index ? true : false} setShowItems={(boolean)=>{if(boolean){setShowItems(index)}else{setShowItems(null)}}}/>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;