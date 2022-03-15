function BodyFour() {
      return (
            <div className="flex items-center justify-center h-screen overflow-hidden">
                  <div className="flex content-center w-10/12 ">
                        <div className="flex items-center content-center w-auto md:pt-24">
                              <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center">
                                          <div className="pb-3 text-portblue text-[7vw] md:text-5xl font-semibold flex">
                                                <div>Get in touch!</div>
                                          </div>
                                          <div className="pb-8 border-t-4 w-[35vw] md:w-[20vw] border-portblue"></div>
                                          <div className="w-[70%]">
                                                <div className="pb-28 md:pb-20 md:text-2xl text-portblack text-[3vw] text-justify md:text-center">
                                                      <p>
                                                            I'm currently
                                                            looking for new{" "}
                                                            <span className="font-semibold text-portblue">
                                                                  opportunities
                                                            </span>{" "}
                                                            and would love to
                                                            hear more from you -
                                                            don't hesitate to
                                                            get in{" "}
                                                            <span className="font-semibold text-portblue">
                                                                  contact
                                                            </span>{" "}
                                                            with me!
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <a
                                                className=" py-[2vh] px-[4vw] space-x-16 text-[4vw] md:text-xl transition rounded shadow md:py-3 md:px-7 text-portwhite bg-portblue hover:bg-portdarkerblue hover:text-gray-150 duration-400 cursor-pointer"
                                                href="mailto:m.mohamud1992@gmail.com"
                                          >
                                                Say Hi!
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyFour;
