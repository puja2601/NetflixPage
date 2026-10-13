import React from "react";

const Footerblock = () => {
  return (
    <div className="w-[80%] mx-auto text-neutral-300">
      <p className="mt-10 text-xl">Questions? Call 000-800-919-1743</p>
      <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-4 underline text-sm">
        <a href="#">FAQ</a>
        <a href="#">Help Centre</a>
        <a href="#">Account</a>
        <a href="#">Media Centre</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
        <a href="#">Only on Netflix</a>
      </div>
      <div className="mt-15">
        <div className="w-[130px] border-2 border-neutral-600 text-white text-center p-1 rounded-[5px]">
          <span className="">
            <i class="fa-solid fa-language p-[1px]"></i>
          </span>
          <select name=" " id=" " className="text-white ">
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
        <p className="text-sm mt-15">Netflix India</p>
        <p className="text-sm mt-10">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Footerblock;
