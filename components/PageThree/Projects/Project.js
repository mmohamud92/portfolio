import Image from "next/image";
const Project = ({ icon, techStack, text, image, href }) => {
      return (
            <div>
                  <div className="flex items-center justify-center h-auto rounded ">
                        <div className="flex items-center">
                              <div className="flex w-auto h-[17.813rem] overflow-hidden rounded-lg bg-blueme">
                                    <a
                                          className=" w-[38rem] filter brightness-50 hover:brightness-110 transition-all duration-200"
                                          href={href}
                                          target="_blank"
                                          rel="noreferrer"
                                    >
                                          <Image src={image} />
                                    </a>
                              </div>
                              <div>
                                    <div className="h-auto w-[40rem] bg-portblue text-portwhite -translate-x-16 py-4 px-4 rounded-md">
                                          {text}
                                    </div>
                                    <div className="flex justify-center pt-4">
                                          <h4>Technologies used:</h4>
                                    </div>
                                    <div>{techStack}</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Project;
