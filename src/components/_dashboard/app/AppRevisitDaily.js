import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "2021-08",
    data: [
      { x: 1, y: 100 },
      { x: 4, y: 23.63 },
      { x: 12, y: 21.61 },
      { x: 15, y: 18.73 },
      { x: 20, y: 19.47 },
      { x: 25, y: 30.1 }
    ]
  },
  {
    name: "2021-09",
    data: [
      { x: 1, y: 100 },
      { x: 7, y: 30.16 },
      { x: 15, y: 21.33 },
      { x: 18, y: 15.8 },
      { x: 23, y: 25.67 },
      { x: 29, y: 33.11 }
    ]
  }
];

export default function appRevisitWeekly() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      width: [4, 4],
      curve: 'smooth'
    },
    colors: ['#4ecdc4', '#ffe66d'],
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'numeric',
      min: 1,
      max: 30,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return `${Math.ceil(value)}일`;
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `${value}%`;
        }
      },
      min: 0,
      max: 100,
    },
    annotations: {
      yaxis: [
        {
          y: 40,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396'
            },
            text: 'Goal'
          }
        }
      ]
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
  });

  return (
    <Card>
      <CardHeader title="일별 청취자 재방문 트렌드" subheader="지난 달 대비" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
