import Project from "./Project";
import Technologies from "./Technologies";
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
            <div className="lg:pt-16 flex justify-center pt-[0.5vh] ">
                  <Project
                        href={"https://bookwormsreading.netlify.app/"}
                        image={BookWorms}
                        text=<div>
                              <div className="text-portwhite font-bold lg:font-normal">
                                    A modern solution to an age-old problem.
                                    Book Worms allows teachers to be able to
                                    digitally monitor students' reading habits.
                                    Teachers can view class and (specific)
                                    student data Students can add data on how
                                    much they've read and also leave a comment
                                    on their most recent reading.
                              </div>
                              <div className="text-portwhite font-bold lg:font-normal">
                                    [4-week Group Project]
                              </div>
                        </div>
                        techStack=<div className="flex justify-between  lg:w-[35.416666666666664vw]">
                              <Technologies
                                    technology="React"
                                    icon={<FaReact />}
                              />
                              <Technologies
                                    technology="Node.js"
                                    icon={<FaNodeJs />}
                              />
                              <Technologies
                                    technology="Next.js"
                                    icon={<SiNextdotjs />}
                              />
                              <Technologies
                                    technology="PostgreSQL"
                                    icon={<SiPostgresql />}
                              />
                              <Technologies
                                    technology="Jest"
                                    icon={<SiJest />}
                              />
                        </div>
                  />
            </div>
      );
}

export default ProjectOne;
