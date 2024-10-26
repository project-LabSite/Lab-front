import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const newsItem = {
    title: '소식과 관련된 내용 작성',
    day: '2024-07-07',
    view: '87',
    content: '본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.',
};

const NewsInfo = () => {
    return (
        <div className="pt-28 pb-10 flex flex-col w-full max-w-screen-lg mx-auto mb-20">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">소식</div>
            <div>{newsItem.title}</div>
                    <div className="text-sm flex flex-row justify-start">
                        <div>{newsItem.day}</div>
                        <FontAwesomeIcon className="m-1" icon={faEye} />
                        <div>{newsItem.view}</div>
                    </div>
                    <div className="bg-slate-500 w-80 h-96 m-auto mt-6">
                        <div className="bg-slate-200 w-4/5 h-4/5 m-auto mt-9"></div>
                    </div>
                    <div className="mt-6">
                        {newsItem.content}
                    </div>
        </div>
    );
};

export default NewsInfo;
