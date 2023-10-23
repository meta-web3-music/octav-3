import React from "react";

type CardProps = {
  title: string;
  subTitle: string;
  name: string;
};

const Card: React.FC<CardProps> = ({ title, subTitle, name }) => {
  return (
    <div className="relative flex flex-col py-2 bg-trueGray-300 mr-3">
      <div className="absolute -right-2 top-0 rounded-full text-[#000000] text-[13px] bg-[#F3EA01] w-[42px] h-[20px] flex items-center justify-center">
        <p className="-mt-[.18rem]">new</p>
      </div>
      <div className="w-[140px] h-[140px] bg-gray-300">
        <img src="/images/card.png" className="h-full w-full" />
      </div>
      <p className="text-black font-Figtree text-sm font-semibold mt-[2px] -mb-1">
        {title}
      </p>
      <p className="text-black text-opacity-60 font-Figtree text-xs">
        {subTitle}
        <span className="text-black text-opacity-60 text-xs font-bold mx-1">
          .
        </span>
        <span className="text-black text-opacity-60 font-Figtree text-xs">
          {name}
        </span>
      </p>
    </div>
  );
};

const Music: React.FC = () => {
  const artists: number[] = [0, 0, 2, 3, 0];

  return (
    <div className="py-4 pl-4">
      {/* Sections */}
      {["Liked", "TOP", "Albums", "Singles", "EPs"].map((section, index) => (
        <div className="mb-4" key={index}>
          <div className="flex justify-between items-center -mb-2">
            <div className="flex-1 font-semibold text-black">{section}</div>
            <span className="text-black text-xs text-opacity-50 font-semibold mr-2">
              See all
            </span>
          </div>

          {/* Card */}
          <div className="flex overflow-x-scroll pt-1">
            {artists.map((_e, i) => (
              <Card key={i} title="Album" subTitle="Album" name="Drake" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
