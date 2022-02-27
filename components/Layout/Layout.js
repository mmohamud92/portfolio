import React from "react";
import Logo from "../../images/logo.svg";
import Image from "next/image";
import { useState } from "react";
import SideBarIcon from "./SideBarIcon";
import {
      FaYoutube,
      FaLinkedinIn,
      FaInstagram,
      FaTwitter,
      FaGithub,
} from "react-icons/fa";

function LayOut({ Body }) {
      const [isMobile, setIsMobile] = useState(false);
      function showMenu(e) {
            e.preventDefault();
            setIsMobile(!isMobile);
      }

      return (
            <div>
                  <nav className="fixed z-10 w-screen bg-blueme">
                        <div className="px-10 pt-6 mx-auto border border-red-300 ">
                              <div className="flex items-center justify-between">
                                    <div>
                                          <div className="flex items-center">
                                                <a href="#">
                                                      <Image
                                                            src={Logo}
                                                            alt="logo"
                                                            height={50}
                                                            width={50}
                                                            className="transition duration-300 "
                                                      />
                                                </a>
                                          </div>
                                    </div>
                                    <div className="items-center hidden space-x-24 text-white md:flex">
                                          <a className="hover:text-softorange">
                                                About
                                          </a>
                                          <a className="hover:text-softorange">
                                                Projects
                                          </a>
                                          <a className="hover:text-softorange">
                                                Contact
                                          </a>
                                    </div>
                                    <div>
                                          <button className="items-center hidden px-4 py-1 space-x-16 text-white transition rounded shadow md:flex bg-softorange hover:bg-darkorange hover:text-gray-150 duration-400">
                                                CV
                                          </button>
                                          <div className="flex items-center md:hidden">
                                                <button onClick={showMenu}>
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6"
                                                            fill="#FD230C"
                                                            viewBox="0 0 24 24"
                                                            stroke="#FD230C"
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M4 6h16M4 12h16m-7 6h7"
                                                            />
                                                      </svg>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div
                              className={
                                    isMobile === false
                                          ? "hidden md:hidden"
                                          : "md:hidden pb-2"
                              }
                        >
                              <a className="block px-4 py-2 text-sm text-white duration-500 transform cursor-pointer hover:bg-darkerblueme hover:text-softorange">
                                    About
                              </a>
                              <a className="block px-4 py-2 text-sm text-white duration-500 transform cursor-pointer hover:bg-darkerblueme hover:text-softorange">
                                    Projects
                              </a>
                              <a className="block px-4 py-2 text-sm text-white duration-500 transform cursor-pointer hover:bg-darkerblueme hover:text-softorange">
                                    Contact
                              </a>
                              <a className="items-center px-4 py-1 ml-4 space-x-16 text-sm text-white transition rounded shadow bg-softorange hover:bg-darkorange hover:text-gray-150 duration-400">
                                    CV
                              </a>
                        </div>
                  </nav>
                  <div className=" bg-darkerblueme">
                        <div className="flex flex-wrap h-screen overflow-hidden">
                              <div className="fixed left-0 flex flex-col items-center justify-end w-1/12 h-screen overflow-hidden md:visible">
                                    <SideBarIcon
                                          href="https://github.com/codewithmohamed"
                                          icon={<FaGithub size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://twitter.com/codewithmohamed"
                                          icon={<FaTwitter size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://www.instagram.com/codewithmohamed/"
                                          icon={<FaInstagram size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://www.linkedin.com/in/mohamed-mohamud-"
                                          icon={<FaLinkedinIn size="20" />}
                                    />
                                    <a
                                          href="https://www.youtube.com/c/codewithmohamed"
                                          className="firsticon"
                                          target="_blank"
                                    >
                                          {<FaYoutube size="20" />}
                                    </a>
                              </div>
                              <Body />
                              <div className="fixed right-0 w-1/12 h-screen overflow-hidden"></div>
                        </div>
                  </div>
            </div>
      );
}

export default LayOut;
