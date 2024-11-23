import React from "react";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-8">
        <div>
          <p className="text-gray-300 text-sm">Copyright @2024</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a>
                <img
                  src={Facebook}
                  alt="facebook"
                  className="bg-black rounded-full dark:bg-white w-8"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src={Instagram}
                  alt="instagram"
                  className="bg-black rounded-full dark:bg-white w-8"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src={Github}
                  alt="github"
                  className="bg-black rounded-full dark:bg-white w-8"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src={Linkedin}
                  alt="linkedin"
                  className="bg-black rounded-full dark:bg-white w-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
