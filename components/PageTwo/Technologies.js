const Technologies = ({ icon, technology, font }) => {
      return (
            <div className="flex flex-col items-center w-[5vw] md:w-20 ">
                  <div className="flex items-center justify-center  md:w-16 md:h-16 rounded-2xl text-[6vw] sm:text-[5vw] text-portblue">
                        <div className="">{icon}</div>
                  </div>
                  <div className="flex items-center justify-center text-[1.75vw] font-semibold sm:text-[1.5vw] text-portblack">
                        {technology}
                  </div>
            </div>
      );
};

export default Technologies;
