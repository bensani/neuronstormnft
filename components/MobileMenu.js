import React, {useState} from "react";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {GiHamburgerMenu} from "react-icons/gi";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="  w-full bg-white z-50 top-0 shadow-md">
      <div className="flex justify-between bg-blue-default z-50 h-20  py-5 shadow-lg border-b border-Offwhite-default">
        <div className="pl-5 flex self-center">
          <Image
            src="/images/Neuron Storm.png"
            alt=""
            width={200}
            height={20}
          />
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="px-1">
              <span className="cursor-pointer">
                <img
                  src="/assets/Component 15 – 4.png"
                  alt=""
                  className="w-10  pl-1  rounded-full"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="px-5 self-center cursor-pointer">
          <span onClick={toggleDrawer}>
            <GiHamburgerMenu className="w-8 h-8 text-secondary text-Offwhite-default" />
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{backgroundColor: "#0c174b"}}
      >
        <div className="pl-5 pt-10">
          <Image
            src="/images/Neuron Storm.png"
            alt=""
            width={200}
            height={20}
          />
        </div>
        <div onClick={toggleDrawer} className="flex flex-col pt-10 px-4">
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#Home">Home</AnchorLink>
          </span>

          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#Roadmap">Roadmap</AnchorLink>
          </span>
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#Concept">Concept</AnchorLink>
          </span>
          <div className=" flex justify-between text-Offwhite-default py-10 ">
            <a href="https://discord.gg/7f465dkQve" target="_blank">
              <img src="/images/discord.png" alt="" className="w-8 h-7" />
            </a>
            <a href="https://www.twitter.com/NeuronStormNFT">
              <img src="/images/twitter.png" alt="" className="w-8 h-7" />
            </a>
            <a href="https://www.instagram.com/neuronstorm/" target="_blank">
              <img src="/images/instagram.png" alt="" className="w-8 h-7" />
            </a>
            <a href="https://opensea.io/collection/neuron-storm-nft">
              <img src="/images/OpenSea.png" alt="" className="w-9 h-8" />
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
