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
                        text="&#8221;We have so many different Slack channels and I find it difficult to find the information that I need when I need it&#8221; - here comes the School of Code Dashboard. The Dashboard allows bootcampers to quickly find any previous resources shared and it even has a 'Study Buddy' section where bootcampers can inform others of what they're studying, when and how to study with them to promote pair programming! [1-week Group Project]"
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
