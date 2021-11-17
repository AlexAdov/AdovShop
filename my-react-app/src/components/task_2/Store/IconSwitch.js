import React from "react";
import PropTypes from "prop-types";

export function IconSwitch(props) {
  return (
    <div className="switcher_box">
      <div onClick={props.onSwitch} className="material-icons">
        {props.icon}
      </div>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
