import Head from "next/head";
import "./index.scss";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  gsap.defaults({ ease: "power2.out", duration: 0.333 });
  gsap.config({ nullTargetWarn: false });

  gsap.registerEffect({
    name: "fadeIn",
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        duration: config.duration,
        opacity: 0,
        y: config.y,
        delay: config.delay,
        stagger: config.stagger,
      });
    },
    defaults: { duration: 1, y: 40, delay: 0, stagger: 0 },
  });

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
