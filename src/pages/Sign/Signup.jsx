import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Signup = ({toggleForm}) => {
    return (
        <div className="w-full max-w-md border border-blue-200 rounded-lg p-10">
            <form className="flex flex-col space-y-4">
                <div className="relative">
                    <label htmlFor="user_id" className="sr-only">
                        아이디
                    </label>
                    <FontAwesomeIcon
                        icon={faUser}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                        id="user_id"
                        type="text"
                        placeholder="아이디를 입력하세요"
                        className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm  focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="relative">
                    <label htmlFor="user_pw" className="sr-only">
                        비밀번호
                    </label>
                    <FontAwesomeIcon
                        icon={faLock}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                        id="user_pw"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm  focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="relative">
                    <label htmlFor="user_pwcf" className="sr-only">
                        비밀번호 확인
                    </label>
                    <FontAwesomeIcon
                        icon={faLock}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                        id="user_pwcf"
                        type="password"
                        placeholder="비밀번호를 다시 입력하세요"
                        className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm  focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 mt-8 text-white rounded-md hover:bg-blue-600"
                    onClick={toggleForm}
                >
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Signup;
