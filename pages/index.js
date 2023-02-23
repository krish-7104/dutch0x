import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import TopDrawer from "./components/TopDrawer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#f5f5f5]">
        <div className="bg-white shadow-sm pb-8">
          <Navbar />
          <TopDrawer />
        </div>
        <div className="flex justify-between mt-4 mx-10">
          <div className="w-[68%]">
            <p className="text-[#00000080] text-xl">Events</p>
            {/* First Card */}
            <div className="bg-white mt-4 rounded-md flex justify-between items-center shadow-md pb-4 pt-2 mb-8">
              <div className="w-full">
                <div className="pt-3 flex">
                  <p className="bg-[#3caa2a] text-white text-[10px] inline-block font-semibold tracking-wider rounded-r-md pr-2 pl-8 py-1">
                    AIRDROP
                  </p>
                  <p className="bg-[#e4e4e4] text-black text-[10px] font-bold tracking-wider rounded-md py-1 px-3 ml-2 flex justify-center items-center">
                    <svg
                      className="mr-2"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5 0C3.63261 0 3.75979 0.0526784 3.85355 0.146447C3.94732 0.240215 4 0.367392 4 0.5V1.5H10V0.5C10 0.367392 10.0527 0.240215 10.1464 0.146447C10.2402 0.0526784 10.3674 0 10.5 0C10.6326 0 10.7598 0.0526784 10.8536 0.146447C10.9473 0.240215 11 0.367392 11 0.5V1.5H11.5C12.0304 1.5 12.5391 1.71071 12.9142 2.08579C13.2893 2.46086 13.5 2.96957 13.5 3.5V11C13.5 11.5304 13.2893 12.0391 12.9142 12.4142C12.5391 12.7893 12.0304 13 11.5 13H2.5C1.96957 13 1.46086 12.7893 1.08579 12.4142C0.710714 12.0391 0.5 11.5304 0.5 11V3.5C0.5 2.96957 0.710714 2.46086 1.08579 2.08579C1.46086 1.71071 1.96957 1.5 2.5 1.5H3V0.5C3 0.367392 3.05268 0.240215 3.14645 0.146447C3.24021 0.0526784 3.36739 0 3.5 0ZM12.5 6C12.5 5.73478 12.3946 5.48043 12.2071 5.29289C12.0196 5.10536 11.7652 5 11.5 5H2.5C2.23478 5 1.98043 5.10536 1.79289 5.29289C1.60536 5.48043 1.5 5.73478 1.5 6V11C1.5 11.2652 1.60536 11.5196 1.79289 11.7071C1.98043 11.8946 2.23478 12 2.5 12H11.5C11.7652 12 12.0196 11.8946 12.2071 11.7071C12.3946 11.5196 12.5 11.2652 12.5 11V6Z"
                        fill="black"
                      />
                    </svg>
                    Harvest
                  </p>
                  <div className="flex justify-center items-center ml-4">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 0C3.41 0 0.5 2.91 0.5 6.5C0.5 10.09 3.41 13 7 13C10.59 13 13.5 10.09 13.5 6.5C13.5 2.91 10.59 0 7 0ZM7.5 2.5C7.5 2.36739 7.44732 2.24021 7.35355 2.14645C7.25979 2.05268 7.13261 2 7 2C6.86739 2 6.74022 2.05268 6.64645 2.14645C6.55268 2.24021 6.5 2.36739 6.5 2.5V6.5C6.5 6.776 6.724 7 7 7H10C10.1326 7 10.2598 6.94732 10.3536 6.85355C10.4473 6.75979 10.5 6.63261 10.5 6.5C10.5 6.36739 10.4473 6.24022 10.3536 6.14645C10.2598 6.05268 10.1326 6 10 6H7.5V2.5Z"
                        fill="black"
                        fill-opacity="0.7"
                      />
                    </svg>
                    <p className="font-bold text-[14px] mx-2">Started</p>
                    <p className="text-[14px]">2022-09-13 08:57:15</p>
                  </div>
                </div>
                <p className="tracking-tight mt-3 ml-8">
                  🍎🍌🍍The Fruit Salad Game🍆🥦🥕
                </p>
                <div className="flex justify-start items-center ml-8">
                  <p className="tracking-tight my-3 text-2xl font-semibold">
                    Manure
                  </p>
                  <p className="text-sm ml-2 -mb-2">x 100</p>
                </div>
                <div className="flex items-center ml-8">
                  <p>Wallet Transactions:</p>
                  <p className="ml-4 mr-2">
                    <b>44</b> Success
                  </p>
                  <p className="mx-2">
                    <b>8</b> Processing
                  </p>
                  <p className="mx-2">
                    <b>2</b> Failed
                  </p>
                </div>
                <div className="bg-[#00000049] h-[14px] w-[100%] block mt-3 ml-8 rounded-[8px]">
                  <span className="h-[14px] w-[60%] block gradient rounded-[8px]"></span>
                </div>
                <div className="ml-8 flex items-center mt-4">
                  <button className="bg-black border-2 border-black text-white rounded-md text-sm py-2 px-2">
                    More Details
                  </button>
                  <button className="border-2 border-black text-black rounded-md text-sm py-2 px-2 ml-2">
                    Cancel
                  </button>
                  <div className="ml-4 flex">
                    <input type="checkbox" id="" className="accent-black" />
                    <p className="ml-2">Receive report on email</p>
                  </div>
                </div>
              </div>
              <Image
                className="mx-10"
                src="/manure.svg"
                alt="find holders"
                width={200}
                height={200}
              />
              {/* <Image
                className="mr-10 absolute left-80"
                src="/manure.svg"
                alt="find holders"
                width={200}
                height={200}
              /> */}
            </div>
            {/* Second Card */}
            <div className="bg-white mt-4 rounded-md flex justify-between items-center shadow-md pb-4 pt-2 mb-8">
              <div className="w-full">
                <div className="pt-3 flex">
                  <p className="bg-[#28458f] text-white text-[10px] inline-block font-semibold tracking-wider rounded-r-md pr-2 pl-8 py-1">
                    AIRDROP
                  </p>
                  <p className="bg-[#e4e4e4] text-black text-[10px] font-bold tracking-wider rounded-md py-1 px-3 ml-2 flex justify-center items-center">
                    <svg
                      className="mr-2"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5 0C3.63261 0 3.75979 0.0526784 3.85355 0.146447C3.94732 0.240215 4 0.367392 4 0.5V1.5H10V0.5C10 0.367392 10.0527 0.240215 10.1464 0.146447C10.2402 0.0526784 10.3674 0 10.5 0C10.6326 0 10.7598 0.0526784 10.8536 0.146447C10.9473 0.240215 11 0.367392 11 0.5V1.5H11.5C12.0304 1.5 12.5391 1.71071 12.9142 2.08579C13.2893 2.46086 13.5 2.96957 13.5 3.5V11C13.5 11.5304 13.2893 12.0391 12.9142 12.4142C12.5391 12.7893 12.0304 13 11.5 13H2.5C1.96957 13 1.46086 12.7893 1.08579 12.4142C0.710714 12.0391 0.5 11.5304 0.5 11V3.5C0.5 2.96957 0.710714 2.46086 1.08579 2.08579C1.46086 1.71071 1.96957 1.5 2.5 1.5H3V0.5C3 0.367392 3.05268 0.240215 3.14645 0.146447C3.24021 0.0526784 3.36739 0 3.5 0ZM12.5 6C12.5 5.73478 12.3946 5.48043 12.2071 5.29289C12.0196 5.10536 11.7652 5 11.5 5H2.5C2.23478 5 1.98043 5.10536 1.79289 5.29289C1.60536 5.48043 1.5 5.73478 1.5 6V11C1.5 11.2652 1.60536 11.5196 1.79289 11.7071C1.98043 11.8946 2.23478 12 2.5 12H11.5C11.7652 12 12.0196 11.8946 12.2071 11.7071C12.3946 11.5196 12.5 11.2652 12.5 11V6Z"
                        fill="black"
                      />
                    </svg>
                    It&apos;s Raining
                  </p>
                  <div className="flex justify-center items-center ml-4">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 0C3.41 0 0.5 2.91 0.5 6.5C0.5 10.09 3.41 13 7 13C10.59 13 13.5 10.09 13.5 6.5C13.5 2.91 10.59 0 7 0ZM7.5 2.5C7.5 2.36739 7.44732 2.24021 7.35355 2.14645C7.25979 2.05268 7.13261 2 7 2C6.86739 2 6.74022 2.05268 6.64645 2.14645C6.55268 2.24021 6.5 2.36739 6.5 2.5V6.5C6.5 6.776 6.724 7 7 7H10C10.1326 7 10.2598 6.94732 10.3536 6.85355C10.4473 6.75979 10.5 6.63261 10.5 6.5C10.5 6.36739 10.4473 6.24022 10.3536 6.14645C10.2598 6.05268 10.1326 6 10 6H7.5V2.5Z"
                        fill="black"
                        fill-opacity="0.7"
                      />
                    </svg>
                    <p className="font-bold text-[14px] mx-2">Started</p>
                    <p className="text-[14px]">2022-09-13 08:57:15</p>
                  </div>
                </div>
                <p className="tracking-tight mt-3 ml-8">
                  🍎🍌🍍The Fruit Salad Game🍆🥦🥕
                </p>
                <div className="flex justify-start items-center ml-8">
                  <p className="tracking-tight my-3 text-2xl font-semibold">
                    Water
                  </p>
                  <p className="text-sm ml-2 -mb-2">x 100</p>
                </div>
                <div className="flex items-center ml-8">
                  <p>Wallet Transactions:</p>
                  <p className="ml-4 mr-2">
                    <b>100</b> Success
                  </p>
                  <p className="mx-2">
                    <b>0</b> Processing
                  </p>
                  <p className="mx-2">
                    <b>0</b> Failed
                  </p>
                </div>
                <div className="bg-[#00000049] h-[14px] w-[100%] block mt-3 ml-8 rounded-[8px]">
                  <span className="h-[14px] w-[100%] block gradient rounded-[8px]"></span>
                </div>
                <div className="ml-8 flex items-center mt-4">
                  <button className="bg-black border-2 border-black text-white rounded-md text-sm py-2 px-2">
                    More Details
                  </button>
                </div>
              </div>
              <Image
                className="mx-10"
                src="/water.svg"
                alt="find holders"
                width={200}
                height={200}
              />
              {/* <Image
                className="mr-10 absolute left-80"
                src="/manure.svg"
                alt="find holders"
                width={200}
                height={200}
              /> */}
            </div>
          </div>
          <div className="w-[28%]">
            <p className="text-[#00000080] text-xl">Overview</p>
            <div className="shadow-md bg-white flex items-center justify-between px-4 rounded-md mt-4 py-3">
              <p className="text-[#00000099]">Wallet balance</p>
              <div className="flex justify-center items-center">
                <p>0.489 ETH</p>
                <svg
                  className="ml-6 mr-2 mt-1"
                  width="10"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="shadow-md bg-white flex px-4 rounded-md mt-4 py-3 flex-col">
              <p className="text-lg mb-4">NFTs</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#00000080]">NFT items</p>
                <div className="flex items-center">
                  <p>187</p>
                  <svg
                    className="ml-6 mr-2 mt-1"
                    width="10"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                      fill="black"
                      fill-opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#00000080]">Collections</p>
                <div className="flex items-center">
                  <p>5</p>
                  <svg
                    className="ml-6 mr-2 mt-1"
                    width="10"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                      fill="black"
                      fill-opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#00000080]">Minted</p>
                <div className="flex items-center">
                  <p>39</p>
                  <svg
                    className="ml-6 mr-2 mt-1"
                    width="10"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                      fill="black"
                      fill-opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="shadow-md bg-white flex px-4 rounded-md mt-4 py-3 flex-col">
              <p className="text-lg mb-4">Saved Searches</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#00000080]">Green apple</p>
                <svg
                  className="ml-6 mr-2 mt-1"
                  width="10"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[#00000080]">Christmas tree</p>
                <svg
                  className="ml-6 mr-2 mt-1"
                  width="10"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="shadow-md bg-white flex px-4 rounded-md mt-4 py-3 flex-col">
              <p className="text-lg mb-4">Recent Activity</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#00000080]">Settings &gt; Account</p>
                <svg
                  className="ml-6 mr-2 mt-1"
                  width="10"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[#00000080]">Sales reports</p>
                <svg
                  className="ml-6 mr-2 mt-1"
                  width="10"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35002 13.6667L0.166687 12.4833L5.65002 7L0.166687 1.51667L1.35002 0.333336L8.01669 7L1.35002 13.6667Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
