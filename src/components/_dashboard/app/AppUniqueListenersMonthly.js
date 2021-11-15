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
    type: 'column',
    data: [8632, 6728, 5858]
  },
  {
    name: '청취자 수 랭킹',
    type: 'area',
    data: [16, 20, 30]
  },
];

export default function AppUniqueListenersMonthly() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 4] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient'] },
    colors: [ '#ffcb69', '#bee1e6' ],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    xaxis: {
      categories: ['Jul', 'Aug', 'Sep'],
    },
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
      <CardHeader title="최근 3개월 고유 청취자" subheader="지난 달 대비 22% 감소" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
