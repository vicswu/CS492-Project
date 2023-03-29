import { ResponsiveBar } from "@nivo/bar";
import { raceData } from "../../../lib/insightsData";

export default function CustomBarChart({ data }) {
  return (
    <ResponsiveBar
      data={raceData}
      theme={{
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#7871aa",
            fontSize: 12,
          },
        },
        axis: {
          legend: {
            text: {
              fontSize: 12,
              fill: "#e7ebc5",
            },
          },
          ticks: {
            line: {
              stroke: "#e7ebc5",
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: "#e7ebc5",
            },
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#5c50b4"
      role="application"
      ariaLabel="Nivo bar chart demo"
    />
  );
}
