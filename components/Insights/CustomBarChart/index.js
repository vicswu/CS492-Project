import { ResponsiveBar } from "@nivo/bar";

export default function CustomBarChart({ data, keys }) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      theme={{
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#7871aa",
            fontSize: 12,
          },
        },
      }}
      indexBy="type"
      margin={{ top: 50, right: 220, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "pastel1" }}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 0.2]],
      }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendPosition: "middle",
        legendOffset: -70,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="black"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Insights Bar Chart"
    />
  );
}
