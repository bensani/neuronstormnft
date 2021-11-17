import React from "react";
import {Fade} from "react-reveal";
const Card = ({keyIndex, title, subheading, description}) => {
  return (
    <div key={keyIndex} className="md:w-2/4 w-full  ">
      <Fade bottom>
        <div className="px-4 lg:mx-20 md:mx-6  lg:mb-32 md:mb-20 mb-10 ">
          <div className="h-52 border-2 border-green-default rounded-2xl flex items-center w-full flex-col  justify-center">
            <h1 className="text-green-default mb-2  text-2xl md:text-4xl font-extrabold">
              {title}
            </h1>
            <p className="lg:text-xl text-lg px-3 text-center text-white-light font-semibold">
              {subheading}
            </p>
          </div>
          <p className="px-3 lg:mt-10 md:mt-6 mt-4 text-grey-default text-center">
            {description}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Card;
