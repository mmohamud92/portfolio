import { usestate } from "react";
function BodyTwo() {
      const skills = ["JavaScript ES"];
      return (
            <div className="flex justify-center h-screen overflow-hidden">
                  <div className="flex justify-center w-10/12 overflow-hidden ">
                        <div className="flex h-screen pt-24 ">
                              <div>
                                    <div className="pb-3 text-4xl font-semibold text-portblue">
                                          <div>About me</div>
                                    </div>
                                    <div className="w-56 py-2 border-t-4 border-portblue"></div>
                                    <div className="w-8/12 text-xl text-portblack">
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
                                                      1800+ candidates. Fast
                                                      forward to today, and I
                                                      have been been able to
                                                      work in agile teams, take
                                                      part in pair/team
                                                      programming and applying
                                                      computational thinking to
                                                      code.
                                                </p>
                                          </div>
                                          <div>
                                                <p>
                                                      My main focus currently is
                                                      to find a suitable role
                                                      for me, (preferably
                                                      front-end related). My
                                                      secondary focus is doing
                                                      what I can to help tech be
                                                      more accessible,
                                                      particularly to those who
                                                      come from disadvantaged
                                                      backgrounds. I've tried
                                                      doing this by starting a{" "}
                                                      <span>
                                                            <a
                                                                  href="https://www.youtube.com/c/codewithmohamed"
                                                                  target="blank"
                                                                  className="font-semibold cursor-pointer text-portblue"
                                                            >
                                                                  YouTube
                                                                  channel
                                                            </a>
                                                      </span>{" "}
                                                      and by{" "}
                                                      <span>
                                                            <a
                                                                  href="https://www.youtube.com/c/codewithmohamed"
                                                                  target="blank"
                                                                  className="font-semibold cursor-pointer text-portblue"
                                                            >
                                                                  blogging my
                                                                  journey.
                                                            </a>
                                                      </span>{" "}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyTwo;
