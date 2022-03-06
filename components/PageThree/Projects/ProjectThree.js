import Project from "./Project";
import Technologies from "../../PageTwo/Technologies";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Portfolio from "../../../images/projects/Portfolio.png";

function ProjectThree() {
      return (
            <div className="pt-16 ">
                  <Project
                        image={Portfolio}
                        text=<div>
                              <div>
                                    You're already here! My personal portfolio.
                              </div>
                              <div className="pt-5 ">
                                    [Individual Project - obviously!]
                              </div>
                        </div>
                        techStack=<div className="flex justify-between w-[34rem]">
                              <Technologies
                                    technology="React"
                                    icon={<FaReact size="45" />}
                              />
                              <Technologies
                                    technology="Next.js"
                                    icon={<SiNextdotjs size="45" />}
                              />
                              <Technologies
                                    technology="Tailwind CSS"
                                    icon={<SiTailwindcss size="45" />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectThree;
