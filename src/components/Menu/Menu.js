import React from "react";
import css from "classnames";

import "./menu.scss";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu(props) {
  return (
    <div className={css("menuwrapper", { fadeInUp: !props.loading })}>
      <ul>
        {props.data.map((i, idx) => (
          <li key={i.day}>
            <MenuItem
              index={idx}
              description={i.description}
              emoji={i.emoji}
              week={i.week}
              weekday={i.day}
              today={props.today}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
