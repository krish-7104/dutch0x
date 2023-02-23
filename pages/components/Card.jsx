import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      {/* First Card */}
      <div className="bg-white mt-4 rounded-md flex justify-between items-center shadow-md pb-4 pt-2 mb-8 overflow-hidden relative">
        <div className="w-full">
          <div className="pt-3 flex">
            <p className="bg-[#3caa2a] text-white text-[10px] font-semibold tracking-wider rounded-r-md pr-2 pl-6 py-1 flex justify-center items-center">
              <svg
                className="mr-2"
                width="15"
                height="15"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.00018"
                  cy="8.4987"
                  r="8"
                  fill="white"
                  fill-opacity="0.3"
                />
                <path
                  d="M16.0002 8.4987C16.0002 9.54927 15.7933 10.5896 15.3912 11.5602C14.9892 12.5308 14.3999 13.4127 13.657 14.1555C12.9142 14.8984 12.0323 15.4877 11.0617 15.8897C10.091 16.2918 9.05076 16.4987 8.00018 16.4987L8.00018 8.4987H16.0002Z"
                  fill="white"
                />
              </svg>
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
              <p className="font-bold text-[14px] mx-2 z-20">Started</p>
              <p className="text-[14px] z-20">2022-09-13 08:57:15</p>
            </div>
          </div>
          <p className="tracking-tight mt-3 ml-6 z-20">
            🍎🍌🍍The Fruit Salad Game🍆🥦🥕
          </p>
          <div className="flex justify-start items-center ml-6">
            <p className="tracking-tight my-3 text-2xl font-semibold">Manure</p>
            <p className="text-sm ml-2 -mb-2">x 100</p>
          </div>
          <div className="flex items-center ml-6 z-20">
            <p className="z-20">Wallet Transactions:</p>
            <p className="ml-4 mr-2 z-20">
              <b>44</b> Success
            </p>
            <p className="mx-2 z-20">
              <b>8</b> Processing
            </p>
            <p className="mx-2 z-20">
              <b>2</b> Failed
            </p>
          </div>
          <div className="bg-[#00000049] h-[14px] w-[100%] block mt-3 ml-6 rounded-[8px] z-20">
            <span className="h-[14px] w-[60%] block gradient rounded-[8px]"></span>
          </div>
          <div className="ml-6 flex items-center mt-4">
            <button className="bg-black border-2 border-black text-white rounded-md text-sm py-1 px-2 z-20">
              More Details
            </button>
            <button className="border-[1.4px] border-black text-black rounded-md text-sm py-1 px-2 ml-2 z-20">
              Cancel
            </button>
            <div className="ml-4 flex z-20">
              <input type="checkbox" id="" className="accent-black" />
              <p className="ml-2">Receive report on email</p>
            </div>
          </div>
        </div>
        <Image
          className="mx-10 z-20"
          src="/manure.svg"
          alt="find holders"
          width={220}
          height={220}
        />
        <Image
          className="absolute left-40 opacity-[15%] blur-md z-10"
          src="/manure.svg"
          alt="find holders"
          width={500}
          height={500}
        />
      </div>
      {/* Second Card */}
      <div className="bg-white mt-4 rounded-md flex justify-between items-center shadow-md pb-4 pt-2 mb-8 overflow-hidden relative">
        <div className="w-full">
          <div className="pt-3 flex">
            <p className="bg-[#28458f] text-white text-[10px] flex justify-center items-center font-semibold tracking-wider rounded-r-md pr-2 pl-6 py-1">
              <svg
                className="mr-2"
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.875 9C0.875 4.5125 4.5125 0.875 9 0.875C13.4875 0.875 17.125 4.5125 17.125 9C17.125 13.4875 13.4875 17.125 9 17.125C4.5125 17.125 0.875 13.4875 0.875 9ZM12.0083 7.48833C12.0583 7.42171 12.0945 7.34576 12.1147 7.26496C12.135 7.18415 12.1388 7.10012 12.1261 7.0178C12.1134 6.93547 12.0844 6.85652 12.0407 6.78558C11.9971 6.71464 11.9396 6.65315 11.8719 6.60471C11.8041 6.55627 11.7273 6.52187 11.6461 6.50352C11.5648 6.48518 11.4807 6.48326 11.3987 6.49789C11.3167 6.51251 11.2385 6.54338 11.1686 6.58868C11.0987 6.63398 11.0385 6.69279 10.9917 6.76167L8.295 10.5367L6.94167 9.18333C6.82319 9.07293 6.66648 9.01283 6.50456 9.01569C6.34265 9.01854 6.18816 9.08414 6.07365 9.19865C5.95914 9.31316 5.89354 9.46765 5.89069 9.62956C5.88783 9.79148 5.94793 9.94819 6.05833 10.0667L7.93333 11.9417C7.99749 12.0058 8.07483 12.0552 8.15999 12.0864C8.24515 12.1176 8.33608 12.1299 8.42647 12.1224C8.51686 12.115 8.60455 12.088 8.68344 12.0432C8.76233 11.9985 8.83054 11.9371 8.88333 11.8633L12.0083 7.48833Z"
                  fill="white"
                />
              </svg>
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0C3.41 0 0.5 2.91 0.5 6.5C0.5 10.09 3.41 13 7 13C10.59 13 13.5 10.09 13.5 6.5C13.5 2.91 10.59 0 7 0ZM7.5 2.5C7.5 2.36739 7.44732 2.24021 7.35355 2.14645C7.25979 2.05268 7.13261 2 7 2C6.86739 2 6.74022 2.05268 6.64645 2.14645C6.55268 2.24021 6.5 2.36739 6.5 2.5V6.5C6.5 6.776 6.724 7 7 7H10C10.1326 7 10.2598 6.94732 10.3536 6.85355C10.4473 6.75979 10.5 6.63261 10.5 6.5C10.5 6.36739 10.4473 6.24022 10.3536 6.14645C10.2598 6.05268 10.1326 6 10 6H7.5V2.5Z"
                  fill="black"
                  fill-opacity="0.7"
                />
              </svg>
              <p className="font-bold text-[14px] mx-2 z-20">Started</p>
              <p className="text-[14px] z-20">2022-09-13 08:57:15</p>
            </div>
          </div>
          <p className="tracking-tight mt-3 ml-6 z-20">
            🍎🍌🍍The Fruit Salad Game🍆🥦🥕
          </p>
          <div className="flex justify-start items-center ml-6">
            <p className="tracking-tight my-3 text-2xl font-semibold v">
              Water
            </p>
            <p className="text-sm ml-2 -mb-2 z-20">x 100</p>
          </div>
          <div className="flex items-center ml-6 z-20">
            <p>Wallet Transactions:</p>
            <p className="ml-4 mr-2 z-20">
              <b>100</b> Success
            </p>
            <p className="mx-2 z-20">
              <b>0</b> Processing
            </p>
            <p className="mx-2 z-20">
              <b>0</b> Failed
            </p>
          </div>
          <div className="bg-[#00000049] h-[14px] w-[100%] block mt-3 ml-6 rounded-[8px] z-20">
            <span className="h-[14px] w-[100%] block gradient rounded-[8px]"></span>
          </div>
          <div className="ml-6 flex items-center mt-4 z-20">
            <button className="bg-black border-2 border-black text-white rounded-md text-sm py-1 px-2 z-20">
              More Details
            </button>
          </div>
        </div>
        <Image
          className="mx-10 z-20"
          src="/water.svg"
          alt="find holders"
          width={220}
          height={220}
        />
        <Image
          className="absolute left-40 opacity-[15%] blur-md"
          src="/water.svg"
          alt="find holders"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Card;
