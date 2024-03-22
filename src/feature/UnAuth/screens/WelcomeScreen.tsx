import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import Page from '../../../components/Page';
import { Box, Container, styled } from '@mui/material';

export default function WelcomeScreen() {
  return (
    <Page variant='zero'>
      <Header />
      <StyledBox >
        <StyledContainer>
          <Typography variant="h2" gutterBottom>Welcome to Your eCommerce Dashboard</Typography>
          <Typography variant="body1">Manage your products, orders, and customers with ease.</Typography>
        </StyledContainer>
      </StyledBox>
    </Page>
  );
}


const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'center',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '30vh',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));
