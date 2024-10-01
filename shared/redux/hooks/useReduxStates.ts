import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useReduxStates =()=>{
    const cartItems= useSelector((state:RootState)=>state.cartItemSlice)
   return {cartItems}
}