import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Hello</h1>
    </React.Fragment>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
