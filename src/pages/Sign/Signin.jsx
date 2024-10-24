import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Signin = ({ toggleForm }) => {
  return (
    <div className="w-full max-w-md border border-blue-200 rounded-lg p-8">
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
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm   focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
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
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm   focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="remember_me"
            type="checkbox"
            className="h-4 w-4 text-blue-500 border-gray-100 rounded"
          />
          <label htmlFor="remember_me" className="text-sm text-gray-400">
            아이디 저장
          </label>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
      <div className="mt-4 flex justify-end text-sm text-gray-400">
        <div
          to="/signup"
          className="hover:underline  cursor-pointer"
          onClick={toggleForm}
        >
          회원 가입
        </div>
      </div>
    </div>
  );
};

export default Signin;
