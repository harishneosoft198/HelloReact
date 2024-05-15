import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({categoryData,showItems,setShowItems})=>{
    const [itemState,setShow] = useState(showItems);
    
    const {title} = categoryData

    const handleClick = ()=>{
        setShowItems(!showItems);
    }
    return(
        <div className="w-6/12 text-left bg-gray-50 shadow-lg mx-auto my-2 p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <h2 className="text-lg font-bold">{title} ({categoryData.itemCards.length})</h2>
                <span>⬇</span>
            </div>
            <div>
                {showItems && <ItemList itemData={categoryData.itemCards}/>}
            </div>
        </div>
    )
}

export default ResCategory;