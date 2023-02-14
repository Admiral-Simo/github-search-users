import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: 400,
    height: 400,
    dataFormat: "json",
    dataSource:
      /* see data tab */
      {
        chart: {
          caption: "Languages",
          theme: "fusion",
          decimals: 0,
          pieRadius: '35%',
          
        },
        data: data,
      },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
