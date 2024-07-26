// pages/_app.tsx
import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <><title>refer program</title>
      <Head>
      <meta name="description" content="Explore the ultimate collection of digital solutions at Butterfly Digital Solutions Pvt. Ltd. From innovative web design to advanced SEO services, we help your business thrive online. Contact us today for custom-tailored digital strategies." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // CrossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aclonica&display=swap"
          rel="stylesheet"
        />
      </Head>{" "}
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>
  );
}

export default MyApp;
