import { styleCard } from "../utils/mockData";
import { CARD_IMG_URL } from "../utils/constants";
const ResCard = (props)=>{
    const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="w-[250px] h-[400px] p-2 border border-solid border-gray-600 rounded-md bg-gray-200">
      <img
        className="h-[150px] w-[100%]"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
}

export default ResCard;