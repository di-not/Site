'use client'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		// TODO - сделать лоадинг
		<PersistGate loading={null} persistor={persistor} >
			<Provider store={store}>{children}</Provider>
		</PersistGate>
	)
}
