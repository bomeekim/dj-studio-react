// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppReceivedSpoons,
  AppNumOfLivesCreated,
  AppNumOfHeartsReceived,
  AppNumOfNewFans,
  AppSpoonComment,
  AppUniqueListenersMonthly,
  AppUniqueListenersWeekly,
  AppUniqueListenersDaily,
  AppNumOfFollowings,
  AppRevisitDaily,
  AppRevisitWeekly,
  AppEmojiTop10,
  AppEmojiTop4,
  AppSenderTop20,
  AppComprehensiveAnalysis,

  AppTasks,
  AppOrderTimeline,
  AppTrafficBySite,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="DJ Studio">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">보미님의 월간 스푼</Typography>
          <Typography variant="h6" color="#8c8a8a">2021년 9월 한달 간의 방송 기록을 DJ님께 전달해드립니다.</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppReceivedSpoons />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNumOfLivesCreated />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNumOfNewFans />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNumOfHeartsReceived />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <AppSpoonComment />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <AppUniqueListenersMonthly />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <AppUniqueListenersWeekly />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <AppUniqueListenersDaily />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <AppNumOfFollowings />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppRevisitDaily />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppRevisitWeekly />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppEmojiTop10 />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppEmojiTop4 />
          </Grid>

          {/* divider */}

          {/*<Grid item xs={12} md={6} lg={8}>*/}
          {/*  <AppConversionRates />*/}
          {/*</Grid>*/}

          <Grid item xs={12} md={6} lg={4}>
            <AppComprehensiveAnalysis />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppSenderTop20 />
          </Grid>

          {/*<Grid item xs={12} md={6} lg={4}>*/}
          {/*  <AppOrderTimeline />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </Page>
  );
}
