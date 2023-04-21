import '@/styles/globals.css'
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), { ssr: false });
export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
          <PWAPrompt
              copyTitle="Add to Home Screen"
              copyBody="This website has app-like functionalities. Add it to your home screen for a more immersive experience!"
              copyShareButtonLabel="1) Tap the 'share' button"
              copyAddHomeButtonLabel="2) Tap 'Add to Home Screen'"
              copyClosePrompt="Close"
          />
      </Layout>)
}
