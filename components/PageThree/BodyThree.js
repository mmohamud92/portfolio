import Projects from "./Projects/Project";
import ProjectOne from "./Projects/ProjectOne";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";
import ProjectFour from "./Projects/ProjectFour";
import Technologies from "../PageTwo/Technologies";
import {
      SiNextdotjs,
      SiJest,
      SiTypescript,
      SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

function BodyThree() {
      return (
            <div className="flex h-auto">
                  <div className="flex w-10/12 ">
                        <div className="flex w-auto h-auto md:pt-24">
                              <div>
                                    <div className="pb-3 text-portblue text-[8vw] md:text-5xl font-semibold">
                                          <div>
                                                Some of the stuff I've built
                                          </div>
                                    </div>
                                    <div className="border-t-4 w-[38rem] border-portblue pb-4"></div>
                                    <div>
                                          <ProjectOne />
                                          <ProjectTwo />
                                          <ProjectThree />
                                          <ProjectFour />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyThree;
