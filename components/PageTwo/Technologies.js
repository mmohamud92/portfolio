const Technologies = ({ icon, technology, font }) => {
      return (
            <div className="flex flex-col items-center w-[5vw] md:w-20 ">
                  <div className="flex items-center justify-center  md:w-16 md:h-10 lg:w-[5vw] lg:h-[5vh] rounded-2xl text-[6vw] lg:pt-[2vh] sm:text-[5vw] md:text-[4vw] text-portblue">
                        <div className="">{icon}</div>
                  </div>
                  <div className="flex items-center justify-center text-[1.75vw] font-semibold sm:text-[1.5vw] lg:text-[1.25vw] text-portblack lg:pt-[2.5vh]">
                        {technology}
                  </div>
            </div>
      );
};

export default Technologies;
