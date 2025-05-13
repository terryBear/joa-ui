import { PrimeReactProvider } from 'primereact/api'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { SafariRouter } from './Providers/RouteProvider.tsx'
import { SafariProvider } from './Providers/SafariProvider.tsx'
import './scss/global.scss'

createRoot(document.getElementById('root')!).render(
	<PrimeReactProvider>
		<SafariProvider>
			<SafariRouter />
			<App />
		</SafariProvider>
	</PrimeReactProvider>
)
