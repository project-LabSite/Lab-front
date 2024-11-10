import MemberCard from "../../components/Card/MemberCard";

const memberItems = [
  {
    name: "박지훈",
    faculty: "교수",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
  {
    name: "서영진",
    faculty: "학부연구생",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
  {
    name: "박지훈",
    faculty: "교수",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
  {
    name: "서영진",
    faculty: "학부연구생",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
  {
    name: "박지훈",
    faculty: "교수",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
  {
    name: "서영진",
    faculty: "학부연구생",
    number: "010-xxxx-xxxx",
    email: "asd123@gnu.ac.kr",
  },
];

const Member = () => {
  return (
    <div className="pt-28 pb-10 w-4/5 max-w-screen-lg mx-auto mb-20">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl text-gray-800 font-medium py-2  sm:py-4 border-b-2 border-gray-400 w-full mb-4">
        구성원
      </div>
      <div className="flex flex-wrap justify-between gap-6 w-full">
        {memberItems.map((item, index) => (
          <div key={index} className="flex justify-center w-full md:w-[47%]">
            <MemberCard memberItems={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
