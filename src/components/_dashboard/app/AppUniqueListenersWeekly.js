import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '고유 청취자 수',
    data: [2192, 2005, 2195, 2297, 2300]
  },
  {
    name: '청취자 수 랭킹',
    data: [26, 30, 17, 16, 15]
  },
];

export default function AppUniqueListenersWeekly() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      width: [4, 4],
      curve: 'smooth'
    },
    colors: ['#ccd5ae', '#fec89a'],
    labels: [
      '09/01/2021',
      '09/06/2021',
      '09/13/2021',
      '09/20/2021',
      '09/27/2021',
    ],
    dataLabels: {
      enabled: true,
    },
    xaxis: { type: 'datetime' },
    yaxis: [
      {
        title: {
          text: '고유 청취자 수',
        },
      },
      {
        opposite: true,
        title: {
          text: '청취자 수 랭킹'
        }
      }
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="주별 고유 청취자" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
