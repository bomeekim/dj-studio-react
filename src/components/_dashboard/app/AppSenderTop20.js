import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
// utils
import { mockImgAvatar, mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    // title: faker.name.title(),
    // description: faker.lorem.paragraphs(),
    // image: mockImgAvatar(setIndex),
    // postedAt: faker.date.soon()

    title: `${faker.name.firstName()} ${faker.name.lastName()}`,
    image: mockImgAvatar(setIndex),
    amount: faker.finance.amount()
  };
});

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, amount } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 250 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        {/*<Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>*/}
        {/*  {description}*/}
        {/*</Typography>*/}
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fShortenNumber(amount)}
      </Typography>
    </Stack>
  );
}

export default function AppSenderTop20() {
  return (
    <Card>
      <CardHeader title="스푼을 선물한 팬 Top 20" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
