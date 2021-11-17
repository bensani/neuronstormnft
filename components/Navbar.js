import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-default py-10">
      <div className="max-w-7xl mx-auto  py-3 border-b-2 border-Offwhite-default">
        <div className="flex justify-between">
          <div className="flex self-center">
            <img src="/images/Neuron Storm.png" alt="" />
          </div>
          <div className="flex self-center">
            <ul className="flex">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="text-Offwhite-default text-base font-bold mx-9 cursor-pointer">
                      <AnchorLink href={`#${item.url}`}>
                        {item.name}
                      </AnchorLink>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex self-center">
            <ul className="flex">
              {socialLinks.map((item, index) => {
                return (
                  <li key={index} className="mx-2">
                    <a>
                      <img src={item.socialIcon} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const links = [
  {
    id: 1,
    name: "Home",
    url: "Home"
  },
  {
    id: 2,
    name: "Roadmap",
    url: "Roadmap"
  },
  {
    id: 3,
    name: "Concept",
    url: "Concept"
  }
];

const socialLinks = [
  {
    id: 1,
    socialIcon: "/images/discord.png",
    url: "/"
  },
  {
    id: 2,
    socialIcon: "/images/twitter.png",
    url: "/"
  },
  {
    id: 3,
    socialIcon: "/images/instagram.png",
    url: "/"
  },
  {
    id: 4,
    socialIcon: "/images/OpenSea.png",
    url: "/"
  }
];
