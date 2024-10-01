'use server'
import { ProductType } from '@/@types/mainTypes.types'
import type { Metadata } from 'next'
import { getAllProducts, getProduct } from '@/services/getProducts'
import ProductImageBlock from '@/shared/components/shared/ProductImageBlock/ProductImageBlock'
import { ProductTextBlock } from '@/shared/components/shared/ProductTextBlock/ProductTextBlock'

interface ProductPageProps {
	params: {
		id: string
	}
}
export async function generateStaticParams() {
	const products: ProductType[] = await getAllProducts()
	return products.map(product => ({
		slug: product.id.toString(),
	}))
}
export async function generateMetadata({
	params: { id },
}: ProductPageProps): Promise<Metadata> {
	const data: ProductType = await getProduct(id)
	return {
		title: data.name,
		description: data.description_text,
		keywords: data.metadataKeywords,
		openGraph: {
			title: data.name,
			description: data.description_text,
		},
	}
}

export default async function Product({ params: { id } }: ProductPageProps) {
	const info: ProductType = await getProduct(id)
	return (
		<div className='container'>
			<div className='grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6 mb-96'>
				<ProductImageBlock info={info}/>
				<ProductTextBlock info={info}/>
				
			</div>
		</div>
	)
}
