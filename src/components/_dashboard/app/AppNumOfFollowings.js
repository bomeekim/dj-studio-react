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
    data: [557, 529, 546, 543, 585, 316, 296, 564, 664, 539, 366, 19, 407, 304, 588, 631, 597, 570, 542, 19, 287, 520, 589, 565, 558, 610, 310, 311]
  },
  {
    name: '고유 청취자 랭킹',
    data: [20, 24, 22, 20, 16, 77, 99, 18, 9, 16, 48, 3678, 42, 90, 10, 6, 9, 12, 16, 3786, 96, 19, 11, 17, 14, 8, 56, 71]
  },
];

export default function AppUniqueListenersDaily() {
  const chartOptions = merge(BaseOptionChart(), {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ '#fad2e1', '#cdb4db' ],
    labels: [
      '09/01/2021',
      '09/02/2021',
      '09/03/2021',
      '09/04/2021',
      '09/05/2021',
      '09/06/2021',
      '09/07/2021',
      '09/08/2021',
      '09/09/2021',
      '09/10/2021',
      '09/11/2021',
      '09/12/2021',
      '09/13/2021',
      '09/14/2021',
      '09/15/2021',
      '09/16/2021',
      '09/17/2021',
      '09/18/2021',
      '09/19/2021',
      '09/20/2021',
      '09/21/2021',
      '09/22/2021',
      '09/23/2021',
      '09/24/2021',
      '09/25/2021',
      '09/26/2021',
      '09/27/2021',
      '09/28/2021',
      '09/29/2021',
      '09/30/2021',
    ],
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
          text: '고유 청취자 랭킹'
        }
      }
    ],
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        format: 'yy/dd/MM',
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} 명`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="일별 고유 청취자" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
