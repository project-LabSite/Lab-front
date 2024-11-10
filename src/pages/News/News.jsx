import NewsCard from "../../components/Card/NewsCard";

const NewsCardItem = [
  {
    id: 1,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 2,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 3,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 4,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 5,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 6,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 7,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 8,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 9,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 10,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
  {
    id: 11,
    content: "소식과 관련된 내용 작성 소식 제목입니다. 소식 제목입니다.",
    day: "2024-07-07",
    view: "87",
  },
];

const News = () => {
  return (
    <div className="pt-28 pb-10 w-4/5 max-w-screen-lg mx-auto mb-20">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl text-gray-800 font-medium py-2  sm:py-4 border-b-2 border-gray-400 w-full mb-4">
        소식
      </div>
      <div className="flex flex-col items-center mt-5">
        {NewsCardItem.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
