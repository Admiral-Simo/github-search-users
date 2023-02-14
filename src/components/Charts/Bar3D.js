import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    width: '100%',
    height: 400,
    dataFormat: "json",
    dataSource:
      /* see data tab */
      {
        chart: {
          caption: "Most Forked",
          yAxisName: "Forks",
          xAxisName: "Repos",
          yAxisNameFontSize: "16px",
          xAxisNameFontSize: "16px",
        },
        data: data,
      },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
