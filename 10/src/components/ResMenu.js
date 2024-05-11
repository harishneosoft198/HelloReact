import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/cutsomHooks/useResMenu";
import useOnlineStatus from "../utils/cutsomHooks/useOnlineStatus";


const ResMenu = () => {
  const { id } = useParams();
  //below one is custom hook
  const resInfo = useResMenu(id);
  const onlineStatus = useOnlineStatus();
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;


//   console.log(itemCards);
//   return(<h1>Testing...</h1>)
if(onlineStatus===false){
  return(
    <h1>Looks like you are Offline....</h1>
  )
}

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;