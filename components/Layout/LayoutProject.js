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

import { AiFillInstagram } from "react-icons/ai";

import { SiHashnode } from "react-icons/si";

function LayOutProject({ Body }) {
      const [isMobile, setIsMobile] = useState(false);
      function showMenu(e) {
            e.preventDefault();
            setIsMobile(!isMobile);
      }

      return (
            <div>
                  <nav className="fixed z-10 w-screen bg-portwhite">
                        <div className="px-10 pt-6 mx-auto ">
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
                                    <div className="items-center hidden space-x-24 text-portblack md:flex">
                                          <a className="cursor-pointer hover:text-portblue">
                                                About
                                          </a>
                                          <a className="cursor-pointer hover:text-portblue">
                                                Projects
                                          </a>
                                          <a className="cursor-pointer hover:text-portblue">
                                                Contact
                                          </a>
                                    </div>
                                    <div>
                                          <a
                                                href="Downloadables\Mohamed Mohamud CV.pdf"
                                                className="items-center hidden px-4 py-1 space-x-16 transition rounded shadow text-portwhite md:flex bg-portblue hover:bg-portdarkerblue hover:text-gray-150 duration-400"
                                          >
                                                CV
                                          </a>
                                          <div className="flex items-center md:hidden">
                                                <button onClick={showMenu}>
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6"
                                                            fill="#007ea7"
                                                            viewBox="0 0 24 24"
                                                            stroke="#007ea7"
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
                              <a className="block px-4 py-2 text-sm font-bold duration-500 transform cursor-pointer text-portblack hover:bg-darkerblueme hover:text-portblue ">
                                    About
                              </a>
                              <a className="block px-4 py-2 text-sm font-bold duration-500 transform cursor-pointer text-portblack hover:bg-darkerblueme hover:text-portblue">
                                    Projects
                              </a>
                              <a className="block px-4 py-2 text-sm font-bold duration-500 transform cursor-pointer text-portblack hover:bg-darkerblueme hover:text-portblue">
                                    Contact
                              </a>
                              <a
                                    href="Downloadables\Mohamed Mohamud CV.pdf"
                                    className="items-center px-4 py-1 ml-4 space-x-16 text-sm transition rounded shadow text-portblack bg-portblue hover:bg-portdarkerblue hover:text-gray-150 duration-400"
                                    download
                              >
                                    CV
                              </a>
                        </div>
                  </nav>

                  <div className=" bg-portwhite">
                        <div className="h-auto overflow-hidden">
                              <div className="fixed left-0 flex flex-col justify-end w-1/12 h-auto overflow-hidden"></div>
                              <div className="fixed right-0 flex flex-col items-center justify-end w-1/12 h-auto overflow-hidden">
                                    <SideBarIcon
                                          href="https://github.com/codewithmohamed"
                                          icon={<FaGithub size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://mohamedmohamud.hashnode.dev/"
                                          icon={<SiHashnode size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://twitter.com/codewithmohamed"
                                          icon={<FaTwitter size="20" />}
                                    />
                                    <SideBarIcon
                                          href="https://www.instagram.com/codewithmohamed/"
                                          icon={<AiFillInstagram size="21" />}
                                    />
                                    <SideBarIcon
                                          href="https://www.linkedin.com/in/mohamed-mohamud-"
                                          icon={<FaLinkedinIn size="20" />}
                                    />
                                    <a
                                          href="https://www.youtube.com/c/codewithmohamed"
                                          className="hidden firsticon md:block"
                                          target="_blank"
                                          rel="noreferrer"
                                    >
                                          {
                                                <FaYoutube
                                                      size="20"
                                                      className=" hover:"
                                                />
                                          }
                                    </a>
                              </div>
                              <div className="flex justify-center ">
                                    <div className="flex justify-center w-10/12 h-auto ">
                                          <Body />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default LayOutProject;
