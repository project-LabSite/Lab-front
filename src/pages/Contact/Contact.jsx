import CotactInfo from "../../components/Card/ContactInfo";
import KakaoLocation from "../../components/Common/KakaoLocation";

const Contact = () => {
  return (
    <>
      <div className="pt-28 pb-10 w-4/5 max-w-screen-lg mx-auto mb-20 flex flex-col lg:flex-row">
        <div className="lg:w-[50%] m-1">
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-medium py-2  sm:py-4 border-b-2 border-gray-400 w-full mb-4">
            오시는 길
          </div>
          <KakaoLocation />
        </div>
        <div className="lg:w-[45%] m-1">
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-medium py-2  sm:py-4 border-b-2 border-gray-400 w-full mb-4">
            문의
          </div>
          <CotactInfo />
        </div>
      </div>
    </>
  );
};

export default Contact;
