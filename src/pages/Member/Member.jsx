import MemberCard from '../../components/Card/MemberCard';

const memberItems = [
    {
        name: '박지훈',
        faculty: '교수',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '서영진',
        faculty: '학생',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '박지훈',
        faculty: '교수',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '서영진',
        faculty: '학생',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '박지훈',
        faculty: '교수',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '서영진',
        faculty: '학생',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
];

const Member = () => {
    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
            <div className="text-4xl font-bold py-8 border-b-2 border-black w-full m-8 text-center">구성원</div>
            <div className="flex flex-wrap justify-between w-full">
                {memberItems.map((item, index) => (
                    <div key={index} className="flex-1 mx-2">
                        <MemberCard memberItems={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Member;
