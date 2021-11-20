import React from "react";
import {useTimer} from "react-timer-hook";

function Timer({expiryTimestamp}) {
  const {seconds, minutes, hours, days} = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  return (
    <div className='mb-7 '>
      <div className="flex overflow-x-auto justify-between rounded-lg border-4 border-green-default px-2 md:px-5 py-6">
        <div className="mx-2 flex">
          <span className="  stroke flex self-center font-bold text-lg md:text-4xl leading-3">
            {days}
          </span>

          <span className=" stroke pl-1.5 font-bold flex self-center  text-lg md:text-2xl ">
            days
          </span>
        </div>
        <div>
          <span className=" stroke flex self-center text-lg md:text-4xl">:</span>
        </div>
        <div className="mx-2 flex">
          <span className="  stroke flex self-center font-bold text-lg md:text-4xl leading-3">
            {hours}
          </span>

          <span className=" stroke pl-1.5 font-bold flex self-center  text-lg md:text-2xl ">
            hours
          </span>
        </div>

        <div>
          <span className=" block stroke text-lg md:text-4xl">:</span>
        </div>
        <div className="mx-2 flex">
          <span className="  stroke flex self-center font-bold text-lg md:text-4xl leading-3">
            {minutes}
          </span>

          <span className=" stroke pl-1.5 font-bold flex self-center  text-lg md:text-2xl ">
            minutes
          </span>
        </div>
        <div>
          <span className=" block stroke text-lg md:text-4xl">:</span>
        </div>
        <div className="mx-2 flex ">
          <span className=" w-5 md:w-12  stroke flex self-center font-bold text-lg md:text-4xl leading-3">
            {seconds}
          </span>

          <span className=" stroke pl-1.5 font-bold flex self-center  text-lg md:text-2xl ">
            seconds
          </span>
        </div>
       
      </div>
    </div>
  );
}

export default Timer;
