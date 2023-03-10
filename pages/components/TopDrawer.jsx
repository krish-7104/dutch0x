import Image from "next/image";
import React from "react";

const TopDrawer = () => {
  return (
    <div>
      <ul className="flex justify-evenly items-center my-4 mx-2 2xl:w-[85%] 2xl:mx-auto">
        <li className="h-[130px] 2xl:h-[180px] w-full mx-2">
          <div className="bg-[#c0eec0] h-[130px] 2xl:h-[180px] w-full rounded-lg flex justify-center items-center">
            <Image src="/nft.svg" alt="nft management" width={60} height={60} />
          </div>
          <p className="font-bold text-center mt-2 text-base">NFT Management</p>
        </li>
        <li className="h-[130px] 2xl:h-[180px] w-full mx-2">
          <div className="bg-[#fdf7d5] h-[130px] 2xl:h-[180px] w-full rounded-lg flex justify-center items-center">
            <Image
              src="/holders.svg"
              alt="find holders"
              width={60}
              height={60}
            />
          </div>
          <p className="font-bold text-center mt-2 text-base">Find Holders</p>
        </li>
        <li className="h-[130px] 2xl:h-[180px] w-full mx-2">
          <div className="bg-[#d5f3f8] h-[130px] 2xl:h-[180px] w-full rounded-lg flex justify-center items-center">
            <Image src="/airdrop.svg" alt="airdrop" width={60} height={60} />
          </div>
          <p className="font-bold text-center mt-2 text-base">Airdrop</p>
        </li>
        <li className="h-[130px] 2xl:h-[180px] w-full mx-2">
          <div className="bg-[#eddbf4] h-[130px] 2xl:h-[180px] w-full rounded-lg flex justify-center items-center">
            <Image src="/tradein.svg" alt="trade in" width={60} height={60} />
          </div>
          <p className="font-bold text-center mt-2 text-base">Trade-in</p>
        </li>
        <li className="h-[130px] 2xl:h-[180px] w-full mx-2">
          <div className="bg-[#fcdcef] h-[130px] 2xl:h-[180px] w-full rounded-lg flex justify-center items-center">
            <Image src="/sales.svg" alt="sales" width={60} height={60} />
          </div>
          <p className="font-bold text-center mt-2 text-base">Sales</p>
        </li>
      </ul>
    </div>
  );
};

export default TopDrawer;
