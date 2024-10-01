'use client'
import styles from './ProductImageBlock.module.scss'
import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/components/ui/carousel'
import { ProductType } from '@/@types/mainTypes.types'
import { useState } from 'react'
import useWindowSize from '@/shared/hooks/useWindowWidth'

interface ProductImageBlockProps {
	info: ProductType
}
const ProductImageBlock: React.FC<ProductImageBlockProps> = props => {
	const { info } = props
	const [paginateItem, setPaginateItem] = useState(0)
	const windowWidth = useWindowSize()

	function HandleChoiceImage(id: number) {
		setPaginateItem(id)
	}
	return (
		<div
			className={`flex ${
				windowWidth >= 1024 ? 'flex-row sticky top-20' : 'flex-col'
			}  lg:max-h-[540px] `}
		>
			{windowWidth >= 1024 && (
				<div className='min-w-[80px] py-4 mr-10 h-full lg:max-h-[520px]'>
					<Carousel
						opts={{
							align: 'start',
							dragFree: false,
							skipSnaps: false,
						}}
						orientation={'vertical'}
						className='w-full max-w-xs '
					>
						<CarouselContent className='max-h-[500px]'>
							{[...Array(15)].map((value, index) => {
								return (
									<CarouselItem key={index} className='m-auto'>
										<button
											onClick={() => HandleChoiceImage(index)}
											className={`${
												paginateItem === index && styles.active_image
											}`}
										>
											<Image
												width={100}
												height={100}
												src={info.images}
												alt='изображение'
												className='w-full max-h-[120px] h-full'
											/>
										</button>
									</CarouselItem>
								)
							})}
						</CarouselContent>

						<CarouselPrevious className='top-1' />
						<CarouselNext className='-bottom-1' />
					</Carousel>
				</div>
			)}

			<Carousel className='h-fit m-auto'>
				<CarouselContent>
					{[...Array(3)].map((value, index) => {
						return (
							<CarouselItem key={index}>
								<Image
									width={1000}
									height={1000}
									src={info.images}
									alt='изображение'
									className='w-full lg:max-h-[520px] h-full'
								/>
							</CarouselItem>
						)
					})}
				</CarouselContent>
				<CarouselPrevious className='left-2' />
				<CarouselNext className='right-2' />
			</Carousel>

			{windowWidth < 1024 && (
				<div className='w-full px-4 mr-10 h-full lg:max-h-[520px]'>
					<Carousel
						opts={{
							align: 'start',
							dragFree: false,
							skipSnaps: false,
						}}
						orientation={'horizontal'}
						className='w-full'
					>
						<CarouselContent className='max-w-[140px] h-full'>
							{[...Array(20)].map((value, index) => {
								return (
									<CarouselItem key={index} className='w-[100px]'>
										<button
											onClick={() => HandleChoiceImage(index)}
											className={`${
												paginateItem === index && styles.active_image
											}`}
										>
											<Image
												width={100}
												height={100}
												src={info.images}
												alt='изображение'
												className='w-full'
											/>
										</button>
									</CarouselItem>
								)
							})}
						</CarouselContent>

						<CarouselPrevious className='left-2' />
						<CarouselNext className='right-2' />
					</Carousel>
				</div>
			)}
		</div>
	)
}
export default ProductImageBlock
