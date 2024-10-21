import ResearchCard from "../../components/Card/ResearchCard";

const ResearchCardItem = [
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소재개발',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '분자 시뮬레이션',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '시스템 해석',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소재개발',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '분자 시뮬레이션',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '시스템 해석',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소재개발',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '분자 시뮬레이션',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '시스템 해석',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '소재개발',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '분자 시뮬레이션',
    },
    {
        imgSrc: '../../assets/images/starship.png',
        content: '시스템 해석',
    },
]

const Research = () => {
    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-4">
                연구 분야
            </div>
            <div className="flex flex-row flex-wrap justify-between">
                {ResearchCardItem.map((item) => (
                    <ResearchCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default Research;