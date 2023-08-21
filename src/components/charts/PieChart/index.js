import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { pie, format, arc, select } from "d3";
import { Arc } from "./Arc";
import { Legends } from "./Legends";
import { LegendsV2 } from "./LegendsV2";

// const width = 960;

const PieChart = ({
  data,
  textField,
  dataField,
  colors,
  toolTipHtml,
  enableLegends,
}) => {
  // Increase margin top if 'enableLegends' is true
  const margin = { top: enableLegends ? 30 : 0, right: 0, bottom: 0, left: 0 };

  const ref = useRef();
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const innerHeight = height - margin.top - margin.bottom;
  const outerRadius = innerHeight / 2;

  const dValue = (d) => d[dataField];
  const tValue = (d) => d[textField];

  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  const getSvgDimensions = () => {
    const newWidth = ref.current.parentElement.offsetWidth;
    setWidth(newWidth);

    const newHeight = ref.current.parentElement.offsetHeight;
    setHeight(newHeight);
  };

  useLayoutEffect(() => {
    // detect 'width' on render
    getSvgDimensions();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgDimensions);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgDimensions);
  }, []);

  const createPie = pie().value(dValue).sort(null);

  const createArc = arc().innerRadius(0).outerRadius(outerRadius);

  const arcData = createPie(data);

  const tooltip = select("body")
    .append("div")
    .attr("class", "chart-tooltip")
    .style("opacity", 0);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "134px", height: "134px" }}>
        {enableLegends && (
          <LegendsV2 data={data} textValue={tValue} colors={colors} />
        )}
        <svg ref={ref} width={width} height={height}>
          {/* <Legends
            data={data}
            textValue={tValue}
            colors={colors}
            width={width}
          /> */}
          <g
            transform={`translate(${width / 2},${
              outerRadius + (margin.top * 3) / 4
            })`}
          >
            {arcData.map((d, i) => (
              <Arc
                key={i}
                data={d}
                index={i}
                colors={colors}
                createArc={createArc}
                format={xAxisTickFormat}
                dValue={dValue}
                tValue={tValue}
                tooltip={tooltip}
                toolTipHtml={toolTipHtml}
              />
            ))}
          </g>
        </svg>
      </div>

      <div>
        {arcData.map((d, i) => (
          <div
            key={i}
            style={{
              color: colors[i],
              margin: 0,
              paddingBottom: "21px",
              display: i > 2 ? "none" : "",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-player-record-filled"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff2825"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <p
              style={{
                paddingLeft: "3px",
                color: "#000000",
                fontWeight: "700px",
                display: "inline-flex",
                margin: 0,
              }}
            >
              {tValue(d.data)}
            </p>
            <p
              style={{
                color: "#000000",
                fontWeight: "400px",
                margin: 0,
                paddingTop: "3px",
                paddingLeft: "14px",
              }}
            >
              {dValue(d.data)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  textField: PropTypes.string.isRequired,
  dataField: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  toolTipHtml: PropTypes.func,
  enableLegends: PropTypes.bool,
};

PieChart.defaultProps = {
  data: [
    {
      brand: "Frisco",
      volume: 100,
    },
    {
      brand: "Zippy Paws",
      volume: 400,
    },
    {
      brand: "Barkbox",
      volume: 125,
    },
    {
      brand: "Outward Hound",
      volume: 380,
    },
    {
      brand: "Zanies",
      volume: 250,
    },
  ],
  colors: ["#ed4319", "#f4a347", "#a3c388", "#1a99aa", "#103c46"],
  textField: "brand",
  dataField: "volume",
  toolTipHtml: ({ data, dValue, tValue, format }) =>
    `<span><b>${tValue(data.data)}:</b> ${format(dValue(data.data))}</span>`,
  enableLegends: false,
};

export default PieChart;
