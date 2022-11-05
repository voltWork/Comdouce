import Questions from '../components/UI/Questions';
import React from "react";
import { data } from "../components/UI/data";

function TestSkills() {
  return (
    <div className="App">
      <Questions data ={data}/>
    </div>
  );
}

export default TestSkills;