import "./menuitem.scss";

import React from "react";
import css from "classnames";

export default function MenuItem({
  description = "yumm",
  emoji = "🍔",
  index = 0,
  week = "thisweek",
  weekday = "Monday",
  today,
  ...props
}) {
  const animation = today === weekday ? `fadeInUp 2s forwards, fadeInBG 2s forwards` : "fadeInUp 2s forwards";
  const animationDelay = today === weekday ? `${0.15 + (.1 * index)}s, ${1 + (.1 * index)}s` : `${0.15 + (.1 * index)}s`;
  return (
    <div className="menuitem-wrapper">
      <div
        className={css("menuitem", { "menuitem--active": today === weekday })}
        style={{
          animation,
          animationFillMode: "both",
          animationDelay
        }}
      >
        <div className="emoji">
          <span>{emoji}</span>
        </div>
        <div className="menuitem--right">
          <div className="weekday">
            <p>{weekday}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
