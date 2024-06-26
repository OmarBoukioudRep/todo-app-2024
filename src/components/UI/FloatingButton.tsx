import { useState } from "react";
import { Link } from 'react-router-dom';

import "./FloatingButton.scss";

const FloatingButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };
  const logoutHandler = () => {
    {props.handleCallback(false)}
  };

  return (
    <div className="buttonContainer" onBlur={setUnchecked}>
      <input
        type="checkbox"
        id="toggle"
        className={checked ? "checked" : ""}
        onClick={handleClick}
      />
      <label className="button" htmlFor="toggle"></label>
      <nav className="nav">
        <ul>
          <span>Todo List</span>
          <span><Link to={`/about`} className="text-dark"> About </Link></span>
          <span onClick={logoutHandler}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
