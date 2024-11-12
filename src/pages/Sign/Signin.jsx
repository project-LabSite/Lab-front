import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Signin = ({ toggleForm }) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    userPass: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = [
      { userPass: 0, id: "none", password: "none" },
      { userPass: 1, id: "user", password: "user" },
      { userPass: 2, id: "admin", password: "admin" },
    ];

    const user = users.find(
      (u) => u.id === userInfo.id && u.password === userInfo.password
    );

    if (user && user.userPass !== 0) {
      dispatch(login(user));
      console.log("login success");
    } else {
      alert("로그인 정보가 올바르지 않습니다.");
    }
  };

  return (
    <div className="w-full max-w-md border border-blue-200 rounded-lg p-8">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
            value={userInfo.id}
            autoComplete="current-password"
            onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
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
            value={userInfo.password}
            autoComplete="current-password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
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
          className="hover:underline cursor-pointer"
          onClick={toggleForm}
        >
          회원 가입
        </div>
      </div>
    </div>
  );
};

export default Signin;
