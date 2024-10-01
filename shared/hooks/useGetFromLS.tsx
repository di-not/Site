import { useEffect, useState } from 'react'

export default function useGetFromLS(item: string) {
	const [data, setData] = useState<string | null>('')
	useEffect(() => {
		setData(localStorage.getItem(item.toString()))
	}, [])
	return data
}
