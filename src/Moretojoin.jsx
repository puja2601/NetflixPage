import React from "react";
import tv from "./assets/monitor-tv-svgrepo-com.svg";

const Moretojoin = () => {
  return (
    <>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="relative rounded-[20px] h-[300px] bg-gradient-to-br from-[#1f2350] via-[#21142c] to-[#180b12] p-5">
          <h4 className="text-white font-bold text-2xl"> Enjoy on your TV</h4>
          <p className="text-gray-300 mt-5">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <img
            className="absolute bottom-8  right-5 h-[70px] w-[70px]"
            src="https://www.svgrepo.com/show/294280/video.svg"
          />
        </div>

        <div className="relative rounded-[20px] h-[300px] bg-gradient-to-br from-[#1f2350] via-[#21142c] to-[#180b12] p-5">
          <h4 className="text-white font-bold text-2xl">
            Download your shows to watch offline
          </h4>
          <p className="text-gray-300 mt-5">
            Save your favourites easily and always have something to watch.
          </p>
          <img
            className="absolute bottom-8  right-5 h-[70px] w-[70px]"
            src="https://www.svgrepo.com/show/247751/down-arrow-download.svg"
          />
        </div>

        <div className="relative rounded-[20px] h-[300px] bg-gradient-to-br from-[#1f2350] via-[#21142c] to-[#180b12] p-5">
          <h4 className="text-white font-bold text-2xl"> Watch everywhere</h4>
          <p className="text-gray-300 mt-5">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
          <img
            className="absolute bottom-8  right-5 h-[70px] w-[70px]"
            src="https://www.svgrepo.com/show/42410/telescope.svg"
          />
        </div>

        <div className="relative rounded-[20px] h-[300px] bg-gradient-to-br from-[#1f2350] via-[#21142c] to-[#180b12] p-5">
          <h4 className="text-white font-bold text-2xl">
            Create profiles for kids
          </h4>
          <p className="text-gray-300 mt-5">
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
          <img
            className="absolute bottom-8  right-5 h-[70px] w-[70px]"
            src="https://www.svgrepo.com/show/256044/user-profile.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Moretojoin;
