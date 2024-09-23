import React, { useState } from 'react';
import schoolLogo from '../../assets/images/gnu-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal/Modal';
import Login from '../../pages/Login/Login';

const navItems = [
    { kr: '홈', en: 'Home', link: '/' },
    { kr: '연구분야', en: 'Research', link: '/research' },
    { kr: '소식', en: 'News', link: '/news' },
    { kr: '구성원', en: 'Member', link: '/member' },
    { kr: '발행물', en: 'Publication', link: '/publication' },
    { kr: '문의', en: 'Contact', link: '/contact' },
];

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [lang, setLang] = useState('KR');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLangSelectToggle = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    const handleLangSelect = (lang) => (e) => {
        e.stopPropagation();
        setLang(lang);
        setToggle(false);
    };

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-around py-5 bg-white shadow-md z-50">
            <div className="flex items-center">
                <div className="text-3xl font-bold px-5 border-r-2">EEPL</div>
                <a href="https://gnu.ac.kr">
                    <img src={schoolLogo} alt="gnu-logo" className="w-40" />
                </a>
            </div>
            <ul className="flex">
                {navItems.map((item, index) => (
                    <li key={index} className="mx-5 text-lg text-center" style={{ width: '120px' }}>
                        <a href={item.link}>{lang === 'KR' ? item.kr : item.en}</a>
                    </li>
                ))}
            </ul>
            <div className="flex text-lg">
                <div>
                    <button onClick={openLoginModal} className="mx-5 pr-5">
                        Sign In
                    </button>
                </div>
                <div className="relative inline-block cursor-pointer mx-5 px-5">
                    <div onClick={handleLangSelectToggle}>
                        {lang}
                        <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
                        {toggle && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 border-x-2 bg-white shadow-lg">
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
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <Login />
            </Modal>
        </div>
    );
};

export default Nav;
