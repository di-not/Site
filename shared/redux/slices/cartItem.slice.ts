import { CartProduct, ProductType } from '@/@types/mainTypes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItemsType = {
	cartItem: ProductType
	count: number
}

const initialState: CartItemsType[] =[]
//  JSON.parse(
// 	(localStorage.getItem('cartItems') && localStorage.getItem('cartItems')) ||'[]'
// )

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
		// removeCartItem: (
		// 	state,
		// 	{ payload: product }: PayloadAction<ProductType>
		// ) => {
		// 	const isExists = state.cartItems.some(item => item.id === product.id)
		// 	const id = state.cartItems.indexOf(product)
		// 	if (!isExists) return
		// 	state.cartItems.slice(id, 1)
		// },
		setCartItems(state, action: PayloadAction<CartProduct[]>) {
			state = action.payload.map(e => {
				return { cartItem: e, count: 1 }
			})
		},
	},
})
export const { setCartItems, addCartItem } = cartItemSlice.actions
export default cartItemSlice.reducer
