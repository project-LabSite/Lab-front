import CotactInfo from "../../components/Card/ContactInfo";
import KakaoLocation from "../../components/Common/KakaoLocation";

const Contact = () => {
    return (
        <>
        <div className="flex pt-28 pb-10 w-11/12 max-w-screen-lg mx-auto mb-20">
            <div className="w-full">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full">
                오시는 길
            </div>
            <KakaoLocation />
            </div>
            <div className="border-l-2">
            <div className="w-full">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">
                문의
            </div>
            <CotactInfo />
            </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
