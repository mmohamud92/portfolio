import Image from "next/image";
const Project = ({ icon, techStack, text, image, href }) => {
      return (
            <div>
                  <div className="flex h-auto rounded lg:items-center lg:justify-center ">
                        <div className=" lg:flex lg:items-center">
                              <div className="flex overflow-hidden lg:-translate-y-[2vh]">
                                    <a
                                          className=""
                                          href={href ? href : "#"}
                                          target={href ? "_blank" : ""}
                                          rel="noreferrer"
                                    >
                                          <div className="  flex justify-center items-center w-[68vw] lg:w-[31vw] lg:h-[39.47479224376731vh] ">
                                                <div className=" absolute z-10 text-justify lg:hidden text-[1.8vw] w-[45vw] opacity-100 hover:hidden hideit-hover:opacity-0 ">
                                                      {text}
                                                </div>
                                                <div className="flex ">
                                                      <Image
                                                            className="hideit filter 
                                           brightness-50 hover:brightness-110 hover: transition-all duration-200 w-[31vw] h-[39.47479224376731vh] rounded-lg  "
                                                            src={image}
                                                      />
                                                </div>
                                          </div>
                                    </a>
                              </div>
                              <div>
                                    <div className="h-auto lg:w-[32vw] bg-portblue text-portwhite lg:block hidden lg:-translate-x-8 py-4 px-4 rounded-md text-[0.9vw]">
                                          {text}
                                    </div>
                                    <div className="flex justify-center lg:pt-[2.21606648199446vh]"></div>
                                    <div>{techStack}</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Project;
