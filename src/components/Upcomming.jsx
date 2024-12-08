import upcomming1 from "../assets/upcomming1.jpg";
const Upcomming = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Upcoming Movie</h1>
      <div className="flex flex-col gap-5 justify-around md:flex-row items-center">
        <div className="flex flex-col gap-4 max-w-[500px]">
          <h2 className="text-4xl">
            <span className="font-bold">Name :</span> Pushpa
          </h2>
          <p className="flex">
            <span className="font-bold">
              Actors : 
             </span>
              <div className="flex gap-3">
                <p> Allu Arjun </p>
                <p>Rashmika Mandanna</p>
                <p>Fahadh Faasil</p>
              </div>{" "}
            
          </p>
          <p>
            <span className="font-bold">Story :</span> The clash is on as Pushpa
            and Bhanwar Singh continue their rivalry in this epic conclusion to
            the two-parted action drama.
          </p>
          <h4 className="text-2xl">
            <span className="font-bold">Ratting</span> : 6.8
          </h4>
        </div>
        <div>
          <img className="max-h-[400px]" src={upcomming1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
