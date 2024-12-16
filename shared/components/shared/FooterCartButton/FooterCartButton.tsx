'use client'
import { ShoppingCart } from 'lucide-react'
import styles from './FooterCartButton.module.scss'
import { useReduxStates } from '@/shared/redux/hooks/useReduxStates'
import Link from 'next/link'
interface FooterCartButtonProps {}
const FooterCartButton: React.FC<FooterCartButtonProps> = props => {
	const {} = props
	const { cartItems } = useReduxStates()
	let length = 0
	for (let index = 0; index < cartItems.length; index++) {
		length += cartItems[index].count
	}
	return (
		<Link
			href='/cart'
			className='bg-black rounded-xl flex py-2 px-3 justify-between items-center gap-3 '
		>
			<ShoppingCart
				width={18}
				height={18}
				className={styles.cart}
				color='#ffffff'
			/>
			<div className='text-white text-sm'>
				{length <= 0 ? (
					<p>Корзина</p>
				) : (
					<p>{`Корзина | ${length.toString()}`}</p>
				)}
			</div>
		</Link>
	)
}
export { FooterCartButton }
