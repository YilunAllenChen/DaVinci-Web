import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./result.css";

const selectQAs = (state) => state.customization.questions;
const selectSwitch = (state) => state.customization.switchType;
const selectColor = (state) => state.customization.color;

export default function ResultCard() {
  let QAs = useSelector(selectQAs);
  let switchType = useSelector(selectSwitch);
  let color = useSelector(selectColor);
  let model = "standard";
  if (
    QAs["How often do you use f1, f2... f12?"] === "Not so often" &&
    QAs[
      'Imagine yourself typing the word "bedlight" on this keyboard. Which hand did you use to type letters T, G, B?'
    ] === "Left hand for all" &&
    QAs[
      'Imagine yourself typing the word "chunky". Which hand did you use to type letters Y, H, N?'
    ] === "Right hand for all"
  ) {
    model = "mini";
  }

  let modelDesc = model === "mini" ? "🔡 Compact form factor with no functional compromise" : "⌨️ Full sized function rows";
  let modelDesc2 = model === "mini" ? "🔥 Unmatched portability for minimalists" : "💡 DaVinci's proprietary ExCol layout";
  let switchDesc;
  switch(switchType){
    case "red":
        switchDesc = "🤫 Quiet and smooth typing experience"; break;
    case "brown":
        switchDesc = "🍪 Tactile feeling, balance between clicky and quiet"; break;
    case "blue":
        switchDesc = "🌟 Clicky with vibrant feedback"; break; 
    default:
        switchDesc = "Something's wrong... "; break;
  }

  return (
    <Card>
      <h6>Your Best Match...</h6>
      <h1>
        A {color} v1 {model} with {switchType} switches.
      </h1>
      <br />
      <h6>We believe this is a good match because...</h6>
      <h3>{modelDesc}</h3>
      <h3>{switchDesc}</h3>
      <h3>{modelDesc2}</h3>
    </Card>
  );
}
