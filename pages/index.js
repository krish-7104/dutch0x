import Head from "next/head";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import TopDrawer from "./components/TopDrawer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DutchoX</title>
        <meta name="description" content="By Krish Jotaniya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#f5f5f5] w-full min-h-[100vh] pb-10">
        <div className="bg-white shadow-md pb-8">
          <Navbar />
          <TopDrawer />
        </div>
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex justify-between mt-4 mx-10">
            <div className="w-[68%]">
              <p className="text-[#00000080] text-xl">Events</p>
              <Card />
            </div>
            <SidePanel />
          </div>
        </div>
      </main>
    </>
  );
}
