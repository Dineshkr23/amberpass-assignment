import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import "../assets/rightPane.css";
import { Chart } from "react-google-charts";
import useWindowSize from "../hooks/useWindowSize";

export const BalanceAreaChart = () => {
  const size = useWindowSize();
  const [key, setkey] = useState(false);
  const [data, setData] = useState([
   
    ["Month", "value"],
    ["Jan", 2],
    ["Feb", 1],
    ["March", 3],
    ["April", 2],
    ["May", 5],
    ["June", 3],
    ["July", 4],
    ["Aug", 1],
    ["Sept", 5],
    ["Oct", 4],
    ["Nov", 2],
    ["Dec", 5],
    ["Jan 2022",2]
  ]);

  useEffect(() => {
    setkey((prevKey) => !prevKey);
  }, [size.width]);

  const options = {
    width : "100%",
    height: "17.3rem",
    legend: "none",
    hAxis: {
      textPosition: "none",
      gridlines: {
        color: "transparent",
      },
      baseline: {
        color: "transparent",
      },
    },
    vAxis: {
      textPosition: "none",
      gridlines: {
        color: "transparent",
      },
    },
    chartArea: {
      width: "100%",
      height: "80%",
      bottom: 0,
      right: 0,
    },
  };
  return (
    <Paper className="areaPaper">
      <Chart key={key} chartType="AreaChart" data={data} options={options} className="areaGraph">
      </Chart>
    </Paper>
  );
};
