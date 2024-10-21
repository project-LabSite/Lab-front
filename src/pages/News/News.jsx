import NewsCard from "../../components/Card/NewsCard";

const NewsCardItem = [
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용 tailwind css 어렵네',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
]

const News = () => {
    return (
        <div className="pt-28 pb-10 flex-col items-center w-4/5 max-w-screen-lg mx-auto">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">
                소식
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {NewsCardItem.map((item) => (
                    <NewsCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default News;