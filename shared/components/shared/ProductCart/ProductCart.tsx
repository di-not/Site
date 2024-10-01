'use client'
import { ProductType } from '@/@types/mainTypes.types'
import styles from './ProductCart.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import useHover from '@/shared/hooks/useHover'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { ShoppingBasket } from 'lucide-react'
interface ProductCartProps {
	data: ProductType
	index: number
}
const ProductCart: React.FC<ProductCartProps> = props => {
	const { data, index } = props
	const cardRef = useRef<HTMLAnchorElement>(null)
	const priceRef = useRef<HTMLButtonElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)
	const isHoveredCard = useHover(cardRef)
	const isHoveredPrice = useHover(priceRef)
	const isHoveredImage = useHover(imageRef)
	return (
		<Link
			href={`product/${data.id}`}
			ref={cardRef}
			className={`w-full max-w-96 min-h-[500px] h-full flex flex-col border-solid border-[1px] 
				border-[rgb(228, 228, 228] justify-between p-3 my-auto rounded-xl
				${styles.card}`}
		>
			<Image
				alt='изображение товара'
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

				<button
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
				</button>
			</div>
		</Link>
	)
}
export { ProductCart }
