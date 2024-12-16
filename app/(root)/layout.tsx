
import type { Metadata } from 'next'
import { TheHeader } from '@/shared/components/shared/TheHeader'
import { Toaster } from '@/shared/components/ui/toaster'

export const metadata: Metadata = {
	title: 'Главная',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<TheHeader />
			<main>{children}</main>
			<Toaster />
		</>
	)
}
