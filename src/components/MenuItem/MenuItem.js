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
  const animationDelay = `${0.15 + 0.1 * index}s`;
  return (
    <div
      className={css("menuitem-wrapper", {
        "menuitem-wrapper--active": today === weekday,
      })}
      aria-label={weekday}
    >
      <div className="menuitem" style={{ animationDelay }}>
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
