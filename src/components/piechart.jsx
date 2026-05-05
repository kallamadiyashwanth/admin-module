import React, {useState} from "react";
import '../styles/analytics.css';
import { AgCharts } from "ag-charts-react";
import { LegendModule, ModuleRegistry, PieSeriesModule, } from "ag-charts-community";

ModuleRegistry.registerModules([LegendModule, PieSeriesModule]);

const pieData = [
    { title: "Total Users", value: 1234 },
    { title: "Active Users", value: 567 },
    { title: "Enrolled Users", value: 756 },
    { title: "Course completions", value: 432 },
];

const PieChart = () => {
  const [options, setOptions] = useState({
    data: pieData,
    height: 400,
    title: {
      text: "User Analytics",
      fontSize: 18,
      fontWeight: "bold",
    },
    series: [
      {
        type: "pie",
        angleKey: "value",
        calloutLabelKey: "title",
        sectorLabelKey: "value",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
        },
      }
    ],
    legend: {
        enabled: true,
        position: "right",
        spacing: 5,
    }
  });

  return(
    <div className="pie-chart-container">
      <AgCharts options={options} />
    </div>
  );
};

export default PieChart;
        