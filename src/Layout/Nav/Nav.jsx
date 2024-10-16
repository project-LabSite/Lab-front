import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/images/gnu-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { kr: '홈', en: 'Home', link: '/' },
    { kr: '연구분야', en: 'Research', link: '/research' },
    { kr: '소식', en: 'News', link: '/news' },
    { kr: '구성원', en: 'Member', link: '/member' },
    { kr: '발행물', en: 'Publication', link: '/publication' },
    { kr: '문의', en: 'Contact', link: '/contact' },
];

const Nav = ({ openLoginModal }) => {
    const [toggle, setToggle] = useState(false);
    const [lang, setLang] = useState('KR');

    const handleLangSelectToggle = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    const handleLangSelect = (lang) => (e) => {
        e.stopPropagation();
        setLang(lang);
        setToggle(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-around py-5 bg-white shadow-md z-50">
            <div className="flex items-center">
                <div className="text-3xl font-bold px-5 border-r-2">EEPL</div>
                <a href="https://gnu.ac.kr">
                    <img src={schoolLogo} alt="gnu-logo" className="w-32 min-w-32" />
                </a>
            </div>
            <ul className="flex flex-wrap justify-center">
                {navItems.map((item, index) => (
                    <li key={index} className="mx-5 text-lg text-center" style={{ width: '120px' }}>
                        <Link to={item.link}>{lang === 'KR' ? item.kr : item.en}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center text-lg">
                <div>
                    <button onClick={openLoginModal} className="mx-5 text-center min-w-[100px] flex-shrink-0">
                        Sign In
                    </button>
                </div>
                <div className="relative inline-block cursor-pointer mx-5 px-5  min-w-[100px] flex-shrink-0">
                    <div onClick={handleLangSelectToggle}>
                        {lang}
                        <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
                        {toggle && (
                            <div className="absolute top-full transform -translate-x-7 mt-2 border-x-2 bg-white shadow-lg">
                                <div
                                    className="px-7 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={handleLangSelect('KR')}
                                >
                                    KR
                                </div>
                                <div
                                    className="px-7 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={handleLangSelect('EN')}
                                >
                                    EN
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
