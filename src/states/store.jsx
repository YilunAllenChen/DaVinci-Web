import { createSlice, configureStore } from "@reduxjs/toolkit";

import { customizationInit } from "./init/initCustomization.jsx";
import {
  changeColorAction,
  changeSwitchAction,
  changeModelAction,
  changeUserStateAction,
  answerQuestionAction,
} from "./action/actionCustomization.jsx";

const rootReducer = createSlice({
  name: "main",
  initialState: {
    customization: customizationInit,
  },
  reducers: {
    changeColor: changeColorAction,
    changeModel: changeModelAction,
    changeSwitch: changeSwitchAction,
    changeUserState: changeUserStateAction,
    answerQuestion: answerQuestionAction,
  },
});

export const { changeColor, changeSwitch, changeModel, changeUserState, answerQuestion } =
  rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
});

export default rootReducer.reducer;
