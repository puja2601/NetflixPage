import React from "react";
const top10India = [
  {
    id: 1,
    title: "Apex",
    image:
      "https://i.pinimg.com/736x/34/32/32/343232c0399b1fcf7e4db05f1c5185b5.jpg",
  },
  {
    id: 2,
    title: "Raakaasa",
    image:
      "https://i.pinimg.com/736x/2c/76/46/2c764616e216b3b9228a348252d29c99.jpg",
  },
  {
    id: 3,
    title: "Do Deewane Seher Mein",
    image:
      "https://i.pinimg.com/736x/d2/84/21/d28421688f49eb021c34347613c55611.jpg",
  },
  {
    id: 4,
    title: "Youth",
    image:
      "https://i.pinimg.com/736x/bb/c3/fb/bbc3fb0aa8a3ab9a5601693546eb6028.jpg",
  },
  {
    id: 5,
    title: "Biker",
    image:
      "https://i.pinimg.com/736x/ac/62/31/ac62317f1d877e1093342069be69750d.jpg",
  },
  {
    id: 6,
    title: "Toaster",
    image:
      "https://i.pinimg.com/1200x/bb/9a/4f/bb9a4f7b3ad4b6ecb156a0c9d2fccee7.jpg",
  },
  {
    id: 7,
    title: "Ustaad Bhagat Singh",
    image:
      "https://i.pinimg.com/736x/f8/5f/b0/f85fb036e9da6e35592810677ff23047.jpg",
  },
  {
    id: 8,
    title: "Dhurandhar",
    image:
      "https://i.pinimg.com/1200x/67/5b/07/675b074533b05b4121e6b0812eee6966.jpg",
  },
  {
    id: 9,
    title: "Swapped",
    image:
      "https://i.pinimg.com/1200x/93/df/07/93df070e454dbc5d03bb204c91760d03.jpg",
  },
  {
    id: 10,
    title: "Tu Yaa Main",
    image:
      "https://i.pinimg.com/736x/ab/d0/7f/abd07f65acdb57e7f6f35a2a86aa9990.jpg",
  },
];

const Top10 = () => {
  return (
    <>
      <div className="w-[80%] mx-auto overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-10 pl-5 ">
          {top10India.map((list) => (
            <div className="relative flex-none w-[200px] h-[250px] bg-white key={list.id} rounded-[10px]">
              <img
                className="object-cover w-full h-full rounded-[10px] hover:scale-125 duration-1000  cursor-pointer"
                src={list.image}
              />
              <h1 className="absolute bottom-0 -left-9 [-webkit-text-stroke:3px_white] font-bold text-9xl text-black p-2">
                {list.id}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Top10;
