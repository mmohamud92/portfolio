import ProjectFlipped from "./ProjectFlipped";
import Technologies from "../../PageTwo/Technologies";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import Pokedex from "../../../images/projects/Pokedex.png";

function ProjectFour() {
      return (
            <div className="pt-16 ">
                  <ProjectFlipped
                        href={
                              "https://codepen.io/codingmohamed/project/full/ZgvBnr"
                        }
                        image={Pokedex}
                        text=<div>
                              <div>
                                    My first personal project, and what better
                                    way to start my coding journey than with a
                                    childhood favourite? Two weeks into the
                                    Bootcamp, we were introduced to the Pokémon
                                    API and the rest was history. I wanted to
                                    refactor the code (it's not even responsive)
                                    but I decided not to change the code to
                                    remind myself where I started.
                              </div>
                              <div className="pt-5">[Individual Project]</div>
                        </div>
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

export default ProjectFour;
