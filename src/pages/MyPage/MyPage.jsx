import { useLocation } from 'react-router-dom';
import MemberCard from '../../components/Card/MemberCard';
import Assignment from '../../components/Common/Assignment';

const memberItems = [
    {
        name: '박지훈',
        faculty: '교수',
        number: '010-xxxx-xxxx',
        email: 'asd123@gnu.ac.kr',
    },
    {
        name: '서영진',
        faculty: '학부연구생',
        number: '010-xxxx-xxxx',
        email: 'gfhf12345@gnu.ac.kr',
    },
];

const MyPage = () => {
    const location = useLocation();

    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
            <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-gray-200 w-full mb-4">
                {location.pathname === '/mypage/master' ? 'Master' : 'User'}
            </div>
            <div className="flex flex-row border-b-2 border-gray-200 w-full">
                <MemberCard memberItems={location.pathname === '/mypage/master' ? memberItems[0] : memberItems[1]} />
            </div>
            {location.pathname === '/mypage/master' && <Assignment />}
        </div>
    );
};

export default MyPage;
