import { createSlice, configureStore } from "@reduxjs/toolkit";

import { customizationInit } from "./init/initCustomization.jsx";
import {
  changeColorAction,
  changeSwitchAction,
  changeModelAction,
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
    answerQuestion: answerQuestionAction,
  },
});

export const { changeColor, changeSwitch, changeModel, answerQuestion } =
  rootReducer.actions;

export const store = configureStore({
  reducer: rootReducer.reducer,
});

export default rootReducer.reducer;
