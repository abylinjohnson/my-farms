// @ts-nocheck
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (    <Layout>
    {" "}
    <Head>
      <title>My Farms</title>
    </Head>{" "}
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
