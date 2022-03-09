import ProjectOne from "./Projects/ProjectOne";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";
import ProjectFour from "./Projects/ProjectFour";

function BodyThree() {
      return (
            <div className="flex justify-center h-auto overflow-hidden">
                  <div className="flex justify-center w-10/12 ">
                        <div className="flex flex-col items-center content-center w-auto md:pt-24">
                              <div>
                                    <div className="pb-3 text-portblue text-[5vw] md:text-5xl font-semibold item">
                                          <div>Projects I've worked on</div>
                                    </div>
                                    <div className="border-t-4 lg:w-[33rem] border-portblue pb-4"></div>
                              </div>
                              <div>
                                    <ProjectOne />
                                    <ProjectTwo />
                                    <ProjectThree />
                                    <ProjectFour />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default BodyThree;
