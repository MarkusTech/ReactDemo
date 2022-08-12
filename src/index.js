import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"


// old way to render
// ReactDOM.render(
//   <h1>Hello React!</h1>,
//   document.getElementById('root')
// );


// new way to render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);