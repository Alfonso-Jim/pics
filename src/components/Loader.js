import React from "react";

const Loader = (props) => {
  return (
    <div className="ui placeholder segment">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.msg}</div>
      </div>
    </div>
  );
};

export default Loader;
