import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl">Cart</h1>
            {cartItems.length == 0 && <h1 className="text-md">Cart is empty add items to cart</h1>}
            <div className="w-6/12 m-auto">
                {cartItems.length !== 0 && <button onClick={handleClearCart} className="bg-black rounded-lg p-2 text-white">Clear Cart</button>}
                <ItemList itemData={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;