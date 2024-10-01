import { useEffect, useState } from 'react'

export default function useHover(ref: React.RefObject<any>) {
	const [isHovered, setIsHovered] = useState(false)
	const on = () => {
		setIsHovered(true)
	}
	const off = () => {
		setIsHovered(false)
	}
	useEffect(() => {
		if (!ref.current) {
			return
		}
		const cur = ref.current

		cur.addEventListener('mouseenter', on)
		cur.addEventListener('mousemove', on)
		cur.addEventListener('mouseleave', off)
		return function () {
			cur.removeEventListener('mouseenter', on)
			cur.removeEventListener('mousemove', on)
			cur.removeEventListener('mouseleave', off)
		}
	}, [])
	return isHovered
}
