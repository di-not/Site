import { ProductType } from '@/@types/mainTypes.types'

export const getAllProducts = async (): Promise<ProductType[]> => {
	const response = await fetch(`${process.env.API_URL}/items`, {
		next: {
			revalidate: 50,
		},
	})
	if (!response.ok) throw new Error()
	return response.json() as Promise<ProductType[]>
}

export const getProduct = async (id: string): Promise<ProductType> => {
	const response = await fetch(`${process.env.API_URL}/items/${id}`, {
		next: {
			revalidate: 50,
		},
	})
	if (!response.ok) throw new Error()
	return response.json() as Promise<ProductType>
}
