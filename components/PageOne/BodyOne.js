import Typewriter from "typewriter-effect";

function BodyOne() {
      return (
            <div className="flex justify-center h-screen overflow-hidden">
                  <div className="flex w-10/12 overflow-hidden ">
                        <div className="flex items-center content-center h-screen">
                              <div>
                                    <div className="pb-3 md:pt-6">
                                          <h2 className=" pb-6 md:text-7xl font-bold text-portblack text-[8vw]">
                                                Hey! I'm Mohamed Mohamud
                                          </h2>
                                          <div className="w-full py-1 border-t-4 border-portblue"></div>
                                          <h2 className="pb-6 text-portblack text-[6.9vw] md:text-6xl font-semibold ">
                                                A
                                                <span className=" text-portblue">
                                                      {""} full stack {""}
                                                </span>
                                                developer.
                                          </h2>
                                          <p className="pt-5 md:text-2xl text-portblack text-[4.5vw] ">
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
                                                for work.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyOne;
