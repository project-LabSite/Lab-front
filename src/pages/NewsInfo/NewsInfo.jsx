import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const NewsInfo = () => {
    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">소식</div>
            <div>소식과 관련된 내용 작성</div>
            <div className="text-sm flex flex-row justify-end">
                    <div>2024-07-07</div>
                    <FontAwesomeIcon className='m-1' icon={faEye} />
                    <div>87</div>
                </div>
        </div>
    );
};

export default NewsInfo;