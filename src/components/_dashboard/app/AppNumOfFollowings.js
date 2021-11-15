import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '신규 팔로우',
    data: [18, 16, 16, 27, 17, 10, 9, 17, 21, 17, 9, 3, 19, 16, 19, 33, 23, 15, 20, 7, 10, 23, 25, 26, 28, 24, 15, 20, 15, 30, 12]
  },
  {
    name: '언팔로우',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
];

export default function AppNumOfFollowings() {
  const chartOptions = merge(BaseOptionChart(), {
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0]
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ '#83c5be', '#bde0fe' ],
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
      <CardHeader title="일별 팬/언팬 트렌드" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
