// material
import { Box, Button, Card, Stack, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function AppSpoonComment() {
  const text = '한 달 동안 고생 너무 많으셨어요! 스푼은 보미님의 DJ 활동을 지원하기 위해 열심히 노력하고 있답니다.\n' +
    '오직 초이스 DJ인 보미님만을 위한 레포트이며, 제공된 정보를 활용해 더 좋은 방송을 위한 전략을 짜보시는 건 어떨까요?\n' +
    '더 많은 청취자와 소통하며 보미님의 목소리를 들려주세요.\n' +
    'Be Alive. Be Yourself!';

  return (
    <Box sx={{ pb: 2, mt: 7 }}>
      <Stack
        alignItems="center"
        spacing={3}
        sx={{
          p: 2.5,
          pt: 5,
          borderRadius: 2,
          position: 'relative',
          bgcolor: 'grey.200'
        }}
      >
        <Box
          component="img"
          src="/static/illustrations/illustration_avatar.png"
          sx={{ width: 100, position: 'absolute', top: -50 }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h6">
            보미님을 스푼이 응원합니다 🎉
          </Typography>

          {text.split("\n").map((i, key) => {
            return <Typography variant="body2" sx={{ color: 'text.secondary' }} key={key}>{i}</Typography>
          })}
        </Box>

        <Button
          fullWidth
          href="https://material-ui.com/store/items/minimal-dashboard/"
          target="_blank"
          variant="contained"
        >
          공유하기
        </Button>
      </Stack>
    </Box>
  );
}
