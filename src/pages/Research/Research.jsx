import ResearchCard from "../../components/Card/ResearchCard";
// import { getPost } from "../../service/apiService";
// import { useState, useEffect } from "react";

const ResearchCardItem = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/300",
    content: "소재개발",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/300",
    content: "분자 시뮬레이션",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/300",
    content: "시스템 해석",
  },
];

const Research = () => {
  //   const [researchData, setResearchData] = useState([]);

  //     useEffect(() => {
  //       const fetchData = async () => {
  //         try {
  //           const researchAreaList = await getPost("research");
  //           console.log(researchAreaList.data);
  //           setResearchData(researchAreaList.data);
  //         } catch (error) {
  //           console.error("Error getPost : ", error);
  //         }
  //       };
  //       fetchData();
  //     }, []);

  return (
    <div className="relative pt-32 pb-20 md:pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl text-gray-800 font-medium py-2 sm:py-4  border-b-2 border-gray-400 w-full mb-4">
        연구 분야
      </div>
      <div className="flex flex-wrap justify-center md:justify-between w-full mt-5">
        {ResearchCardItem.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Research;
