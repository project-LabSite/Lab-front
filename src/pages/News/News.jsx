import NewsCard from "../../components/Card/NewsCard";

const NewsCardItem = [
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
    {
        content: '소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.',
        day: '2024-07-07',
        view: '87',
    },
]

const News = () => {
    return (
        <div className="pt-28 pb-10 w-4/5 max-w-screen-lg mx-auto mb-20">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">
                소식
            </div>
            <div className="flex flex-col items-center">
                {NewsCardItem.map((item) => (
                    <NewsCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default News;