
import { ProductType } from '@/@types/mainTypes.types'
import useGetFromLS from '../hooks/useGetFromLS'

export default function getCartItemsFromLS(): ProductType[] {
	const string: string | null = useGetFromLS('cartItem')
	if (!string) {
		return [] as ProductType[]
	}
	try {
		const cartItems: ProductType[] = JSON.parse(string)
		return cartItems
	} catch {
		return [] as ProductType[]
	}
}
