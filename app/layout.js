import Header from '@/app/_components/Header'
import '@/app/_styles/globals.css'

import { Josefin_Sans } from 'next/font/google'
import Reservation from './_components/Reservation'
import { ReservationProvider } from './_components/ReservationContext'
const josefin = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	// title: 'The Wild Oasis',
	title: {
		template: '%s / The Wild Oasis',
		default: 'Welcome / The Wild Oasis',
	},
	description:
		'Luxurious cabins hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body
				className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
			>
				<Header />
				<div className="flex-1  px-8 py-12 ">
					<main className="max-w-7xl  mx-auto w-full ">
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	)
}
