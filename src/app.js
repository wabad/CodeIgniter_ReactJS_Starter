import React from "react";
import ReactDOM from "react-dom";
import * as styles from './base.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
