import { useState, useEffect, useRef } from 'react';
import PublicationCard from '../../components/Card/PublicationCard';
import PublicationSide from '../../components/Common/PublicationSide';
import GoogleSheetData from '../../service/Publication/PublicationData';

const Publication = () => {
    const [publicationData, setPublicationData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const yearRef = useRef({});

    useEffect(() => {
        const getPublicationData = async () => {
            const data = await GoogleSheetData();
            setPublicationData(data);
        };
        getPublicationData();
    }, []);

    const filterPublicationsByYear = (year) => {
        return publicationData.filter((item) => item.year === year);
    };

    const getYears = () => {
        const years = publicationData.map((item) => item.year);
        const getYears = [...new Set(years)].sort((a, b) => b - a);
        return getYears;
    };

    const publicationYear = getYears();
    const sidebarYears = publicationYear.filter((year) => year >= 2018);

    const handleScroll = () => {
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
        if (currentYear && currentYear <= '2018') {
            setSelectedYear('2018');
            console.log(selectedYear);
        } else {
            setSelectedYear(currentYear);
            console.log(selectedYear);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [publicationYear]);

    const yearScroll = (year) => {
        const clickYear = yearRef.current[year];
        if (clickYear) {
            const viewportHeight = window.innerHeight;
            const offsetTop = clickYear.getBoundingClientRect().top + window.scrollY;
            const adjustedTop = offsetTop - viewportHeight * 0.15;

            window.scrollTo({
                top: adjustedTop,
                behavior: 'smooth',
            });
        }
        setSelectedYear(year);
    };

    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto">
            <div className="fixed top-1/4 bg-slate-600 right-0 hidden md:block">
                {sidebarYears.map((year, index) => (
                    <PublicationSide
                        key={index}
                        year={year}
                        yearScroll={() => yearScroll(year)}
                        isSelected={year === selectedYear}
                    />
                ))}
            </div>
            <div className="text-4xl font-bold py-8 border-b-2 border-black w-full m-8 text-center">국내외 논문</div>
            <div className="flex flex-col items-center w-full px-4">
                {publicationYear.map((year, index) => (
                    <div key={index} ref={(el) => (yearRef.current[year] = el)} className="mb-8 w-full">
                        <span className="text-3xl font-semibold">{year}</span>
                        <div className="mt-4 ml-4">
                            <PublicationCard publicationItems={filterPublicationsByYear(year)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publication;
