const Technologies = ({ icon, technology, font }) => {
      return (
            <div className="flex flex-col items-center w-[5vw] md:w-20 ">
                  <div className="flex items-center justify-center  md:w-16 md:h-16 rounded-2xl text-[4vw] md:text-[2.83rem] text-portblue">
                        <div className="">{icon}</div>
                  </div>
                  <div className="flex items-center justify-center text-[1.25vw] font-semibold md:text-sm text-portblack">
                        {technology}
                  </div>
            </div>
      );
};

export default Technologies;
