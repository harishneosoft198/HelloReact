import { CARD_IMG_URL } from "../utils/constants";
const ItemList = ({itemData})=>{
    return(
        <div>
            {itemData.map(each=>(
                <div className="border-black border-b-2 flex justify-between items-center">
                    <div className="py-2 w-9/12">
                        <span className="text-md">{each.card.info.name}</span>
                        <span className="text-md"> - Rs.{each.card.info.price/100}</span>
                        <p className="text-sm">{each.card.info.description}</p>
                    </div>
                    <div className="ml-2 w-3/12 relative">
                        <img className="w-full" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' + each.card.info.imageId}/>
                        <button className="absolute bottom-1 bg-black shadow-lg p-2 rounded-lg text-white text-sm">Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;