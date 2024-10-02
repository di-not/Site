import { CartItemsType, ProductType } from '@/@types/mainTypes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartItemsType[] = []
const cartItemSlice = createSlice({
	name: 'store/cartItems',
	initialState,
	reducers: {
		addCartItem: (state, { payload: product }: PayloadAction<ProductType>) => {
			const isExists = state.some(item => item.cartItem.id === product.id)
			const id = state.findIndex(item => item.cartItem.id === product.id)
			if (isExists) {
				state[id].count++
			} else {
				state.push({ cartItem: product, count: 1 })
			}
		},
		removeCartItem: (
			state,
			{ payload: product }: PayloadAction<ProductType>
		) => {
			const isExists = state.some(item => item.cartItem.id === product.id)
			const id = state.findIndex(item => item.cartItem.id === product.id)
			if (!isExists) return
			state.slice(id, 1)
		},
		setCartItems(state, action: PayloadAction<CartItemsType[]>) {
			state = action.payload
		},
	},
})
export const { setCartItems, addCartItem,removeCartItem} = cartItemSlice.actions
export default cartItemSlice.reducer
