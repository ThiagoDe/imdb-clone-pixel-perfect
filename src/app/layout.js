import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      {/* <body className={inter.className} suppressHydrationWarning={true}> */}
      <body  suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
