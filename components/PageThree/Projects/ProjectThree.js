import Project from "./Project";
import Technologies from "./Technologies";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Portfolio from "../../../images/projects/Portfolio.png";

function ProjectThree() {
      return (
            <div className="lg:pt-16 flex justify-center pt-[2vh] text-justify">
                  <Project
                        image={Portfolio}
                        text=<div className="text-portwhite font-bold lg:font-normal">
                              <div>
                                    You're already here! My personal portfolio.
                              </div>
                              <div className="pt-5 font-bold lg:font-normal">
                                    [Individual Project - obviously!]
                              </div>
                        </div>
                        techStack=<div className="flex justify-between  lg:w-[35.416666666666664vw]">
                              <Technologies
                                    technology="React"
                                    icon={<FaReact />}
                              />
                              <Technologies
                                    technology="Next.js"
                                    icon={<SiNextdotjs />}
                              />
                              <Technologies
                                    technology="Tailwind CSS"
                                    icon={<SiTailwindcss />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectThree;
