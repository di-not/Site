
import { ShoppingCart } from 'lucide-react'
import styles from './TheHeader.module.scss'
import { Logo } from '../../ui/Logo'
import logo from '@/public/assets/images/logo.svg'
import Link from 'next/link'
interface TheHeaderProps {}
const TheHeader: React.FC<TheHeaderProps> = props => {
	const {} = props
	return (
		<header className='sticky top-0 w-full z-[1000] backdrop-blur-[8px] shadow-md'>
			<div className='container '>
				<div className='flex justify-between h-[80px] items-center'>
					<Logo className='w-[140px]' url={logo} />
					
					<nav className='h-16 flex items-center'>
						<ul className='flex flex-row justify-between gap-5'>
							<li className='flex h-fit my-auto'>
								<button type='button' className={`${styles.burger}`}>
									{[...Array(3)].map(() => {
										return <div className={styles.burger_span}></div>
									})}
								</button>
							</li>
							<li className='flex h-fit'>
								<Link
									href='/cart'
									className='relative bg-black rounded-xl flex py-2 px-3
																 justify-between items-center gap-3'
								>
									<ShoppingCart
										width={18}
										height={18}
										className={styles.cart}
										color='#ffffff'
									/>
									<p className='text-white text-sm'>Корзина</p>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
export { TheHeader }
