import 'tailwindcss/tailwind.css'

import '../styles/global.css'
import '../styles/menu.css'
import '../styles/loading.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}