import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CotactInfo = () => {
  return (
    <div className="flex flex-col items-center md:flex-row w-full my-7 lg:mt-32">
      <div className=" border-2 w-[80%] h-44 lg:1/2 m-2 shadow-lg">
        <div className="font-bold text-2xl m-2">교수</div>
        <div className="font-bold text-lg m-2">박치훈</div>
        <div className="flex m-2">
          <FontAwesomeIcon className="m-1" icon={faPhone} />
          <div>+82-55-772-3881</div>
        </div>
        <div className="flex m-2">
          <FontAwesomeIcon className="m-1" icon={faEnvelope} />
          <div>chp@gnu.ac.kr</div>
        </div>
      </div>
      <div className=" border-2 w-[80%] h-44 lg:1/2 m-2 shadow-lg">
        <div className="font-bold text-2xl m-2">학생</div>
        <div className="font-bold text-lg m-2">서영진</div>
        <div className="flex m-2">
          <FontAwesomeIcon className="m-1" icon={faEnvelope} />
          <div>tjdudwls@gnu.ac.kr</div>
        </div>
      </div>
    </div>
  );
};

export default CotactInfo;
