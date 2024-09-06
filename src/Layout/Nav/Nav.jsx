import React, { useState, useEffect } from 'react';
import schoolLogo from '../../assets/images/gnu-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const navItems = {
    KR: [
        { list: '홈' },
        { list: '연구분야' },
        { list: '소식' },
        { list: '구성원' },
        { list: '발행물' },
        { list: '문의' },
    ],
    EN: [
        { list: 'Home' },
        { list: 'Research' },
        { list: 'News' },
        { list: 'Member' },
        { list: 'Publication' },
        { list: 'Contact' },
    ],
};

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [lang, setLang] = useState('KR');

    const langSelectToggle = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    const langSelect = (lang) => (e) => {
        e.stopPropagation();
        setLang(lang);
        setToggle(false);
    };

    useEffect(() => {
        console.log(toggle);
    }, [toggle]);

    return (
        <div className="flex items-center justify-around py-5">
            <div className="flex items-center">
                <div className="text-3xl font-bold px-5 border-r-2">EEPL</div>
                <a href="https://gnu.ac.kr">
                    <img src={schoolLogo} alt="gnu-logo" className="w-40" />
                </a>
            </div>
            <ul className="flex">
                {navItems[lang].map((item, index) => (
                    <li key={index} className="mx-5 text-lg text-center" style={{ width: '120px' }}>
                        <a href={`#${item.list}`} className="">
                            {item.list}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex text-lg">
                <div>
                    <a href="#singin" className="mx-5 pr-5">
                        Sign In
                    </a>
                </div>
                <div className="relative inline-block cursor-pointer mx-5 px-5">
                    <div onClick={langSelectToggle}>
                        {lang}
                        <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
                        {toggle && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 border-x-2 bg-white shadow-lg">
                                <div className="px-7 py-2 hover:bg-gray-100 cursor-pointer" onClick={langSelect('KR')}>
                                    KR
                                </div>
                                <div className="px-7 py-2 hover:bg-gray-100 cursor-pointer" onClick={langSelect('EN')}>
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
