import React, { useState, useCallback } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const Sign = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = useCallback(() => {
        setIsLoginForm(!isLoginForm);
    }, [isLoginForm]);

    return (
        <div className="pb-10 flex flex-col items-center w-full max-w-screen-lg mx-auto">
            <h1 className="text-4xl font-bold py-2 w-full m-8 text-center">EEPL</h1>
            {isLoginForm ? <Signin toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
        </div>
    );
};

export default Sign;
