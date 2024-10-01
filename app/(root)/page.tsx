import { ProductType } from '@/@types/mainTypes.types'
import { getAllProducts } from '@/services/getProducts'
import { ProductsList } from '@/shared/components/shared/ProductsList'

export default async function Home() {
	const items: ProductType[] = await getAllProducts()
	return (
		<div className='container '>
			<div className='min-h-[1500px] mt-10'>
				<ProductsList data={items} />
			</div>
		</div>
	)
}
