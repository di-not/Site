'use client'
import { useReduxStates } from '@/shared/redux/hooks/useReduxStates'
import getCartItemsFromLS from '@/shared/utils/getCartItemsFromLS'

export default function Cart() {
	const {cartItems} = useReduxStates()
	const dataFromLS = getCartItemsFromLS()

	if (dataFromLS.length > 0 && dataFromLS) {
		return (
			<div className='container'>
				{dataFromLS.map((value, index) => {
					return (
						<div className='' key={index}>
							{value.id}
						</div>
					)
				})}
				Что-то
			</div>
		)
	} else {
		if (!cartItems || cartItems.length <= 0) {
			return <div className='container'>Ничо нет</div>
		}
		return (
			<div className='container'>
				{cartItems.map((value, index) => {
					return (
						<div className='flex flex-row' key={index}>
							<p>{value.cartItem.id}</p>-<p>{value.count}</p>
						</div>
					)
				})}
				что-то
			</div>
		)
	}
}
