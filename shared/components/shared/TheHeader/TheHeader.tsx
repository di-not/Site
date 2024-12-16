'use client'
import styles from './TheHeader.module.scss'
import { Logo } from '../../ui/Logo'
import logo from '@/public/assets/images/logo.svg'
import { FooterCartButton } from '../FooterCartButton'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
const menuArray = [
	{
		title: 'Главная',
		url: '/',
	},
	{
		title: 'О нас',
		url: '/about',
	},
	{
		title: 'Новости',
		url: '/news',
	},
	{
		title: 'Войти?',
		url: '/login',
	},
]
interface TheHeaderProps {}
const TheHeader: React.FC<TheHeaderProps> = props => {
	return (
		<>
			<header className='sticky top-0 w-full z-[50] backdrop-blur-[8px] shadow-md '>
				<div className='container '>
					<div className='flex justify-between h-[80px] items-center'>
						<Logo className='w-[140px]' url={logo} />
						<nav className='h-16 flex items-center'>
							<ul className='flex flex-row justify-between gap-5'>
								<li className='flex h-fit my-auto relative' key={'first'}>
									<Sheet>
										<SheetTrigger className={`${styles.burger}`}>
											{[...Array(3)].map((value,index) => {
												return <div className={styles.burger_span} key={index}></div>
											})}
										</SheetTrigger>
										<SheetContent className='w-[300px] px-0'>
											<SheetHeader>
												<SheetTitle className='text-2xl px-5 pb-2 border-b-2'>Меню</SheetTitle>
												<SheetDescription></SheetDescription>
												<ul className='flex flex-col justify-center items-center'>
													{menuArray.map((value)=>{
														return (
															<li
																className='flex mb-1 w-full hover:'
																key={value.title}
															>
																<Link
																	href={value.url}
																	className='text-black text-2xl p-1 w-full justify-center flex hover:bg-primary/10'
																>
																	{value.title}
																</Link>
															</li>
														)
													})}
												</ul>
											</SheetHeader>
										</SheetContent>
									</Sheet>
								</li>
								<li className='flex h-fit' key={'second'}>
									<FooterCartButton />
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}
export { TheHeader }
