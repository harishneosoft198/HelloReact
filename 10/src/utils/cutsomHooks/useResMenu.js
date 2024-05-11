import { useEffect,useState } from "react";
import {MENU_API} from '../constants'

const useResMenu = (id)=>{
    const [resInfo,setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
      }, []);
    
    const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setResInfo(json.data);
    };
    
    return resInfo
}

export default useResMenu;