import Project from "./Project";
import Technologies from "../../PageTwo/Technologies";
import {
      SiNextdotjs,
      SiJest,
      SiTypescript,
      SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import BookWorms from "../../../images/projects/BookWorms.png";

function ProjectOne() {
      return (
            <div className="pt-16 ">
                  <Project
                        href={"https://bookwormsreading.netlify.app/"}
                        image={BookWorms}
                        text="A group project where we created a
                                          modern solution to an age-old problem.
                                          Book Worms allows teachers to be able
                                          to digitally monitor students' reading
                                          habits. Teachers can view class and
                                          (specific) student data Students can
                                          add data on how much they've read and
                                          also leave a comment on their most
                                          recent reading."
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
                                    technology="Next.js"
                                    icon={<SiNextdotjs size="45" />}
                              />
                              <Technologies
                                    technology="PostgreSQL"
                                    icon={<SiPostgresql size="45" />}
                              />
                              <Technologies
                                    technology="Jest"
                                    icon={<SiJest size="45" />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectOne;
