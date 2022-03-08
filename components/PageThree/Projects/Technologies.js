const Technologies = ({ icon, technology, font }) => {
      return (
            <div className="flex flex-col items-center w-[5vw] lg:w-20 pt-3 ">
                  <div className="flex items-center justify-center lg:w-16 lg:h-16 rounded-2xl text-[4vw] lg:text-[2.83rem] text-portblue">
                        <div className="">{icon}</div>
                  </div>
                  <div className="flex items-center justify-center text-[1.25vw] font-semibold md:text-sm text-portblack">
                        {technology}
                  </div>
            </div>
      );
};

export default Technologies;
