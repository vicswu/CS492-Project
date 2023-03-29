import { ResponsivePie } from "@nivo/pie";
import { genderData } from "../../../lib/insightsData";

export default function CustomPieChart({ data }) {
  return (
    <ResponsivePie
      data={genderData}
      theme={{
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#7871aa",
            fontSize: 12,
          },
        },
      }}
      margin={{ top: 40, right: 60, bottom: 60, left: 60 }}
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
      arcLinkLabelsTextColor="#e7ebc5"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#5c50b4"
    />
  );
}
