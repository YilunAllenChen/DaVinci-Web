import { useDispatch } from "react-redux";
import {
  changeColor,
  changeModel,
  changeSwitch,
  answerQuestion,
} from "../states/store";
import { useSelector } from "react-redux";
import { ToggleButton } from "react-bootstrap";
import "./customization.css";

import logo from "../media/logo.png";
import { useState } from "react";

const selectColor = (state) => state.customization.color;
const selectSwitch = (state) => state.customization.switchType;
const selectModel = (state) => state.customization.model;

const colors = ["black", "white"];
const switches = ["red", "brown", "blue"];

export function CustomizeColor() {
  let currentColor = useSelector(selectColor);
  let dispatch = useDispatch();
  let colorButtons = [];
  for (let colorNdx in colors) {
    let color = colors[colorNdx];
    colorButtons.push(
      <ToggleButton
        id={color}
        className={"customization " + color}
        key={color}
        type="checkbox"
        size="lg"
        variant="outline-warning"
        active={currentColor === color}
        onClick={(e) => {
          dispatch(
            changeColor({
              color: color,
            })
          );
        }}
      >
        {color}
        <img src={logo} width="100%" />
      </ToggleButton>
    );
  }
  return <div>{colorButtons}</div>;
}

export function CustomizeSwitch() {
  let currentSwitch = useSelector(selectSwitch);
  let dispatch = useDispatch();
  let switchButtons = [];
  for (let switchNdx in switches) {
    let switchType = switches[switchNdx];
    switchButtons.push(
      <ToggleButton
        id={switchType}
        className={"customization " + switchType}
        key={switchType}
        type="checkbox"
        size="lg"
        variant="outline-warning"
        active={currentSwitch === switchType}
        onClick={(e) => {
          dispatch(
            changeSwitch({
              switchType: switchType,
            })
          );
        }}
      >
        {switchType}
        <img src={logo} width="100%" />
      </ToggleButton>
    );
  }
  return <div>{switchButtons}</div>;
}

export function CustomizeModel() {
  let questionnaire = [];
  let questions = {
    'Imagine yourself typing the word "bedlight" on this keyboard. Which hand did you use to type letters T, G, B?':
      {
        "Left hand for all": -1,
        "Anything else": 1,
      },
    'Imagine yourself typing the word "chunky". Which hand did you use to type letters Y, H, N?':
      {
        "Right hand for all": -1,
        "Anything else": 1,
      },
    "How often do you use f1, f2... f12?": {
      "Not so often": -1,
      "Can't live without it": 1,
    },
  };

  let [score, setScore] = useState(0);
  let dispatch = useDispatch();
  let qaselector = (state) => state.customization.questions;
  let questionsAndAnswers = useSelector(qaselector);

  for (let question in questions) {
    let answerButtons = [];
    let answers = questions[question];
    for (let answer in answers) {
      let target = answers[answer];
      answerButtons.push(
        <ToggleButton
          key={answer}
          className="customization"
          variant="outline-warning"
          active={questionsAndAnswers[question]===answer}
          onClick={(e) => {
            dispatch(
              answerQuestion({
                question: question,
                answer: answer,
              })
            );
            if (questionsAndAnswers[question] !== answer) {
              setScore(score + target);
            }
          }}
        >
          {answer}
        </ToggleButton>
      );
    }
    questionnaire.push(
      <div key={question}>
        <h5>{question}</h5>
        {answerButtons}
      </div>
    );
    console.log(Object.keys(questionsAndAnswers).length, score);
  }
  return questionnaire;
}
