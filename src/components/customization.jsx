import { useDispatch } from "react-redux";
import {
  changeColor,
  changeSwitch,
  answerQuestion,
  changeUserState,
} from "../states/store";
import { useSelector } from "react-redux";
import { ToggleButton, Button } from "react-bootstrap";
import "./customization.css";

import logo from "../media/logo.png";
import { useState } from "react";

const selectColor = (state) => state.customization.color;
const selectSwitch = (state) => state.customization.switchType;


const colors = ["black", "white"];
const switches = ["red", "brown", "blue"];
const switchDesc = {
  red: "Soft and quiet",
  brown: "Tactile (midway)",
  blue: "Vibrant and clicky",
};

export function Preparation() {
  let dispatch = useDispatch();
  return (<div>
    <h5>
      Now, make yourself comfortable.
    </h5>
    <Button
      size='lg'
      id="ready"
      className="customization"
      variant="outline-success"
      onClick={(e)=>{
        dispatch(changeUserState({
          newState: "ready"
        }))
      }}
    >
      I'm ready!
    </Button>
  </div>
  )
}

export function CustomizeColor() {
  let currentColor = useSelector(selectColor);
  let dispatch = useDispatch();
  let colorButtons = [];
  for (let colorNdx in colors) {
    let color = colors[colorNdx];
    colorButtons.push(
      <ToggleButton
        id={color}
        className={"customization"}
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

        <div>
          <img src={logo} alt={color} width="50%" />
        </div>
      </ToggleButton>
    );
  }
  return (
    <div>
      
    <div>
      <h5>Color Preference?</h5>
      {colorButtons}
    </div>
    <br />
    </div>
  );
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
        {switchDesc[switchType]}
        <div>
          <img src={logo} alt={switchType} width="50%" />
        </div>
      </ToggleButton>
    );
  }
  return (
    <div>

    <div>
      <h5>How do you like your keyboard to feel?</h5>
      {switchButtons}
    </div>
    <br />
    </div>
  );
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
          active={questionsAndAnswers[question] === answer}
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
      <div>

      <div key={question}>
        <h5>{question}</h5>
        {answerButtons}
      </div>
      <br />
      </div>
    );
    console.log(Object.keys(questionsAndAnswers).length, score);
  }
  return questionnaire;
}
