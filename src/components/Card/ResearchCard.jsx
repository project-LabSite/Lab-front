const NewsCard = ({ item }) => {
    return (
        <div className="bg-slate-600 w-60 h-96 flex flex-col ml-4 mb-8 drop-shadow-lg">
            <div className="bg-slate-400 w-48 h-full mx-auto flex flex-col justify-around">
                <div>
                    <img className="w-48 h-60 bg-slate-200" src={item.imgSrc} alt="소식 사진" />
                </div>
                <div className="font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap">{item.content}</div>
                <div className="text-sm flex flex-row justify-end">
                    <div>{item.day}</div>
                    <img src={item.iconSrc} alt="아이콘 사진" />
                    <div>{item.view}</div>
                </div>
            </div>
        </div>
    );
};


export default NewsCard;