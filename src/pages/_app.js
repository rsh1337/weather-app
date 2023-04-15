import '@/styles/globals.css'
import Layout from '@/components/Layout';
import {useEffect} from "react";
import initPush from "../../lib/push";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        initPush();
    }, []);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
}
