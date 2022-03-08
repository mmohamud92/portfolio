import ProjectOne from "./Projects/ProjectOne";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";
import ProjectFour from "./Projects/ProjectFour";

function BodyThree() {
      return (
            <div className="flex h-auto overflow-hidden justify-center">
                  <div className="flex w-10/12 justify-center ">
                        <div className="flex flex-col content-center items-center w-auto md:pt-24">
                              <div>
                                    <div className="pb-3 text-portblue text-[5vw] md:text-5xl font-semibold item">
                                          <div>
                                                Some of the stuff I've built
                                          </div>
                                    </div>
                                    <div className="border-t-4 lg:w-[38rem] border-portblue pb-4"></div>
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
