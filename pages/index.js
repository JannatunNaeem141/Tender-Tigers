import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NftCreator from "@/components/NftCreator";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Tender Tigers</title>
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
      <NftCreator />
    </main>
  )
}
