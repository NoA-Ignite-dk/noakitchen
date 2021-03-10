import "./marquee.scss";

import React from "react";

export default function Marquee({ text }) {
  return (
    <div className="marquee sticky" aria-readonly="true">
      <div className="track">
        <span aria-label={text}>
          {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}{" "}
          {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}{" "}
          {text}
        </span>
      </div>
    </div>
  );
}
