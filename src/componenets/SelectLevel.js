import React from "react";

function SelectLevel() {

  return (
    <div>
      <label for="difficulty">Select difficulty::</label>
      <select name="difficulty" id="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button>Start</button>
    </div>
  );
}

export default SelectLevel;
