import { FaSadTear } from "react-icons/fa";

const UnavailablePage = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-[360px]">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        Oops! This Item is Currently Unavailable <FaSadTear />
      </h1>
      <p className="text-lg text-gray-600">
        We're sorry, but the item you're looking for isn't available at the moment.
      </p>
    </div>
  );
};

export default UnavailablePage;
