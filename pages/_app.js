import Head from "next/head";
import "./index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
