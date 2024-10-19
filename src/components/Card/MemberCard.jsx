import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MemberCard = ({memberItems}) => {
    return (
        <div className="flex items-center px-8 py-4 mb-5 bg-white shadow-lg rounded-lg">
            <img className="w-40 h-52 bg-slate-500 rounded-lg mr-6" alt="member_profile"></img>
            <div className="flex flex-col space-y-2">
                <div className="flex items-baseline space-x-2 mb-5">
                    <span className="text-2xl font-bold">{memberItems.name}</span>
                    <span className="text-gray-600">{memberItems.faculty}</span>
                </div>
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="text-white bg-gray-500 rounded-full p-2" />
                        <span className="text-gray-700">{memberItems.number}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white bg-gray-500 rounded-full p-2" />
                        <span className="text-gray-700">{memberItems.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
