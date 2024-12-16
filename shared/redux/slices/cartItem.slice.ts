import { CartItemsType, ProductType, Sizes } from '@/@types/mainTypes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartItemsType[] = []
const cartItemSlice = createSlice({
	name: 'store/cartItems',
	initialState,
	reducers: {
		addCartItem: (
			state,
			{ payload }: PayloadAction<{ product: ProductType; size: Sizes }>
		) => {
			const isExists = state.some(
				item =>
					item.cartItem.id === payload.product.id && item.size === payload.size
			)
			const id = state.findIndex(
				item =>
					item.cartItem.id === payload.product.id && item.size === payload.size
			)
			if (isExists) {
				if (state[id].count >= 10) {
					return
				} else {
					state[id].count++
				}
			} else {
				state.push({ cartItem: payload.product, count: 1, size: payload.size })
			}
		},
		removeCartItem: (
			state,
			{ payload }: PayloadAction<{ product: ProductType; size: Sizes }>
		) => {
			const isExists = state.some(
				item =>
					item.cartItem.id === payload.product.id && item.size === payload.size
			)
			const id = state.findIndex(
				item =>
					item.cartItem.id === payload.product.id && item.size === payload.size
			)
			if (!isExists) return
			state.splice(id, 1)
		},
		setCartItems(state, { payload }: PayloadAction<CartItemsType[]>) {			
			state.splice(0,state.length)
			payload.map((e,i)=>state[i] = e)
		},
		setCartItem(state, { payload }: PayloadAction<CartItemsType>) {
			const isExists = state.some(
				item =>
					item.cartItem.id === payload.cartItem.id && item.size === payload.size
			)
			const id = state.findIndex(
				item =>
					item.cartItem.id === payload.cartItem.id && item.size === payload.size
			)
			if (!isExists) return
			state[id] = payload
		},
	},
})
export const { setCartItems, addCartItem, removeCartItem, setCartItem } =
	cartItemSlice.actions
export default cartItemSlice.reducer
