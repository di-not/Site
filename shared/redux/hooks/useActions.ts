import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import {
	setCartItems,
	addCartItem,
	removeCartItem,
	setCartItem,
} from '../slices/cartItem.slice'

const rootActions = {
	setCartItems,
	addCartItem,
	removeCartItem,
	setCartItem,
}

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
