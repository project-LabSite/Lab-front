import { useState, useEffect, useRef, useCallback } from "react";
import PublicationCard from "../../components/Card/PublicationCard";
import PublicationSide from "../../components/Common/PublicationSide";
import fetchScholarData from "../../service/Publication/PublicationData";
import "../../assets/styles/publication.css";

const Publication = () => {
  const [publicationData, setPublicationData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const yearRef = useRef({});

  useEffect(() => {
    const getPublicationData = async () => {
      const data = await fetchScholarData();
      setPublicationData(data);
      setIsLoading(false);
    };
    getPublicationData();
  }, []);

  const filterPublicationsByYear = (year) => {
    return publicationData.filter((item) => Number(item.year) === Number(year));
  };

  const getYears = () => {
    const years = publicationData.map((item) => Number(item.year));
    const uniqueYears = [...new Set(years)].sort((a, b) => b - a);
    return uniqueYears;
  };

  const publicationYear = getYears();
  const sidebarYears = publicationYear.filter((year) => year >= 2018);

  const handleScroll = useCallback(() => {
    let currentYear = null;

    publicationYear.forEach((year) => {
      const yearElement = yearRef.current[year];
      if (yearElement) {
        const rect = yearElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.2 && rect.bottom > 0) {
          currentYear = year;
        }
      }
    });
    if (currentYear && currentYear <= 2018) {
      setSelectedYear(2018);
    } else {
      setSelectedYear(currentYear);
    }
  }, [publicationYear]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const yearScroll = (year) => {
    const clickYear = yearRef.current[year];
    if (clickYear) {
      const viewportHeight = window.innerHeight;
      const offsetTop = clickYear.getBoundingClientRect().top + window.scrollY;
      const adjustedTop = offsetTop - viewportHeight * 0.15;

      window.scrollTo({
        top: adjustedTop,
        behavior: "smooth",
      });
    }
    setSelectedYear(year);
  };

  return (
    <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto mb-20">
      <div className="fixed top-1/4 bg-gray-800 text-white shadow-lg rounded right-[5%] hidden md:block">
        {sidebarYears.map((year, index) => (
          <PublicationSide
            key={index}
            year={year}
            yearScroll={() => yearScroll(year)}
            isSelected={year === selectedYear}
            className={`cursor-pointer px-4`}
          />
        ))}
      </div>
      <div className="pl-6 text-4xl text-gray-800 font-medium py-4 border-b-2 border-blue-800 w-full mb-8">
        국내외 논문
      </div>
      <div className="flex flex-col items-center w-full px-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-96">
            <div className="loader border-t-4 border-blue-800 rounded-full w-12 h-12 mb-4 animate-spin"></div>
            <div className="text-gray-600">Loading publications...</div>
          </div>
        ) : (
          publicationYear.map((year, index) => (
            <div
              key={index}
              ref={(el) => (yearRef.current[year] = el)}
              className="mb-8 w-full"
            >
              <div className="text-4xl text-center font-semibold gray-800">
                {year == 0 ? "-" : year}
              </div>
              <div className="mt-4 ml-4 shadow-md rounded-lg p-6 bg-white">
                <PublicationCard
                  publicationItems={filterPublicationsByYear(year)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Publication;
