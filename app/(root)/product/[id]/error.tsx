'use client'

import Link from "next/link"

export default function ErrorWrapper({ error }: { error: Error }) {
	return (
		<div className="container">
			<div className="h-full w-full ">
				<Link href='/'>Вернуться на главную</Link>
				<h1>Что-то пошло не так...</h1>
				<p>{error.message}</p>
			</div>
		</div>
	)
}
// TODO - сделать эту страницу
