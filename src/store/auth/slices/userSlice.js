import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    userPass: 0,
    id: "",
    password: "",
  },
};

const users = [
  { userPass: 0, id: "none", password: "none" },
  { userPass: 1, id: "user", password: "user" },
  { userPass: 2, id: "admin", password: "admin" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, password } = action.payload;

      const user = users.find(
        (user) => user.id === id && user.password === password
      );

      if (user && user.userPass !== 0) {
        state.isAuth = true;
        state.user = { ...user };
      } else {
        state.isAuth = false;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = initialState.user;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
