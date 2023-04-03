import { ResponsiveBar } from "@nivo/bar";

export default function CustomBarChart({ data, keys }) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      valueFormat=">-.2f"
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
      margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: 'pastel1' }}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 0.2]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Data Field",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Predicted Average Income (US$)",
        legendPosition: "middle",
        legendOffset: -70,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="black"
      role="application"
      ariaLabel="Insights Bar Chart"
    />
  );
}
