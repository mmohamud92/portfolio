import Typewriter from "typewriter-effect";

function BodyOne() {
      return (
            <div className="flex justify-center h-screen overflow-hidden">
                  <div className="flex w-10/12 overflow-hidden ">
                        <div className="flex items-center content-center h-screen">
                              <div>
                                    <div className="pb-3 md:pt-6">
                                          <h2 className=" pb-2 md:pb-0 lg:text-[4.4852rem] md:text-[3.36rem] font-semibold text-portblack text-[7vw]">
                                                Hey! I'm
                                          </h2>
                                          <h2 className=" pb-2 md:pb-2 lg:text-[4.4852rem] md:text-[3.36rem] font-bold text-portblack text-[7vw]">
                                                Mohamed Mohamud
                                          </h2>
                                          <div className="w-full py-1 border-t-4 border-portblue"></div>
                                          <h2 className="pb-6 text-portblack md:text-[3rem] lg:text-[3.3rem] text-[6.5vw] md:text-6xl font-semibold ">
                                                A
                                                <span className=" text-portblue">
                                                      {""} full stack {""}
                                                </span>
                                                developer.
                                          </h2>
                                          <p className="pt-5 md:text-2xl text-portblack text-[3.75vw] md:w-12/12 ">
                                                A developer hoping to make tech
                                                more{" "}
                                                <span className="font-semibold text-portblue">
                                                      accessible
                                                </span>{" "}
                                                to those from{" "}
                                                <span className="font-semibold text-portblue">
                                                      disadvantaged
                                                </span>{" "}
                                                backgrounds. Currently looking
                                                for{" "}
                                                <span className="font-semibold text-portblue">
                                                      new opportunities!
                                                </span>{" "}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyOne;
