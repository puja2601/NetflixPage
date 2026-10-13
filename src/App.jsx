import React from "react";
import Top10 from "./Top10";
import Moretojoin from "./Moretojoin";
import FAQ from "./FAQ";
import Footerblock from "./Footerblock";

const movies = [
  {
    id: 1,
    img: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/...",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=400",
  },
];

const App = () => {
  return (
    <>
      <section
        class="w-[100%] h-[150vh] bg-[url('https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg')]
                bg-cover bg-center"
      >
        <div className="w-full h-[50px] text-white bg-gradient-to-r from-purple-900 via-pink-900 to-red-700 text-center p-3 fixed">
          <span className="text-white">
            <i class="fa-solid fa-gift"></i>
          </span>
          <button className="ml-3"> New to Netflix? Try 30 days for ₹0.</button>
        </div>
        <br />
        {/* =============Header Section ========== */}

        <div class="w-[100%] h-auto min-h-screen bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[1150px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] p-10 items-center">
              <figure>
                <img
                  src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg"
                  alt="Netflix-logo"
                  className="w-[150px] ml-1"
                />
              </figure>
              <div className="flex justify-end gap-4">
                <div className="w-[110px] border-2 border-neutral-600 text-center p-1 rounded-[5px]">
                  <span className="text-white">
                    <i class="fa-solid fa-language p-[1px]"></i>
                  </span>
                  <select name=" " id=" " className="text-white">
                    <option value="" className="bg-white text-black">
                      English
                    </option>
                    <option value="" className="bg-white text-black">
                      hindi
                    </option>
                    <option value="" className="bg-white text-black">
                      Marathi
                    </option>
                  </select>
                </div>
                <button className="bg-orange-700 w-[80px] p-1 text-white rounded-[5px] hover:bg-orange-800">
                  sign in
                </button>
              </div>
            </div>
          </header>

          {/* =============Middle sign in Section ========== */}

          <div className="w-full text-white text-center mx-auto px-5 py-12 sm:p-20">
            <div className="mt-5">
              <h1 className="text-6xl font-bold">
                Unlimited movies,
                <br /> shows, and more
              </h1>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-normal">
                Starts at ₹149. Cancel at any time.
              </h3>
            </div>
            <div className="mt-8 text-xl">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="mt-5 sm:flex justify-center gap-5 grid gird-cols-1 w-[100%] mx-auto">
              <input
                type="text"
                placeholder="Email Address"
                className="text-[20px] border-gray-500 border-2 rounded-[5px] px-5 h-[50px] sm:w-[40%]"
              />
              <button className="font-normal bg-orange-700 p-2 text-bold text-[20px] rounded-[5px] h-[50px] hover:bg-orange-800">
                Get Started &gt;
              </button>
            </div>
            <div>
              <p className="mt-4 text-xl"> New members only. Terms below.</p>
            </div>
          </div>

          {/* =============trending rounded-curv Section ========== */}

          <div className="w-full h-20 border-t-6 rounded-t-[90%] mt-15 border-red-600 bg-gradient-to-b from-blue-900 via-blue to-black"></div>

          {/* ==========Curv Section stared div=========*/}

          <div className="w-full min-h-screen bg-black text-white sm:mx-auto">
            {/*========Trending now line ===========*/}
            <div className="w-full h-20 text-white px-5 sm:px-20 text-3xl font-bold">
              Trending Now
            </div>

            {/*============Top 10 list================*/}
            <div>
              <Top10 />
            </div>

            {/*==========More reasons to join==========*/}
            <div className="w-full h-20 text-white px-5 mt-[10px] sm:px-20 text-3xl font-bold">
              More reasons to join
            </div>

            {/*========More reasons to join blocks========*/}
            <div>
              <Moretojoin />
            </div>

            {/*==========fAQ=========*/}
            <div className="w-full h-20 text-white px-5 mt-[10px] sm:px-20 text-3xl font-bold">
              Frequently Asked Questions
            </div>

            {/*==========fAQ blocks=========*/}
            <div>
              <FAQ />
              <div className="text-white w-[80%] mx-auto text-center">
                <p className="text-2xl mt-10 mb-10">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="text-[20px] border-gray-500 border-2 rounded-[5px] px-5 h-[50px] sm:w-[40%] w-[70%]"
                />
                <button className="font-normal bg-orange-700 p-2 text-bold text-[20px] rounded-[5px] h-[50px] ml-5 mt-5 sm:mt-0 hover:bg-orange-800">
                  Get Started &gt;
                </button>
              </div>
            </div>
            <Footerblock />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
