import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '2021-08',
    data: [
      { x: 1, y: 100 },
      { x: 2, y: 25 },
      { x: 3, y: 24 },
      { x: 4, y: 24 },
    ]
  },
  {
    name: '2021-09',
    data: [
      { x: 1, y: 100 },
      { x: 2, y: 21 },
      { x: 3, y: 25 },
      { x: 4, y: 24 },
    ]
  }
];

export default function appRevisitWeekly() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      width: [4, 4],
      curve: 'smooth'
    },
    colors: ['#4c956c', '#ffc9b9'],
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'numeric',
      min: 1,
      max: 4,
      tickAmount: 1,
      labels: {
        formatter: function (value) {
          return `${value}주차`;
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
      <CardHeader title="주별 청취자 재방문 트렌드" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
