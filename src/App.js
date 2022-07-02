import "./App.css";
import {
  CustomizeColor,
  CustomizeModel,
  CustomizeSwitch,
  Preparation,
} from "./components/customization";

import { useSelector } from "react-redux";
import ResultCard from "./components/result";
const selectColor = (state) => state.customization.color;
const selectSwitch = (state) => state.customization.switchType;
const selectQA = (state) => state.customization.questions;
const selectUserState = (state) => state.userState;

function App() {
  let color = useSelector(selectColor);
  let switchType = useSelector(selectSwitch);
  let QA = useSelector(selectQA);
  let userState = useSelector(selectUserState);

  return (
    <div>

      <div>
        <Preparation />
      </div>

      <div className="sectional" hidden={userState !== "ready"}>
        <br />
        <CustomizeModel />
      </div>

      <div className="sectional" hidden={Object.keys(QA).length < 3}>
        <CustomizeColor />
      </div>

      <div className="sectional" hidden={color == null}>
        <CustomizeSwitch />
      </div>


      <div className="sectional" hidden={switchType == null}>
        <br></br>
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
