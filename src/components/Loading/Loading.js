import React from "react";
import css from "classnames";

import "./loading.scss";

export default function Loading({ loading }) {
  return (
    <div className={css("loading", { fadeOut: !loading })}>
      <div className="icon" />
    </div>
  );
}
