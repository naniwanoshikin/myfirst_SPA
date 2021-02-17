import React from 'react';
import { Radar } from 'react-chartjs-2';

const langage = ['Html Css', 'Sass', 'JS', 'Bootstrap', 'React', 'git',];
// 値
const skills = [
  { data: [55, 30, 30, 10, 20, 5,], label: "2020.09", bgc: "rgba(246, 255, 0, 0.1)", bc: "yellow", bw: 1 },
  { data: [60, 35, 40, 20, 30, 10,], label: "2020.10", bgc: "rgba(255, 70, 0, 0.2)", bc: "orange", bw: 1 },
  { data: [65, 50, 55, 20, 30, 25,], label: "2020.11", bgc: "rgba(0, 255, 10, 0.2)", bc: "green", bw: 1 },
  { data: [70, 55, 60, 35, 40, 35,], label: "2020.12", bgc: "rgba(255, 0, 0, 0.2)", bc: "red", bw: 1 },
  { data: [75, 55, 65, 40, 45, 45,], label: "2021.01", bgc: "rgba(157, 204, 224, 0.3)", bc: "bluesky", bw: 1 },
  { data: [90, 85, 90, 80, 70, 80,], label: "2021.09", bgc: "rgba(0, 0, 255, 0)", bc: "blue", bw: 0.5 },
]

export const Graph = () => {
  const data = {
    labels: langage,
    datasets: [
      {
        label: skills[0].label,
        data: skills[0].data,
        backgroundColor: skills[0].bgc,
        borderColor: skills[0].bc,
        borderWidth: skills[0].bw,
        pointRadius: 0,
      },
      {
        label: skills[1].label,
        data: skills[1].data,
        backgroundColor: skills[1].bgc,
        borderColor: skills[1].bc,
        borderWidth: skills[1].bw,
        pointRadius: 0,
      },
      {
        label: skills[2].label,
        data: skills[2].data,
        backgroundColor: skills[2].bgc,
        borderColor: skills[2].bc,
        borderWidth: skills[2].bw,
        pointRadius: 0,
      },
      {
        label: skills[3].label,
        data: skills[3].data,
        backgroundColor: skills[3].bgc,
        borderColor: skills[3].bc,
        borderWidth: skills[3].bw,
        pointRadius: 0,
      },
      {
        label: skills[4].label,
        data: skills[4].data,
        backgroundColor: skills[4].bgc,
        borderColor: skills[4].bc,
        borderWidth: skills[4].bw,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    scale: {
      pointLabels: {
        fontSize: 16,
        fontColor: 'purple',
      },
      // yAxes: [{
      ticks: {
        // min: 0,
        beginAtZero: true,
        // max: 100,
        suggestedmax: 100,
        stepSize: 20,
        // fontSize: 30,
        callback: function (value, index, values) {
          return value + '-';
        }
      }
      // }]
    },
    title: {
      display: false,
      text: '言語',
      fontSize: 16,
    },
    animation: {
      // duration: 0
    },
    legend: {
      // display: false
      position: 'bottom',
      labels: {
        fontSize: 18,
      }
    },
    maintainAspectRatio: false,
    // responsive: false,
  };
  return (
    <div className="chart py-5">
      <Radar
        data={data}
        options={options}
        // width={300}
        height={350}
      />
    </div>
  );
};
