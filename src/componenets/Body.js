import React, { useState } from "react";

function Body() {
  const [input, setInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        autoFocus
        placeholder="Type the words here..."
      />
    </div>
  );
}

export default Body;
