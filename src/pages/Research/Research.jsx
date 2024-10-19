import ResearchCard from "../../components/Card/ResearchCard";

const NewsCardItem = [
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용 tailwind css 어렵네',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소식과 관련된 내용',
        day: '2024-07-07',
        iconSrc: '../../assets/images/viewicon.png',
        view: '87',
    },
]

const Research = () => {
    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto">
            <div className="text-4xl font-bold py-8 border-b-2 border-black w-full m-8 text-center">소식</div>
            <div className="flex flex-row flex-wrap justify-center">
                {NewsCardItem.map((item) => (
                    <ResearchCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default Research;