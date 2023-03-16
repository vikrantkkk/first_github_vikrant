import React, { useState } from "react";

function TextAreaWithLimit() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= 100) {
      setValue(inputValue);
    }
  }

  return (
    <div>
      <textarea value={value} onChange={handleChange} style={{display:"flex", justifyContent:"center",alignItems:"center"}}/>
      <p>Characters left: {100 - value.length}</p>
    </div>
  );
}

export default TextAreaWithLimit;
