import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import profileImg from './profile.jpg';

const MemberCard = ({ memberItems }) => {
    const location = useLocation();
    const myPageCss = location.pathname.startsWith('/mypage');

    const [isEditingNumber, setIsEditingNumber] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [number, setNumber] = useState(memberItems.number);
    const [email, setEmail] = useState(memberItems.email);

    let cardShadow = 'shadow-lg rounded-lg';
    let imgSize = 'w-40 h-52';
    let nameSize = 'text-2xl';
    let textSize = '';
    let padding = 'px-8 py-4';
    let flexCss = 'space-y-2';

    if (myPageCss) {
        imgSize = 'w-60 h-[308px]';
        nameSize = 'text-4xl';
        textSize = 'text-2xl';
        padding = 'px-12 py-6';
        flexCss = 'justify-start space-x-96 space-y-28';
        cardShadow = '';
    }

    return (
        <div className={`flex items-center ${padding} mb-5 bg-white ${cardShadow} w-full`}>
            <img
                src={`${profileImg}`}
                className={`${imgSize} bg-slate-500 rounded-lg shadow-lg mr-6`}
                alt="member_profile"
            ></img>
            <div className={`flex flex-col ${flexCss}`}>
                <div className="flex items-baseline space-x-2 mb-5">
                    <span className={`${nameSize} font-bold`}>{memberItems.name}</span>
                    <span className={`${textSize} text-gray-600`}>{memberItems.faculty}</span>
                </div>
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="text-white bg-gray-500 rounded-full p-2" />
                        {isEditingNumber ? (
                            <input
                                type="text"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="border-b-2 text-2xl border-gray-300 focus:outline-none w-60"
                            />
                        ) : (
                            <span className={`${textSize} text-gray-700 w-60`}>{number}</span>
                        )}
                        {myPageCss && (
                            <button onClick={() => setIsEditingNumber(!isEditingNumber)} className="text-gray-400">
                                <FontAwesomeIcon icon={isEditingNumber ? faSave : faEdit} />
                            </button>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white bg-gray-500 rounded-full p-2" />
                        {isEditingEmail ? (
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-b-2 text-2xl border-gray-300 focus:outline-none w-60"
                            />
                        ) : (
                            <span className={`${textSize} text-gray-700 w-60`}>{email}</span>
                        )}
                        {myPageCss && (
                            <button onClick={() => setIsEditingEmail(!isEditingEmail)} className="text-gray-400">
                                <FontAwesomeIcon icon={isEditingEmail ? faSave : faEdit} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
