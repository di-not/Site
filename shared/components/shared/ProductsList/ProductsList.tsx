import { ProductType } from '@/@types/mainTypes.types'
import { ProductCart } from '../ProductCart'
interface ProductsListProps {
	data: ProductType[]
}
const ProductsList: React.FC<ProductsListProps> = props => {
	const { data } = props
	return (
		<div className=''>
			<ul className={'flex flex-wrap gap-y-7 gap-x-3 justify-evenly'}>
				{data.map((value, index) => {
					return <ProductCart data={value} index={index} key={value.id}/>
				})}
			</ul>
		</div>
	)
}
export { ProductsList }
