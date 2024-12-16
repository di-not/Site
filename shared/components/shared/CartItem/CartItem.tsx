import { CartItemsType } from '@/@types/mainTypes.types'
import Image from 'next/image'
import { useState } from 'react'
import { useActions } from '@/shared/redux/hooks/useActions'
import { Trash } from '../../ui/Trash'
import { Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/components/ui/dialog'

interface CartItemProps {
	value: CartItemsType
}

const CartItem: React.FC<CartItemProps> = props => {
	const { value } = props
	const [count, setCount] = useState<number>(value.count)
	const {  removeCartItem, setCartItem } = useActions()

	return (
		<li
			className='w-full h-fit border-2 border-black p-4 grid relative
			 backdrop-blur-[8px] shadow-md rounded-[10px] gap-10 
		justify-between grid-cols-[1fr,1fr,100px]
		max-lg:grid-cols-[1fr,100px] max-lg:gap-4'
		>
			<div className='flex gap-10 max-lg:col-[1/3] max-lg:pr-12 max-lg:gap-4'>
				<Dialog>
					<DialogTrigger>
						<Image
							src={value.cartItem.images}
							alt='изображение товара'
							width={100}
							height={100}
							className='size-20'
							priority={true}
							onClick={() => {}}
						/>
					</DialogTrigger>
					<DialogContent className='max-w-fit z-[1001] m'>
						<DialogHeader>
							<DialogTitle></DialogTitle>
							<Image
								src={value.cartItem.images}
								alt='изображение товара'
								width={2000}
								height={2000}
								className='max-w-[40vw] max-h-[80vh]'
								priority={true}
								onClick={() => {}}
							/>
							<DialogDescription></DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
				<div className='flex flex-col justify-between'>
					<Link
						href={`product/${value.cartItem.id}`}
						className='text-xl max-w-96 max-lg:text-sm hover:text-primary/70 duration-300 ease-out '
					>
						<p className='underline-offset-1'>{value.cartItem.name}</p>
					</Link>
					<p className='text-sm max-lg:text-[12px]'>{`Размер: ${value.size}`}</p>
				</div>
			</div>
			<div className='flex h-full justify-end max-lg:row-[2/3] '>
				<p className='text-6xl w-fit my-auto mr-0 text-right max-lg:text-left max-lg:ml-0 max-lg:mr-auto max-lg:text-2xl'>
					{Number(value.cartItem.price) * value.count}₽
				</p>
			</div>
			<div className='flex flex-col  justify-between max-lg:row-[2/3]'>
				<Trash
					className='ml-auto absolute right-4 top-4'
					onClick={() => {
						removeCartItem({ product: value.cartItem, size: value.size })
					}}
				/>
				<div className='flex justify-between mt-auto'>
					<Minus
						className='w-fit m-auto cursor-pointer'
						onClick={() => {
							if (count - 1 > 0) {
								setCount(count - 1)
								setCartItem({
									cartItem: value.cartItem,
									count: count - 1,
									size: value.size,
								})
							}
						}}
					/>
					<p className='w-8 mt-auto border-2 flex items-center justify-center border-black rounded-xl p-1 aspect-square'>
						{count}
					</p>
					<Plus
						className='w-fit m-auto cursor-pointer'
						onClick={() => {
							if (count + 1 < 11) {
								setCount(count + 1)
								setCartItem({
									cartItem: value.cartItem,
									count: count + 1,
									size: value.size,
								})
							}
						}}
					/>
					
				</div>
			</div>
		</li>
	)
}
export { CartItem }
