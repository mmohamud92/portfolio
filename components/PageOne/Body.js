import Typewriter from "typewriter-effect";

function Body() {
      return (
            <div>
                  <div className="flex flex-col content-center justify-center py-32">
                        <div className="pb-8 pl-48 text-xl text-softorange">
                              <h4>Hi, I'm</h4>
                        </div>
                        <div>
                              <h2 className="pl-48 text-6xl text-white">
                                    Mohamed Mohamud,
                              </h2>
                              <h2 className="pb-8 pl-48 text-6xl text-white">
                                    I'm in (
                                    <span className=" text-softorange">
                                          web
                                    </span>
                                    ) construction.
                              </h2>
                              <h5 className="pl-48 text-white ">
                                    A web developer trying to make tech more
                                    accessible to those from{" "}
                                    <span className=" text-softorange">
                                          disadvantaged
                                    </span>{" "}
                                    backgrounds. Currently looking for work!
                              </h5>
                        </div>
                  </div>
            </div>
      );
}

export default Body;
