import React from "react";
import Card from "../components/Card";
import {Fade} from "react-reveal";
function BeforeLunch() {
  return (
    <div className="bg-blue-default px-4 lg:py-24 md:py-12 py-8">
      <div className="flex w-full justify-center">
        <div className="max-w-4xl m-auto text-center">
          <div className="md:px-12 px-4">
            <Fade bottom>
              <h1 className="lg:text-6xl md:text-5xl text-4xl text-white-light font-bold  mb-4">
                BEFORE LAUNCH
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-white-light lg:mb-16 md:mb-12 mb-8">
                FIVE GIVEAWAYS OF NUMEROUS “NEURON STORMS” TO DISCORD MEMBERS
                AND TWITTER FOLLOWERS BEFORE PRESALE STARTS.
              </p>
            </Fade>

            <div className="max-w-3xl m-auto text-center lg:mb-28 md:mb-14 mb-10">
              <div className="flex items-center">
                <Fade left>
                  <img src="./images/Vector 3.png" alt="" />
                </Fade>
                <Fade bottom>
                  <p className="text-Offwhite-default md:text-lg text-base leading-5">
                    Five big giveaways will be held in our official communities
                    such as Discord and Twitter before website presale begins,
                    as a gift to our dear early members of Neuron Gang. Our
                    community will be informed about the details of each
                    giveaway in Twitter, Instagram, and Discord.
                  </p>
                </Fade>
                <Fade right>
                  <img src="./images/Vector 4.png" alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center relative">
        <div className=" hidden md:block absolute  -top-5 right-28">
          <Fade right>
            <img src="./images/Group 95.png" alt="" className=" w-full" />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <img src="./images/Mask Group2.png" alt="" className="w-full" />
          </Fade>
        </div>
        <div className="hidden md:block absolute -bottom-5  left-28">
          <Fade left>
            <img src="./images/Group 95.png" alt="" className=" w-full" />
          </Fade>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-wrap justify-center md:pt-20 pt-10">
          {percentages.map((percentage, index) => {
            return (
              <Card
                keyIndex={index}
                title={percentage.title}
                subheading={percentage.subheading}
                description={percentage.description}
              />
            );
          })}
        </div>
        <div className="max-w-5xl px-10 m-auto">
          <Fade bottom>
            <hr className="border_bottom " />
          </Fade>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-wrap justify-center md:pt-20 pt-10">
          {Secondpercentages.map((percentage, index) => {
            return (
              <Card
                keyIndex={index}
                title={percentage.title}
                subheading={percentage.subheading}
                description={percentage.description}
              />
            );
          })}
        </div>
        <div className="max-w-5xl px-10 m-auto">
          <Fade bottom>
            <hr className="border_bottom " />
          </Fade>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-wrap justify-center md:pt-20 pt-10">
          {thirdpercentages.map((percentage, index) => {
            return (
              <Card
                keyIndex={index}
                title={percentage.title}
                subheading={percentage.subheading}
                description={percentage.description}
              />
            );
          })}
        </div>
        <div className="max-w-5xl px-10 m-auto">
          <Fade bottom>
            <hr className="border_bottom " />
          </Fade>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-wrap justify-center md:pt-20 pt-10">
          {fourthpercentages.map((percentage, index) => {
            return (
              <Card
                keyIndex={index}
                title={percentage.title}
                subheading={percentage.subheading}
                description={percentage.description}
              />
            );
          })}
        </div>
        <div className="max-w-5xl px-10 m-auto">
          <Fade bottom>
            <hr className="border_bottom " />
          </Fade>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-wrap justify-center md:pt-20 pt-10">
          {fifthpercentages.map((percentage, index) => {
            return (
              <Card
                keyIndex={index}
                title={percentage.title}
                subheading={percentage.subheading}
                description={percentage.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BeforeLunch;

const percentages = [
  {
    id: 1,
    title: "20% SOLD",
    subheading: "-1 ETH SPLIT TO 10 DISCORD MEMBERS.",
    description:
      "After twenty percent of the collectibles sold, we will have an ETH giveaway for our Discord members. The details of the giveaway will be announced in the Discord server. The giveaway is going to be 1 ETH to 10 members (each winner 0.1 ETH)."
  },
  {
    id: 2,
    title: "20% SOLD",
    subheading: "1 ETH SPLIT TO 10 “NEURON STORM” HOLDERS.",
    description:
      "After twenty percent of the collectibles sold, we will have an ETH giveaway for our dear owners. The details of the giveaway will be announced in our Twitter and the Discord server. The giveaway is going to be 1 ETH to 10 Owners (each winner 0.1 ETH)."
  },
  {
    id: 3,
    title: "20% SOLD",
    subheading: "ALL BEFORE-LAUNCH-GIVEAWAYS WILL BE SENT TO WINNERS’ ADRESSES",
    description:
      "As you see in the BEFORE LAUNCH section, all the winners of the Neuron Storm giveaway winners will be listed and a random Neuron Storm item will be sent to their addresses immediately. "
  }
];

const Secondpercentages = [
  {
    id: 1,
    title: "40% SOLD",
    subheading: "1 ETH SPLIT TO 9 DISCORD MEMBERS AND 1 TWITTER FOLLOWER ",
    description:
      "After forty percent of the collectibles sold, we will have an ETH giveaway for our Twitter followers and Discord members. The details of the giveaway will be announced in our Twitter account and the Discord server. The giveaway is going to be 1 ETH to 9 members and 1 follower (each winner 0.1 ETH)."
  },
  {
    id: 2,
    title: "40% SOLD",
    subheading: "4 ETH SPLIT TO 20 “NEURON STORM” HOLDERS.",
    description:
      "After forty percent of the collectibles sold, we will have an ETH giveaway for our dear owners. The details of the giveaway will be announced in ourTwitter and the Discord server. The giveaway is going to be 4 ETH to 20 Owners (each winner 0.2 ETH)."
  }
];
const thirdpercentages = [
  {
    id: 1,
    title: "60% SOLD",
    subheading: "$10,000 TO CHARITY AND HUMANITARIAN CAUSES",
    description:
      "After sixty percent of collectibles sold, 10,000dollars from sales will be spent to help those less fortunate and orphan children. The process will be filmed and put up on our official social mediaaccounts. This is not us, this is directly from our dear holders and everyone beside us on this journey."
  },
  {
    id: 2,
    title: "60% SOLD",
    subheading:
      "1 ETH SPLIT TO 10 MEMBERS OF THE COMMUNITY. (TWITTER (3), INSTAGRAM (2), DISCORD (5))",
    description:
      "After sixty percent of collectibles sold, we will have an ETH giveaway for members of our community. The details of the giveaway will be announced in our official social media accounts.The giveaway is going to be 1 ETH to 10 members and followers (each winner 0.1 ETH)."
  }
];
const fourthpercentages = [
  {
    id: 1,
    title: "80% SOLD",
    subheading:
      "START OF NEW 10K COLLECTIBLE PROJECT “BRAIN STORM” WITH CONSULT OF OUR COMMUNITY",
    description:
      "The minute we reach eighty percent sold, the creation of our new 10k collectible project “BRAINSTORM” will start. The general concept will beaccording to our community taste"
  },
  {
    id: 2,
    title: "80% SOLD",
    subheading: "10 ETH SPLIT TO 40 “NEURON STORM HOLDERS",
    description:
      "After eighty percent of the collectibles sold, we will have an ETH giveaway for our dear owners. The details of the giveaway will be announced in our Twitter and the Discord server. The giveaway is going to be 10 ETH to 40 Owners (each winner 0.25 ETH)."
  }
];
const fifthpercentages = [
  {
    id: 1,
    title: "100% SOLD",
    subtitle: "THIS IS OUR SPECIAL GIFT TO OWNERS",
    subheading:
      "CUSTOMIZED ART PIECE BASED ON “NEURON LINES” GIFTED TO HOLDERS BY THEIR CHOICE",
    description:
      "Every Neuron Storm has up to 7 lifeline neurons, each representing a different path ahead of a young mind. The combination of these lifelines are unique and each lifeline indicates an index character. Now each holder can choose one of those index characters represented in his/her collectible and a digital art piece customized according to that choice will be gifted to dear owners once we hit complete sell out."
  },
  {
    id: 2,
    title: "100% SOLD",
    subtitle: "THIS IS OUR SPECIAL GIFT TO OWNERS",
    subheading:
      "“BRAIN STORM” WILL BE LAUNCHED AND GIFTED TO “NEURON STORM” HOLDERS",
    description:
      "After twenty percent of the collectibles sold, we will have an ETH giveaway for our dear owners. The details of the giveaway will be announced in our Twitter and the Discord server. The giveaway is going to be 1 ETH to 10 Owners (each winner 0.1 ETH)."
  }
];
