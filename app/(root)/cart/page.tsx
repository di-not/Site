'use client'
import { useReduxStates } from '@/shared/redux/hooks/useReduxStates'
import styles from './Cart.module.scss'
import { cn } from '@/lib/utils'
import { ShoppingBasket } from 'lucide-react'
import { CartInner } from '@/shared/components/shared/CartInner/CartInner'
import { Button } from '@/shared/components/ui/button'
import { useRouter } from 'next/navigation'
export default function Cart() {
	const { cartItems } = useReduxStates()
	const title: string[] =
		!cartItems || cartItems.length <= 0
			? 'Корзина пуста...'.toUpperCase().split('')
			: 'Корзина'.toUpperCase().split('')
	const router = useRouter()
	return (
		<div className='container'>
			<div className='flex flex-col mt-12 mb-12'>
				<div className={cn(`text-center text-6xl ease-out ${styles.title}`)}>
					{title.map((value,index) => {
						return (
							<span
								key={`${value}${index}`}
								className='ease-out duration-1000 cursor-pointer font-semibold'
							>
								{value}
							</span>
						)
					})}
				</div>
				<ShoppingBasket className='absolute w-3/4 h-3/4 top-0 left-0 right-0 bottom-0 m-auto opacity-5 z-[-1000]' />

				{!cartItems || cartItems.length <= 0 ? (
					<div className='flex justify-center flex-col'>
						<Button
							className='px-16 py-8 mx-auto mt-8'
							onClick={() => router.push('/')}
						>
							<span className='text-xl'>Выбрать чё-нить</span>
						</Button>
					</div>
				) : (
					<CartInner data={cartItems} />
				)}
			</div>
		</div>
	)
}
