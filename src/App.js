import "./App.css";
import {
  CustomizeColor,
  CustomizeModel,
  CustomizeSwitch,
} from "./components/customization";

import { useSelector } from "react-redux";
const selectColor = (state) => state.customization.color;
const selectSwitch = (state) => state.customization.switch;
const selectQA = (state) => state.customization.questions;

function App() {
  let color = useSelector(selectColor);
  let switchType = useSelector(selectSwitch);
  let QA = useSelector(selectQA);

  return (
    <div>
      <div>
        <CustomizeModel />
      </div>

      <div className="sectional" hidden={Object.keys(QA).length < 3}>
        <CustomizeColor />
      </div>

      <div className="sectional" hidden={color == null}>
        <CustomizeSwitch />
      </div>
    </div>
  );
}

export default App;
