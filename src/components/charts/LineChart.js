import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//Highcharts
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import config from "../../config";

export const chartOptions = {
  font: config.fontFamily,
  typography: {
    fontFamily: config.fontFamily,
    fontSize: "14px",
    lineHeight: "22px",
    color: "#555555",
  },
  colors: ["#f4a347", "#f4a347", "#a3c388", "#1a99aa", "#103c46", "#88ba01"],
  colorsV2: ["#0D4C92", "#59C1BD", "#7EC384", "#6AA5A9"],
};

export const LineChartOptions = {
  chart: {
    type: "spline",
    style: { ...chartOptions.typography },
  },
  colors: chartOptions.colorsV2,
  credits: {
    enabled: false,
  },

  title: {
    text: "U.S Solar Employment Growth",
    align: "left",
  },

  subtitle: {
    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    align: "left",
  },

  yAxis: {
    title: {
      text: undefined,
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: Week 1 to Week 5",
    },
    categories: ["week 1", "week 2", "week 3", "week 4", "week 5"],
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    marginTop: "-20px",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 0,
    },
  },

  series: [
    {
      name: "Installation & Developers",
      data: [100, 400, 125, 340, 420],
    },
    {
      name: "Manufacturing",
      data: [200, 420, 175, 320, 400],
    },
    {
      name: "Sales & Distribution",
      data: [300, 400, 200, 380, 450],
    },
  ],

  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          width: 921,
        },
        chartOptions: {
          legend: {
            position: "absolute",
            layout: "horizontal",
            align: "right",
            verticalAlign: "top",
          },
        },
      },
    ],
  },
};

const LineChart = () => {
  return (
    <div style={{ borderRadius: "20px", borderColor: "#FFFFFF" }}>
      <HighchartsReact highcharts={Highcharts} options={LineChartOptions} />
    </div>
  );
};

export default LineChart;
