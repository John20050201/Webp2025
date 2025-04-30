// App.js
import React, { useState } from 'react';
import Button from '@mui/material/Button'; // 注意是 @mui/material 不是 @material-ui/core

const App = () => {
  const [text, setText] = useState("hello CGU!!");

  const changeText = () => {
    setText(text + "被點了");
  };

  const MultiButton = (num) => {
    const output = [];
    for (let i = 1; i <= num; i++) {
      output.push(
        <Button
          key={i}
          variant="contained"
          color="primary"
          onClick={changeText}
          style={{ margin: "5px" }}
        >
          第{i}個按鍵
        </Button>
      );
    }
    return output;
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "red", fontSize: "48px" }}>{text}</h1>
      <div>{MultiButton(10)}</div>
    </div>
  );
};

export default App;
