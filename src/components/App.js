import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";
import Loading from "./Loading/Loading";

let url = process.env.REACT_APP_GOOGLE_SHEET_URL;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //get today's day
  let today = new Date(Date.now()).toLocaleDateString("en-us", {
    weekday: "long",
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let response = await axios(url);
      let dayArray = await response.data.feed.entry.filter(function (day) {
        return day.gsx$week.$t === "thisweek";
      });

      let thisWeek = await dayArray.map((day) => ({
        week: day.gsx$week.$t,
        emoji: day.gsx$emoji.$t,
        day: day.gsx$day.$t,
        description: day.gsx$description.$t,
      }));

      setData(thisWeek);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="appwrapper">
      <Loading loading={loading} />
      {!loading && (
        <>
          <Marquee text="This Week"></Marquee>
          <Menu loading={loading} today={today} data={data}></Menu>
        </>
      )}
    </div>
  );
}

export default App;
