
import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import { clearItem } from "../utils/cartSlice";


const Cart=()=>{

    const cartItems = useSelector((store) => store.cart.items);
const dispatch=useDispatch();

    const handleClearCart=()=>{
dispatch(clearItem())
    }
    return(<>
    
    <div className="text-center m-9 p-9 "><h3 className="font-extrabold text-xl ">Cart</h3>
    <button className="border-2 bg-black rounded-lg  text-white m-2 p-2 bord" onClick={handleClearCart}>Clear cart</button>
    {cartItems.length === 0 && <h1>Your cart is empty...! Please add items</h1>}
    <AccordianBody items={cartItems}/>
    </div>
    </>)
}

export default Cart;