import { SvgBlob } from "react-svg-blob";
import { cross as crossPattern } from "react-svg-blob/dist/lib/patterns";
import Selfie from "../../images/Selfie.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
      SiNextdotjs,
      SiJest,
      SiTypescript,
      SiPostgresql,
} from "react-icons/si";
import Technologies from "./Technologies";
import Image from "next/image";
function BodyTwo() {
      return (
            <div className="flex items-center content-center justify-center h-screen overflow-hidden">
                  <div className="flex w-9/12 overflow-hidden ">
                        <div className="flex h-screen md:pt-24">
                              <div className=" pl-[5vw] md:pl-0 ">
                                    <div className="pb-3 text-portblue text-[7vw] md:text-5xl font-semibold">
                                          <div>About me</div>
                                    </div>
                                    <div className="pb-8 border-t-4 w-[35vw] md:w-60 border-portblue"></div>
                                    <div className="w-9/12  text-portblack md:text-[1.075rem] sm:text-[2.1vw] text-[2.6vw] text-justify">
                                          <div className="pb-5 ">
                                                <p>
                                                      {" "}
                                                      Hello and welcome! My name
                                                      is Mohamed and I have
                                                      recently developed (no pun
                                                      intended) a passion for
                                                      developing things. I
                                                      decided to transition into
                                                      Tech because developers
                                                      appeared to have a sense
                                                      of empowerment driven by
                                                      their ability to code. And
                                                      I want to be{" "}
                                                      <span className="font-semibold text-portblue">
                                                            empowered.
                                                      </span>{" "}
                                                </p>
                                          </div>
                                          <div className="pb-5">
                                                <p>
                                                      {" "}
                                                      After a rocky road of
                                                      trying to teach myself how
                                                      to code, I enrolled to the{" "}
                                                      <span className="font-semibold text-portblue">
                                                            School of Code{" "}
                                                      </span>
                                                      being selected out of
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            1800+{" "}
                                                      </span>
                                                      candidates. Fast forward
                                                      to today, and I have
                                                      worked in{" "}
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            agile{" "}
                                                      </span>
                                                      teams, taken part in
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            pair/team
                                                            programming{" "}
                                                      </span>
                                                      and applied{" "}
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            computational
                                                            thinking{" "}
                                                      </span>{" "}
                                                      to code.
                                                </p>
                                          </div>
                                          <div>
                                                <p className="pb-5 ">
                                                      My{" "}
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            main focus{" "}
                                                      </span>{" "}
                                                      currently is to find a
                                                      suitable role for me,
                                                      (preferably front-end
                                                      related). My{" "}
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            secondary{" "}
                                                      </span>
                                                      focus is doing what I can
                                                      to help tech be more
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            accessible
                                                      </span>
                                                      , particularly to those
                                                      who come from
                                                      disadvantaged backgrounds.
                                                      I'm doing this by
                                                      releasing videos on my{" "}
                                                      <span>
                                                            <a
                                                                  href="https://www.youtube.com/c/codewithmohamed"
                                                                  target="blank"
                                                                  className="font-semibold cursor-pointer text-portblue hover:text-portdarkerblue"
                                                            >
                                                                  YouTube
                                                                  channel
                                                            </a>
                                                      </span>{" "}
                                                      and by{" "}
                                                      <span>
                                                            <a
                                                                  href="https://mohamedmohamud.hashnode.dev/"
                                                                  target="blank"
                                                                  className="font-semibold cursor-pointer text-portblue hover:text-portdarkerblue"
                                                            >
                                                                  blogging my
                                                                  journey.
                                                            </a>
                                                      </span>{" "}
                                                </p>
                                          </div>
                                          <div className="pb-5 ">
                                                <p>
                                                      Some of the{" "}
                                                      <span className="font-semibold text-portblue">
                                                            {" "}
                                                            technologies{" "}
                                                      </span>
                                                      I've been working with:
                                                </p>
                                          </div>
                                          <div className="flex justify-between">
                                                <Technologies
                                                      technology="React"
                                                      icon={<FaReact />}
                                                />
                                                <Technologies
                                                      technology="JavaScript"
                                                      icon={<DiJavascript1 />}
                                                />
                                                <Technologies
                                                      technology="Node.js"
                                                      icon={<FaNodeJs />}
                                                />
                                                <Technologies
                                                      technology="Next.js"
                                                      icon={<SiNextdotjs />}
                                                />
                                                <Technologies
                                                      technology="Jest"
                                                      icon={<SiJest />}
                                                />
                                                <Technologies
                                                      technology="TypeScript"
                                                      icon={<SiTypescript />}
                                                />
                                                <Technologies
                                                      technology="PostgreSQL"
                                                      icon={<SiPostgresql />}
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="flex items-center justify-center w-3/12 ">
                        <div className="flex justify-center">
                              <div className=" lg:max-w-[100%] h-auto md:w-[21vw] w-[30vw] -translate-x-7">
                                    <Image src={Selfie} />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyTwo;
