const CotactInfo = () => {
    return (
        <div className="flex m-4 w-full">
            <div className="border-r-4 border-2 w-72 m-2">
                <div className="font-bold text-2xl m-2">교수</div>
                <div className="font-bold text-lg m-2">박치훈</div>
                <div className="flex m-2">
                    <img src="aa" alt="전화기 이미지"></img>
                    <div>+82-55-772-3881</div>
                </div>
                <div className="flex m-2">
                    <img src="aa" alt="메일 이미지"></img>
                    <div>chp@gnu.ac.kr</div>
                </div>
            </div>
            <div className="border-r-4 border-2 w-72 m-2">
                <div className="font-bold text-2xl m-2">학생들</div>
                <div className="font-bold text-lg m-2">서영진</div>
                <div className="flex m-2">
                    <img src="aa" alt="메일 이미지"></img>
                    <div>tjdudwls@gnu.ac.kr</div>
                </div>
            </div>
        </div>
    )
}

export default CotactInfo;