import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NftCreator from "@/components/NftCreator";
import Head from "next/head";
import BlueEffect from '../public/blue-effect.png';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Tender Tigers Mint</title>
        <meta charSet="UTF-8" />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='author' content='Tender Tigers' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Brands />
      <Features />
      <div className="relative overflow-hidden">
        <NftCreator />
        <Image src={BlueEffect} alt='' className='absolute lg:bottom-[7rem] md:bottom-[26rem] bottom-[53rem] lg:-right-72 md:-right-80 -right-32' width={1100} />
        <Footer />
      </div>
    </main>
  )
}
