import { FaLocationArrow, FaPhone } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-6 md:pt-20 md:pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none select-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center px-4 sm:px-8">
        <h1 className="heading text-center lg:max-w-[45vw] md:max-w-[70vw] max-w-full">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-base md:text-lg">
          Reach out to me today
        </p>
        <a href="mailto:hibaraheem10@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <br></br>
        <p className="text-white-200 mt-4 text-center text-base md:text-lg flex items-center gap-2">
          <FaPhone className="inline-block text-purple" />
          <a
            href="tel:+94741686988"
            className="hover:text-purple"
            style={{ textDecoration: 'none' }}
          >
            +94 741686988
          </a>
        </p>
      </div>
      <div className="flex mt-10 md:mt-16 md:flex-row flex-col justify-between items-center px-4 sm:px-8 w-full">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left mb-4 md:mb-0">
          Copyright © 2025 Hiba Raheem
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
