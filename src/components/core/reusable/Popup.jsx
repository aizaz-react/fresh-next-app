import * as React from 'react';
import {
  Box,
  InputBase,
  Stack,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Logo from '@/assets/custom/Logo';
import { PrimaryButton } from '../styled/PrimaryButton';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function Popup(props) {
  const { open, handleClose } = props;
  const theme = useTheme();
  return (
    <>
      <Dialog
        fullScreen
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <StackRow>
              <Logo />
              <Typography
                variant='display2'
                sx={{
                  fontSize: '1.2rem',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '0.9rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.9rem'
                  }
                }}
              >
                verPower
              </Typography>
            </StackRow>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ flex: 1, display: 'flex' }}>
            <BackgroundLayout>
              <RightText display={'flex'} />
            </BackgroundLayout>
            <Box
              sx={{
                flex: 1
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant='h2'
                  sx={{
                    fontSize: '6rem',
                    fontWeight: 500,
                    lineHeight: '5rem',
                    [theme.breakpoints.down('lg')]: {
                      fontSize: '3rem',
                      lineHeight: '3rem'
                    },
                    [theme.breakpoints.down('md')]: {
                      fontSize: '3rem',
                      lineHeight: '3rem'
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1.2rem',
                      lineHeight: '1.2rem',
                      lineBreak: 'normal',
                      textAlign: 'left'
                    }
                  }}
                >
                  Join a 15-Minute Demo!
                </Typography>
                <br />
                <Typography
                  variant='display1'
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: '1.4rem',
                    display: 'flex',

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '0.9rem',
                      marginTop: '.5rem',
                      lineHeight: '1.2rem'
                    }
                  }}
                >
                  Learn how easily FlasHunt puts you in control of your
                  Cyber-Risk
                </Typography>
              </Box>
              <Form>
                <Typography
                  variant='display1'
                  sx={{
                    fontSize: '2.7rem',
                    textAlign: 'center',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '2rem',
                      textAlign: 'center'
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1.3rem',
                      textAlign: 'center'
                    }
                  }}
                >
                  Let&apos;s Get Started
                </Typography>
                <Box
                  display={'flex'}
                  direction={'row'}
                  gap={'1rem'}
                  flexWrap={'wrap'}
                >
                  <Input placeholder='First Name' />
                  <Input placeholder='Last Name' />
                </Box>
                <Input placeholder='Work Email' />
                <Input placeholder='Company Name' />
                <Input placeholder='Company Size' />
                <PrimaryButton variant='contained' sx={{ alignSelf: 'center' }}>
                  Get Started
                </PrimaryButton>
              </Form>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

const RightText = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: props.display,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        maxWidth: '700px'
      }}
    >
      <Typography
        variant='h2'
        sx={{
          fontSize: '6rem',
          fontWeight: 500,
          lineHeight: '5rem',
          [theme.breakpoints.down('lg')]: {
            fontSize: '3rem',
            lineHeight: '3rem'
          },
          [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
            lineHeight: '3rem'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            lineHeight: '1.2rem',
            lineBreak: 'normal',
            textAlign: 'left'
          }
        }}
      >
        Join a
        <br />
        15-Minute
        <br />
        Demo!
      </Typography>
      <br />
      <Typography
        variant='display1'
        sx={{
          fontSize: '1.4rem',
          fontWeight: 400,
          lineHeight: '1.4rem',
          display: 'flex',

          [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            marginTop: '.5rem',
            lineHeight: '1.2rem'
          }
        }}
      >
        Learn how easily FlasHunt puts
        <br />
        you in control of your Cyber-Risk
      </Typography>

      <Typography
        variant='h2'
        sx={{
          fontSize: '3rem',
          fontWeight: 500,
          lineHeight: '3.5rem',
          paddingRight: '3.4rem',
          marginTop: '2rem',
          [theme.breakpoints.down('lg')]: {
            fontSize: '2rem',
            lineHeight: '2rem'
          },
          [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            gap: '0.5rem !important',
            lineHeight: '1rem',
            paddingRight: '2rem'
          }
        }}
      >
        Here&apos;s what you&apos;ll
        <br />
        learn in t his demo:
      </Typography>
      <br />
      <Typography
        variant='display1'
        sx={{
          fontSize: '1.4rem',
          fontWeight: 400,
          lineHeight: '1.7em',
          [theme.breakpoints.down('lg')]: {
            fontSize: '1.2rem',
            lineHeight: '1.8rem'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
            lineHeight: '1.2rem'
          }
        }}
      >
        Setup your Enterprise Risk Model
        <br />
        Perform Vendor and System Discovery
        <br />
        ISO-31000 Risk Triage and Mapping
      </Typography>
    </Box>
  );
};

const StackRow = styled(Stack)(({ open, theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '1rem !important'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  width: '100%',
  flex: 1,
  minWidth: '200px',
  border: '1px solid gray',
  padding: '.2rem .4rem',
  borderRadius: '5px'
}));

const BackgroundLayout = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/image/moodboard.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '3rem',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const Form = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  component: 'form',
  maxWidth: '600px',
  padding: '3rem 2rem',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto'
  }
}));
