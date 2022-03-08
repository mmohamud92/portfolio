import ProjectFlipped from "./ProjectFlipped";
import Technologies from "./Technologies";
import { SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import SOCDashboard from "../../../images/projects/SOCDashboard.png";

function ProjectTwo() {
      return (
            <div className="lg:pt-16 flex justify-center pt-[2vh] ">
                  <ProjectFlipped
                        href={"https://gracious-wescoff-9aa876.netlify.app/"}
                        image={SOCDashboard}
                        text=<div>
                              <div className="text-portwhite font-bold lg:font-normal">
                                    &#8221;We have so many different Slack
                                    channels and I find it difficult to find the
                                    information that I need when I need
                                    it&#8221; - here comes the School of Code
                                    Dashboard. The Dashboard allows bootcampers
                                    to quickly find any previous resources
                                    shared and it even has a 'Study Buddy'
                                    section where bootcampers can inform others
                                    of what they're studying, when and how to
                                    study with them to promote pair programming!
                                    [1-week Group Project]
                              </div>
                              <div className="text-portwhite font-bold lg:font-normal">
                                    [4-week Group Project]
                              </div>
                        </div>
                        techStack=<div className="flex justify-between  lg:w-[28.333333333333332vw]">
                              <Technologies
                                    technology="React"
                                    icon={<FaReact />}
                              />
                              <Technologies
                                    technology="Node.js"
                                    icon={<FaNodeJs />}
                              />

                              <Technologies
                                    technology="PostgreSQL"
                                    icon={<SiPostgresql />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectTwo;
