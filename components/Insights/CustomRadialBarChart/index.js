import { ResponsiveRadialBar } from "@nivo/radial-bar";

export default function CustomRadialBarChart({ data }) {
  return (
    <ResponsiveRadialBar
      data={data}
      theme={{
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#7871aa",
            fontSize: 12,
          },
        },
      }}
      colors={{ scheme: "pastel1" }}
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 180, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "left-to-right",
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#333",
          symbolSize: 18,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
