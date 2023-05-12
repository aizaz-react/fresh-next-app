import * as React from 'react';
import {
  Box,
  InputBase,
  Stack,
  Typography,
  Button,
  styled
} from '@mui/material';
import { useTheme } from '@emotion/react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Logo from '@/assets/custom/Logo';
import MainSection from '@/components/Home/MainSection';
import { PrimaryButton } from '../styled/PrimaryButton';
import Container from '../styled/Container';
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexDirection: 'row',
            gap: '1rem',
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        >
          <BackgroundLayout
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '8rem',
              flex: 0.5,

              [theme.breakpoints.down('md')]: {
                paddingBottom: '2rem',
                minWidth: '50rem'
              },
              [theme.breakpoints.down('sm')]: {
                minWidth: '30rem'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center'
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  textAlign: 'center',
                  fontFamily: '"Ubuntu", sans-serif',
                  fontSize: '6rem',
                  textAlign: 'justify',
                  fontWeight: 500,
                  lineHeight: '5rem',
                  paddingRight: '2rem',

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
                    textAlign: 'center',
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
                  lineHeight: '1.7em',
                  display: 'flex',

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '.5rem',
                    lineHeight: '1.2rem'
                  }
                }}
              >
                Learn how easily FlasHunt puts
                <br />
                you in control of your Cyber-Risk
              </Typography>
            </Box>

            <Box sx={{ marginTop: '2rem', alignSelf: 'center' }}>
              <Typography
                variant='h2'
                sx={{
                  textAlign: 'center',
                  fontFamily: '"Ubuntu", sans-serif',
                  fontSize: '3rem',
                  textAlign: 'justify',
                  fontWeight: 500,
                  lineHeight: '3.5rem',
                  paddingRight: '3.4rem',
                  [theme.breakpoints.down('lg')]: {
                    fontSize: '2rem',
                    lineHeight: '2rem'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                    textAlign: 'center',
                    gap: '0.5rem !important',
                    lineHeight: '1rem',
                    textAlign: 'left',
                    paddingRight: '2rem'
                  }
                }}
              >
                Here's what you'll
                <br />
                learn in t his demo:
              </Typography>
              <br />
              <Typography
                variant='display1'
                sx={{
                  textAlign: 'center',

                  textAlign: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  lineHeight: '1.7em',
                  display: 'flex',
                  textAlign: 'flex-start',

                  [theme.breakpoints.down('lg')]: {
                    fontSize: '1.2rem',

                    lineHeight: '1.8rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.7rem',
                    textAlign: 'center',
                    textAlign: 'left',
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
          </BackgroundLayout>

          <Stack
            direction={'column'}
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: 0.5,
              padding: '0rem 4rem',

              [theme.breakpoints.down('md')]: {
                display: 'flex',

                marginTop: '2rem',
                marginLeft: '1px !important',
                minWidth: '20rem',
                padding: '0rem 2rem'
              },
              [theme.breakpoints.down('sm')]: {
                display: 'flex',

                marginTop: '2rem',
                marginLeft: '1px !important',

                padding: '0rem 2rem'
              }
            }}
          >
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
              Let's Get Started
            </Typography>
            <Stack
              spacing={2}
              direction={'row'}
              sx={{
                [theme.breakpoints.down('md')]: {
                  display: 'flex',
                  gap: '1rem',
                  flexDirection: 'column',
                  marginLeft: '0px !important'
                },
                [theme.breakpoints.down('sm')]: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                  minWidth: '4rem',
                  gap: '1rem'
                }
              }}
            >
              <Input
                placeholder='First Name'
                sx={{
                  flex: 1,
                  [theme.breakpoints.down('sm')]: {
                    minWidth: '250px',
                    maxWidth: '250px'
                  }
                }}
              />
              <Input
                placeholder='Last Name'
                sx={{
                  flex: 1,
                  [theme.breakpoints.down('md')]: {
                    marginLeft: '0px !important',
                    [theme.breakpoints.down('sm')]: {
                      minWidth: '250px',
                      maxWidth: '250px'
                    }
                  }
                }}
              />
            </Stack>
            <Input placeholder='Work Email' />
            <Input placeholder='Company Name' />
            <Input placeholder='Comapny Size' />
            <Input placeholder='Role' />
            <PrimaryButton
              onClick={handleClose}
              variant='contained'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0.5rem 3.5rem',
                marginTop: '1rem',
                width: '100%',
                [theme.breakpoints.down('md')]: {
                  width: '100%'
                },
                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  marginTop: '2rem !important'
                }
              }}
            >
              Submit
            </PrimaryButton>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

const StackRow = styled(Stack)(({ open, theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '1rem !important'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  ...theme.typography.display1,
  border: '1px solid gray',
  borderRadius: '5px',
  padding: '0.2rem .4rem',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    minWidth: '8rem'
  }
}));
const BackgroundLayout = styled(Box)({
  backgroundImage: `url(/image/moodboard.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

  //   backgroundColor: 'red',
  //   width: '100%',
  //   height: '100px',
});
