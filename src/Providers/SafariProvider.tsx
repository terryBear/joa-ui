/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
import { Toast } from 'react-bootstrap'
import { Loading } from '../components/Loading/Loading'
import { FilterOptions } from '../types/filters'
import { Tour } from '../types/tours'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCGmS_dk5RTo5bkYG4Z7tTTdvBsBQNLhPE',
	authDomain: 'dev-joasafaris.firebaseapp.com',
	projectId: 'dev-joasafaris',
	storageBucket: 'dev-joasafaris.firebasestorage.app',
	messagingSenderId: '499230620448',
	appId: '1:499230620448:web:b87b4ad7bd761259baf545',
	measurementId: 'G-WBTW3XMGNX',
}

interface SnackbarProps {
	message: string
	severity: 'success' | 'danger' | 'info' | 'warning'
}
interface ProviderContextType {
	tours: Tour[]
	setTours: Dispatch<SetStateAction<Tour[]>>
	isLoading: boolean
	setIsLoading: Dispatch<SetStateAction<boolean>>
	activeTour: Tour | null
	setActiveTour: Dispatch<SetStateAction<Tour | null>>
	handleFilterChange: (filter: FilterOptions[]) => void
	filter: FilterOptions[]
	setFilter: Dispatch<SetStateAction<FilterOptions[]>>
	snackbar: any
	setSnackbar: Dispatch<SetStateAction<any>>
	handleSnackbar: (event: SnackbarProps) => void
}

const AppContext = createContext<ProviderContextType>({} as ProviderContextType)

interface SafariProviderProps {
	children: React.ReactNode
}

export const SafariProvider: FC<SafariProviderProps> = ({ children }) => {
	const [tours, setTours] = useState<Tour[]>([])
	const [activeTour, setActiveTour] = useState<Tour | null>(null)
	const [filter, setFilter] = useState<FilterOptions[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [snackbar, setSnackbar] = useState<any>({})

	useEffect(() => {
		// Initialize Firebase
		const app = initializeApp(firebaseConfig)
		getAnalytics(app)
	}, [])

	const handleFilterChange = (filter: FilterOptions[]) => {
		setFilter(filter)
	}

	const handleSnackbar = ({ message, severity }: SnackbarProps) => {
		setSnackbar({
			message,
			severity,
			open: true,
		})
		setTimeout(() => {
			setSnackbar((prev: any) => ({ ...prev, open: false }))
		}, 3000)
	}
	const toggleShow = () => {
		setSnackbar((prev: any) => ({ ...prev, open: false }))
	}

	const value = useMemo(
		() => ({
			tours,
			setTours,
			activeTour,
			setActiveTour,
			handleFilterChange,
			filter,
			setFilter,
			isLoading,
			setIsLoading,
			handleSnackbar,
			snackbar,
			setSnackbar,
		}),
		[tours, activeTour, filter, isLoading, snackbar]
	)

	return (
		<AppContext.Provider value={value}>
			{isLoading && <Loading />}
			{children}
			{snackbar.open && (
				<Toast className='custom-toast' show={snackbar.open} onClose={toggleShow} delay={3000} autohide bg={snackbar.severity}>
					<Toast.Header>
						<strong className='me-auto'>Notification</strong>
						<small>Just now</small>
					</Toast.Header>
					<Toast.Body>{snackbar.message}</Toast.Body>
				</Toast>
			)}
		</AppContext.Provider>
	)
}

export const useSafariContext = () => useContext(AppContext)
