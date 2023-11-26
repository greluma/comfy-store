import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const themes = {
  night: "night",
  autumn: "autumn",
};

const changeDataTheme = (theme) =>
  (document.documentElement.dataset.theme = theme);

const getThemeFromLocalStore = () => {
  const theme = localStorage.getItem("theme") || themes.night;
  changeDataTheme(theme);
  return theme;
};

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const { username } = action.payload;
      state.user = { userName: username, theme: getThemeFromLocalStore() };
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    logOutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { night, autumn } = themes;
      const theme = localStorage.getItem("theme") === night ? autumn : night;
      localStorage.setItem("theme", theme);
      changeDataTheme(theme);
      if (state.user) {
        state.user.theme = theme;
      }
    },
  },
});

export const { logInUser, logOutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
