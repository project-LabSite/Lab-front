import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PublicationCard = ({ publicationItems }) => {
  const updatedPublicationItems = publicationItems.map((item) => {
    if (typeof item.authors === "string") {
      const authorsArray = item.authors
        .split(", ")
        .map((author) => author.trim());
      if (!authorsArray.includes("CH Park")) {
        authorsArray.push("CH Park");
      }
      item.authors = authorsArray;
    }
    return item;
  });

  // 모바일에서 상세 정보를 토글할 때 사용
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // 같은 카드 클릭 시 닫히게 하기
  };

  return (
    <div>
      {updatedPublicationItems.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md mb-5 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <div className="hidden md:block md:text-sm font-semibold text-gray-800">
            {item.authors.map((author, authorIndex) => (
              <span key={authorIndex}>
                <span className={author === "CH Park" ? "text-blue-500" : ""}>
                  {author}
                </span>
                {authorIndex < item.authors.length - 1 ? ", " : " "}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm md:text-lg md:font-bold text-gray-800 hover:underline"
            >
              {item.title}
            </a>

            {/* 화살표 아이콘: 모바일에서만 토글 가능 */}
            <FontAwesomeIcon
              icon={openIndex === index ? faChevronUp : faChevronDown}
              className="cursor-pointer md:hidden"
              onClick={() => handleToggle(index)}
            />
          </div>

          <div
            className={`mt-2 text-sm md:text-base text-gray-600 ${
              openIndex === index ? "" : "hidden"
            } md:block`}
          >
            <div className="md:hidden">
              <strong>Authors: </strong>
              {item.authors.join(", ")}
            </div>
            <div>
              <strong>Publication Info: </strong>
              {item.publicationInfo}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationCard;
