import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import profileImg from "./profile.jpg";

const MemberCard = ({ memberItems }) => {
  const location = useLocation();
  const myPageCss = location.pathname.startsWith("/mypage");

  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [number, setNumber] = useState(memberItems.number);
  const [email, setEmail] = useState(memberItems.email);

  let cardShadow = "shadow-md rounded-lg";
  let imgSize = "w-28 h-36 md:w-35 md:h-45";
  let nameSize = "text-lg";
  let textSize = "text-sm";
  let padding = "px-4 py-3";
  let flexCss = "space-y-1";

  if (myPageCss) {
    imgSize = "w-32 h-40";
    nameSize = "text-xl";
    textSize = "text-base";
    padding = "px-8 py-5";
    flexCss = "space-y-4";
    cardShadow = "shadow-lg";
  }

  return (
    <div
      className={`flex items-center ${padding} mb-5 bg-white ${cardShadow} w-full md:w-full`}
    >
      <img
        src={profileImg}
        className={`${imgSize} bg-slate-500 rounded-lg shadow-lg mr-4`}
        alt="member_profile"
      />

      <div className={`flex flex-col ${flexCss}  md:pl-5`}>
        <div className="flex items-baseline space-x-1 mb-3">
          <span className={`${nameSize} font-bold`}>{memberItems.name}</span>
          <span className={`${textSize} text-gray-600`}>
            {memberItems.faculty}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white text-xs bg-gray-500 rounded-full p-1"
            />
            {isEditingNumber ? (
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border-b-2 text-base border-gray-300 focus:outline-none"
              />
            ) : (
              <span className={`${textSize} text-gray-700`}>{number}</span>
            )}
            {myPageCss && (
              <button
                onClick={() => setIsEditingNumber(!isEditingNumber)}
                className="text-gray-400"
              >
                <FontAwesomeIcon icon={isEditingNumber ? faSave : faEdit} />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white text-xs bg-gray-500 rounded-full p-1"
            />
            {isEditingEmail ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 text-base border-gray-300 focus:outline-none"
              />
            ) : (
              <span className={`${textSize} text-gray-700`}>{email}</span>
            )}
            {myPageCss && (
              <button
                onClick={() => setIsEditingEmail(!isEditingEmail)}
                className="text-gray-400"
              >
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
