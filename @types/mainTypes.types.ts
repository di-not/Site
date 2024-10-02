export interface ProductType {
	name: string
	price: string
	images: string
	description_image: string
	description_text: string
	material: string
	additional: string
	href: string
	id: number
	metadataKeywords: string
	sizes:Sizes[]
}

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export type CartItemsType = {
	cartItem: ProductType
	count: number
}