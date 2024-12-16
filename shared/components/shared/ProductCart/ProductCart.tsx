'use client'
import { ProductType, Sizes } from '@/@types/mainTypes.types'
import styles from './ProductCart.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import useHover from '@/shared/hooks/useHover'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { ShoppingBasket } from 'lucide-react'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/components/ui/drawer'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../ui/select'
import { useActions } from '@/shared/redux/hooks/useActions'
import { useToast } from '@/hooks/use-toast'
import { sizes } from '@/public/assets/arrays'
import { ToastAction } from '../../ui/toast'
import { Button } from '../../ui/button'
interface ProductCartProps {
	data: ProductType
	index: number
}
const ProductCart: React.FC<ProductCartProps> = props => {
	const { data, index } = props
	const [size, setSize] = useState(sizes[0])
	const { addCartItem, removeCartItem } = useActions()
	const { toast } = useToast()
	const cardRef = useRef<HTMLDivElement>(null)
	const priceRef = useRef<HTMLButtonElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)
	const isHoveredCard = useHover(cardRef)
	const isHoveredPrice = useHover(priceRef)
	const isHoveredImage = useHover(imageRef)

	const onClickAdd = () => {
		addCartItem({ product: data, size: size })
		toast({
			title: 'Добавлено в корзину',
			description: `${data.name} / ${size}`,
			action: (
				<ToastAction
					altText='удалить'
					onClick={() => {
						removeCartItem({ product: data, size: size })
					}}
				>
					Удалить
				</ToastAction>
			),
		})
	}
	return (
		<div
			className={`max-w-96 min-h-[500px] h-full w-full my-auto flex flex-col border-solid border-[1px] 
				border-[rgb(228, 228, 228] justify-between p-3  rounded-xl  
				${styles.card}`}
			ref={cardRef}
		>
			<Link href={`product/${data.id}`}>
				<Image
					alt='изображение товара'
					priority={true}
					ref={imageRef}
					src={
						!isHoveredImage
							? data.images
							: 'https://i.pinimg.com/564x/cb/70/e6/cb70e6307888d6e80d4f01806d180159.jpg'
					}
					width={300}
					height={300}
					className={`w-full object-cover h-96 ${styles.image}`}
				/>
				<div className='mt-2 flex flex-col justify-between h-full min-h-full '>
					<h3
						className={`h-14 overflow-hidden text-xl duration-500 ease-out ${
							isHoveredCard ? 'translate-y-0.5' : ''
						}`}
					>
						{data.name}
					</h3>
				</div>
			</Link>
			<Drawer>
				<DrawerTrigger
					ref={priceRef}
					className={cn(
						`border-[1px] p-[2px] px-2 mt-3 rounded-xl border-solid duration-500 ease-out 
						border-transparent border-black relative z-10${
							!isHoveredPrice ? '' : ' bg-black ease-out '
						}
						${isHoveredCard ? 'translate-y-0.5' : ''}`
					)}
				>
					<p
						className={cn(
							`${isHoveredPrice ? 'text-transparent' : 'text-black'}`
						)}
					>
						{data.price}₽
					</p>
					{isHoveredPrice && (
						<ShoppingBasket
							color='#ffffff'
							size={20}
							strokeWidth={2.25}
							className='absolute top-0 right-0 left-0 bottom-0 m-auto'
						/>
					)}
				</DrawerTrigger>
				<DrawerContent className='pb-8 flex flex-col justify-center items-center '>
					<DrawerHeader className='w-fit'>
						<DrawerTitle className='mb-6 '>Выберите размер</DrawerTitle>
						<DrawerDescription></DrawerDescription>
						<Select
							onValueChange={(value: Sizes) => {
								setSize(value)
							}}
						>
							<SelectTrigger className='w-80'>
								<SelectValue placeholder={size} />
							</SelectTrigger>
							<SelectContent>
								{sizes.map(value => {
									return (
										<SelectItem
											disabled={!data.sizes.includes(value)}
											key={value}
											value={`${value}`}
										>
											{data.sizes?.includes(value)
												? value
												: `${value} нет в наличии`}
										</SelectItem>
									)
								})}
							</SelectContent>
						</Select>
					</DrawerHeader>
					<DrawerFooter className='w-fit'>
						<DrawerClose
							className='w-80 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-2 py-2 rounded-xl'
							onClick={onClickAdd}
						>
							В корзину
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
export { ProductCart }
