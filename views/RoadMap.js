import React from "react";
import {Fade} from "react-reveal";
function RoadMap() {
  return (
    <div className="bg-blue-default px-4 lg:py-40 md:py-12 py-8">
      <div className="flex w-full justify-center">
        <div className="max-w-7xl m-auto text-center">
          <div className="md:px-12 px-4">
            <Fade bottom>
              <h1 className="heading-title">Road map</h1>
            </Fade>
            <Fade bottom>
              <p className="text-grey-default lg:mb-16 md:mb-12 mb-8">
                WE ARE THERE FOR YOU NO MATTER WHAT
              </p>
            </Fade>

            <div className="max-w-3xl m-auto text-center">
              <Fade bottom>
                <p className="text-Offwhite-default mb-3 leading-5">
                  Neuron Storm is a concept centered NFT collectibles of 7,777
                  unique generative pieces on ETH block chain Each Neuron Storm
                  will have up to 18 traits and a meaning behind the combination
                  of Neuron’s lifelines We will be behind you every step of the
                  way and enjoy your company in the journey of Neuron Storm.
                </p>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <p className="text-Offwhite-default mb-5">
                  Here’s our short-term and mid-term plans, LET’S GO…
                </p>
              </Fade>
            </div>
            <div className="w-full flex justify-center mb-12">
              <Fade bottom>
                <img src="./images/Polygon 1.png" alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center relative">
        <div className=" hidden md:block absolute -top-5 left-28">
          <Fade left>
            <img src="./images/Group 95.png" alt="" className=" w-full" />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <img src="./images/Mask Group.png" alt="" />
          </Fade>
        </div>
        <div className="hidden md:block absolute -bottom-5 right-28">
          <Fade right>
            <img src="./images/Group 95.png" alt="" className=" w-full" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
