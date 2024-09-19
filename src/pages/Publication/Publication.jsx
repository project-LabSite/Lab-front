import { useRef } from 'react';
import PublicationCard from '../../components/Card/PublicationCard';
import PublicationSide from '../../components/Common/PublicationSide';

const publicationItems = [
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2024',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2024',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2024',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2024',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2023',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2023',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2023',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2023',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2022',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2022',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2022',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2022',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2021',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2021',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2021',
    },
    {
        Author: 'Park, C. H.',
        Authors: ', Lee, S. Y., Hwang, D. S., Shin, D. W.,Cho, D. H., Lee, K. H., ... & Lee, Y. M. ',
        Year: '(2016)',
        Title: 'Nanocrack-regulated self-humidifying membranes.',
        Journal: 'Nature,',
        Volume: '532(7600)',
        Page: '480-483',
        RegistrationYear: '2021',
    },
];

const filterPublicationsByYear = (year) => {
    return publicationItems.filter((item) => item.RegistrationYear === year);
};

const getYears = () => {
    const years = publicationItems.map((item) => item.RegistrationYear);
    return [...new Set(years)].sort((a, b) => b - a);
};

const publicationYear = getYears();

const Publication = () => {
    const yearRef = useRef({});

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
    };
    return (
        <div className="pt-28 pb-10 flex flex-col items-center w-4/5 max-w-screen-lg mx-auto">
            {/* 사이드바 */}
            <div className="fixed top-1/4 bg-slate-600" style={{ right: '10%' }}>
                {publicationYear.map((year, index) => (
                    <PublicationSide key={index} year={year} yearScroll={() => yearScroll(year)} />
                ))}
            </div>
            {/* 메인 */}
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
