import { CartItemsType } from '@/@types/mainTypes.types'
import { CartItem } from '../CartItem'
import { Button } from '../../ui/button'
import { useActions } from '@/shared/redux/hooks/useActions'
import { Input } from '../../ui/input'
interface CartInnerProps {
	data: CartItemsType[]
}
const CartInner: React.FC<CartInnerProps> = props => {
	const { data } = props
	const { setCartItems } = useActions()
	let price = 0
	for(let i = 0; i<data.length;i++){
		price += data[i].count*Number(data[i].cartItem.price)
	}
	return (
		<div className='mt-12 '>
			<div className='border-b-2 pb-2'>
				<ul className='flex flex-col gap-6'>
					{data.map((value, index) => {
						return (
							<CartItem
								value={value}
								key={`${value.cartItem.description_text}-${index}`}
							/>
						)
					})}
				</ul>
				<div className='flex justify-end items-end mt-10'>
					<p className='pr-3 text-lg'>Цена заказа:</p>
					<p className='text-5xl'>{price}₽</p>
				</div>
			</div>
			<div className='pt-4 grid grid-cols-[200px,1fr] justify-between  gap-3'>
				<Button
					className='p-6 z-10 max-sm:ml-auto max-sm:col-[1/3]'
					onClick={() => {
						setCartItems([])
					}}
				>
					Очистить корзину
				</Button>
				<div className='flex gap-4 max-lg:row-[2/3] max-lg:col-[1/3] items-end justify-end max-sm:flex-wrap'>
					<Input
						placeholder='Введите промокод(если есть)'
						name='code'
						className='p-6 max-w-[300px] min-w-[200px] w-full bg-primary/50 text-white placeholder:text-white max-sm:max-w-full'
					/>
					<Button className='py-6 px-10 max-sm:w-full'>Оформить заказ</Button>
				</div>
			</div>
		</div>
	)
}
export { CartInner }
