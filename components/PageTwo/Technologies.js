const Technologies = ({ icon, technology, font }) => {
      return (
            <div className="flex flex-col items-center w-20 ">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl text-portblue">
                        <div>{icon}</div>
                  </div>
                  <div className="flex items-center justify-center text-sm font-semibold text-portblack">
                        {technology}
                  </div>
            </div>
      );
};

export default Technologies;
