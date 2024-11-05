import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Signup = ({ toggleForm }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  return (
    <div className="w-full max-w-md border border-blue-200 rounded-lg p-10">
      <form className="flex flex-col space-y-4">
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            이름
          </label>
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            id="name"
            type="text"
            placeholder="이름을 입력하세요"
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="position" className="sr-only">
            직위
          </label>
          <FontAwesomeIcon
            icon={faBriefcase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <select
            id="position"
            className={`pl-10 pr-4 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 appearance-none ${
              selected ? "text-black" : "text-gray-400"
            }`}
            required
            defaultValue=""
            onChange={handleChange}
            style={{ backgroundImage: "none" }}
          >
            <option value="" disabled>
              직위를 선택하세요
            </option>
            <option value="professor" className="text-black">
              교수
            </option>
            <option value="associate_professor" className="text-black">
              부교수
            </option>
            <option value="assistant_professor" className="text-black">
              조교수
            </option>
            <option value="postdoc" className="text-black">
              박사후연구원
            </option>
            <option value="phd_student" className="text-black">
              박사과정
            </option>
            <option value="masters_student" className="text-black">
              석사과정
            </option>
            <option value="undergraduate_researcher" className="text-black">
              학부연구생
            </option>
          </select>
        </div>

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
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
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
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
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
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="user_email" className="sr-only">
            이메일
          </label>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            id="user_email"
            type="email"
            placeholder="이메일을 입력하세요"
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="user_phone" className="sr-only">
            핸드폰 번호
          </label>
          <FontAwesomeIcon
            icon={faPhone}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            id="user_phone"
            type="tel"
            placeholder="핸드폰 번호를 입력하세요"
            className="pl-10 p-2 w-full border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={toggleForm}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
