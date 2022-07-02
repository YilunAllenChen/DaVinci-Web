export function changeColorAction(state, action) {
  let { color } = action.payload;
  state.customization.color = color;
  console.log("Color is now %s", color);
}

export function changeModelAction(state, action) {
  let { model } = action.payload;
  state.customization.model = model;
  console.log("Model is now %s", model);
}

export function changeSwitchAction(state, action) {
  let { switchType } = action.payload;
  state.customization.switchType = switchType;
  console.log("Switch type is now %s", switchType);
}

export function answerQuestionAction(state, action) {
  let { question, answer } = action.payload;
  state.customization.questions[question] = answer;
  console.log('Answer to question "%s" is now "%s"', question, answer);
}

export function changeUserStateAction(state, action) {
  let {newState} = action.payload;
  state.userState = newState;
  console.log("User state is now %s", newState);
}