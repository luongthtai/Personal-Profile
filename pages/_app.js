import "../styles/globals.scss"
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['lang'] })

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>)
}