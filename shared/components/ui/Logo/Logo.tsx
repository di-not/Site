import Link from 'next/link'
import styles from './Logo.module.scss'
import Image from 'next/image'
interface LogoProps {
	className:string
	url: string
}
const Logo: React.FC<LogoProps> = props => {
	const { className, url } = props
	
	return (
		<Link href={'/'} className='flex h-fit'>
			<Image
				priority
				src={url}
				alt='Логотип'
				width={100}
				height={100}
				className={className}
			/>
		</Link>
	)
}
export { Logo }
