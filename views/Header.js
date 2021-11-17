import React from "react";

import Carusel from "../components/Carusel";
import Timer from "../components/Timer";
function Header() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 360000);
  return (
    <div className="bg-blue-default px-8">
      <div className="max-w-7xl m-auto  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="md:col-span-2 md:max-w-3xl">
            <h1 className="text-white-light text-3xl md:text-6xl pb-2 font-semibold md:font-extrabold pt-4">
              Welcome to the Realm of Neuron Storm
            </h1>
            <p className=" font-normal md:font-semibold text-base text-grey-default mb-7 md:max-w-xl">
              Neuron Storm is all about ideas, decisions, and different life
              paths ahead of a young confused mind. 7,777 unique collectibles
              living forever on ETH block chain.
            </p>
            <div>
              <Timer expiryTimestamp={time} />
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between">
              <div className="flex justify-center">
                <div className="mb-8 md:mb-0">
                  <p className=" font-normal md:font-extrabold text-xs text-white-light mb-3">
                    Note: MetaMask Wallet is needed to MINT
                  </p>
                  <a className="skewBtn flex justify-center px-16 py-4 cursor-pointer mb-3">
                    MINT
                  </a>
                  <p className=" font-normal md:font-semibold text-sm text-white-light mb-3">
                    You can MINT max 20 NFT per transaction.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-8 md:mb-0">
                  <p className=" font-normal md:font-extrabold text-xs text-white-light mb-3">
                    MINTS number
                  </p>
                  <div className="flex justify-center">
                    <a className="customShadow  cursor-pointer text-xl text-blue-default font-extrabold rounded-full px-6 py-3.5">
                      1
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-8 md:mb-0">
                  <p className=" font-normal text-center md:text-left md:font-extrabold text-xs text-white-light mb-6">
                    Total Price
                  </p>
                  <a className="customShadow cursor-pointer text-xl text-blue-default font-extrabold rounded-md px-3 py-3.5">
                    Price <span className="text-xs">(ETH)</span> :{" "}
                    <span className="text-lg text-white-light bg-green-lightgreen px-2 py-1 font-normal">
                      0.00
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Carusel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
