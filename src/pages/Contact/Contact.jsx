import CotactInfo from "../../components/Card/ContactInfo";
import KakaoLocation from "../../components/Common/KakaoLocation";

const Contact = () => {
    return (
        <>
        <div className="flex pt-28 w-4/5 bg-slate-400">
            <div>
            <div className="bg-slate-600 text-4xl font-bold py-10 w-4/5 m-10 text-left">오시는 길</div>
            <KakaoLocation />
            </div>
            <div className="border-l-2">
            <div className="bg-slate-600 text-4xl font-bold py-10 w-5/5 m-10 text-left">문의</div>
            <CotactInfo />
            </div>
        </div>
        </>
    );
}

export default Contact;
