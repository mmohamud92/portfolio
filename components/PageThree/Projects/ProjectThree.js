import Project from "./Project";
import Technologies from "../../PageTwo/Technologies";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import Pokedex from "../../../images/projects/Pokedex.png";

function ProjectThree() {
      return (
            <div className="pt-16 ">
                  <Project
                        href={
                              "https://codepen.io/codingmohamed/project/full/ZgvBnr"
                        }
                        image={Pokedex}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack=<div className="flex justify-between w-[34rem]">
                              <Technologies
                                    technology="HTML"
                                    icon={<FaHtml5 size="45" />}
                              />
                              <Technologies
                                    technology="CSS"
                                    icon={<SiCss3 size="45" />}
                              />
                              <Technologies
                                    technology="Vanilla JS"
                                    icon={<DiJavascript1 size="45" />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectThree;
