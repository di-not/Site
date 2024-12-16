'use client'
import { ProductType, Sizes } from '@/@types/mainTypes.types'
import styles from './ProductTextBlock.module.scss'
import Image from 'next/image'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../ui/select'
import { sizes } from '@/public/assets/arrays'
import { useState } from 'react'
import { Button } from '../../ui/button'
import { addCartItem } from '@/shared/redux/slices/cartItem.slice'
import { useActions } from '@/shared/redux/hooks/useActions'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '../../ui/toast'
interface ProductTextBlockProps {
	info: ProductType
}

const ProductTextBlock: React.FC<ProductTextBlockProps> = props => {
	const { info } = props
	const [size, setSize] = useState(sizes[0])
	const { addCartItem,removeCartItem } = useActions()
	const { toast } = useToast()

	const onClickAdd = ()=> {
		addCartItem({product:info,size:size})
		toast({
			title: 'Добавлено в корзину',
			description: `${info.name} / ${size}`,
			action: <ToastAction altText='удалить' onClick={()=>{removeCartItem({product:info,size:size})}}>Удалить</ToastAction>,
		})
	}
	
	return (
		<div>
			<h1 className='text-5xl'>{info.name}</h1>
			<h2 className='mt-8 text-3xl'>{info.price}₽</h2>
			<div className='mt-2 flex w-full h-fit justify-between'>
				<Select
					name='size'
					onValueChange={(value: Sizes) => {
						setSize(value)
					}}
				>
					<SelectTrigger className='w-3/6'>
						<SelectValue placeholder={size} />
					</SelectTrigger>
					<SelectContent>
						{sizes.map((value, index) => {
							return (
								<SelectItem
									disabled={!info.sizes.includes(value)}
									key={value}
									value={`${value}`}
								>
									{info.sizes?.includes(value)
										? value
										: `${value} нет в наличии`}
								</SelectItem>
							)
						})}
					</SelectContent>
				</Select>
				<Button className='px-10 w-2/5' onClick={onClickAdd}>
					В корзину
				</Button>
			</div>

			<p className='text-lg mt-8'>{info.description_text}</p>

			<Image
				src={info.description_image}
				width={1000}
				height={1000}
				alt='размеры'
				className='mt-4'
				priority={true}
			/>
		</div>
	)
}
export { ProductTextBlock }
