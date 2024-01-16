import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Harleens1/AIsummarizer/tree/main", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Article summarizer using<br className='max-md:hidden' />
        <span className='orange_gradient '>Chat GPT</span>
      </h1>
      <h2 className='desc'>
        Paste the link to any article and it will be summarized by Open Ai's Chat GPT. A machine learning model that has been trained on a diverse range of internet text to understand and generate human-like text based on the input It receives.
      </h2>
    </header>
  );
};

export default Hero;
