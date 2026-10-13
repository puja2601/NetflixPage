import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "New members can try 30 days of Netflix for ₹0. After the free trial ends, your plan will automatically renew at the regular price depending on the plan you select. Plans range from ₹149 to ₹649.Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming device. No extra costs, cancel at anytime.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What I can watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <>
      <div className="text-white w-[80%] mx-auto space-y-3 ">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full h-[80px] bg-neutral-700 px-5 flex items-center justify-between hover:bg-neutral-600 duration-300  cursor-pointer border-b-[2px] border-black faq"
            >
              <span className="text-2xl">{item.question}</span>
              <span className="text-5xl">
                {" "}
                {openIndex === index ? "×" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="w-full bg-neutral-700 px-5  hover:bg-neutral-600 text-xl">
                <p className="p-5">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
