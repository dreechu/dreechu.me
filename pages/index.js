import Head from "next/head";
import Social from "../components/general/Social";

export default function Home() {
  return (
    <div>
      <Head>
        <title>dreechu.me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="px-[4rem] py-[3rem] 
      md:px-[6rem] md:py-[3rem] 
      lg:px-[24rem] lg:py-[12rem]">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">dreechu<a className="text-[#329ef0]">.me</a></h1>
          <p className="
          text-[#329ef0] 
          md:text-xl md:pb-2 md:pt-1 
          lg:text-3xl lg:pt-2 lg:pb-4">Dreechu</p>
          <p className="
          text-[0.9rem]
          lg:text-3xl">I like playing games,</p>
          <p className="
          text-[0.9rem]
          lg:text-3xl">I also code stuff sometimes.</p>
          <p></p>
        </div>
      </section>
    </div>
  )
}
