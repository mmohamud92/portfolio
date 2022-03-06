import ProjectFlipped from "./ProjectFlipped";
import Technologies from "../../PageTwo/Technologies";
import { SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import SOCDashbpard from "../../../images/projects/SOCDashboard.png";

function ProjectTwo() {
      return (
            <div className="pt-16 ">
                  <ProjectFlipped
                        href={"https://gracious-wescoff-9aa876.netlify.app/"}
                        image={SOCDashbpard}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack=<div className="flex justify-between w-[34rem]">
                              <Technologies
                                    technology="React"
                                    icon={<FaReact size="45" />}
                              />
                              <Technologies
                                    technology="Node.js"
                                    icon={<FaNodeJs size="45" />}
                              />

                              <Technologies
                                    technology="PostgreSQL"
                                    icon={<SiPostgresql size="45" />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectTwo;
