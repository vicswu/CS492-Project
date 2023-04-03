import { ResponsivePie } from "@nivo/pie";

export default function CustomPieChart({ data }) {
  return (
    <ResponsivePie
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
      colors={{ scheme: 'pastel1' }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.35}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="black"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#7871aa",
              },
            },
          ],
        },
      ]}
    />
  );
}
