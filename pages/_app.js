import 'react-notifications/lib/notifications.css'
import { MagicBellProvider } from '@magicbell/magicbell-react'

export default function App({ Component, pageProps }) {
  return (
    <MagicBellProvider apiKey={process.env.MAGICBELL_API_KEY} userEmail={process.env.MAGICBELL_USER_EMAIL}>
      <Component {...pageProps} />
    </MagicBellProvider>
  )
}
