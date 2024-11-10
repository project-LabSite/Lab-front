import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md mb-4 p-3 w-full">
      <div className="mx-auto flex flex-col justify-around">
        <div className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
          {item.content}
        </div>
        <div className="text-xs sm:text-sm md:text-base flex flex-row-reverse mt-2">
          <div className="flex items-center text-gray-500">
            <FontAwesomeIcon
              className="ml-1 text-xs sm:text-sm md:text-base"
              icon={faEye}
            />
            <div className="ml-1">{item.view}</div>
          </div>
          <div className="text-gray-500">{item.day}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
