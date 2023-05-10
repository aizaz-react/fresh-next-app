import { Typography, Box, styled, Stack, Link } from '@mui/material';
import StyledContainer from '../core/styled/Container';
import React from 'react';
import Logo from '@/assets/custom/Logo';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  const FooterDate = [
    {
      title: 'PLATFORM',
      keyPoints: [
        `Vendor Management`,
        `Risk Management`,
        `Architecture`,
        ` Data Privacy`,
        ` Compliance`,
        ` Business Continuity`,
        ` Disaster Recovery`,
        `Incident Response`,
        `nsider Threat`,
        ` IT Supply Chain`
      ]
    },
    {
      title: 'Solution',
      keyPoints: [
        `Healthcare`,
        `Manufacturing`,
        ` Banking`,
        `  Retail`,
        `Defense`,
        `Government`,
        `Insurance`,
        `  Critical Infrastructure`
      ]
    },
    {
      title: 'Company',
      keyPoints: [
        ' Address:',
        'P.O. Box 114',
        'Hastings, MI 49058',

        'Email:',
        'info@overpower.ai'
      ]
    }
  ];
  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.footer' }}>
      <StyledContainer>
        <TopSection>
          <StackRow>
            <Logo size={'3rem'} />
            <Typography
              variant='display2'
              sx={{
                fontSize: '1.8rem',
                [theme.breakpoints.down('md')]: {
                  fontSize: '1.7rem'
                }
              }}
            >
              verpower
            </Typography>
          </StackRow>
          {FooterDate.map((item, index) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}
              key={index}
            >
              <Typography
                variant='display1'
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.5rem'
                  }
                }}
              >
                {item.title.toUpperCase()}
              </Typography>
              <Stack
                spacing={1}
                component={'div'}
                mt={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    marginTop: '2px'
                  }
                }}
              >
                {item.keyPoints.map((text, index) => (
                  <Typography
                    component={'p'}
                    variant='display3'
                    sx={{
                      fontSize: '1rem',
                      [theme.breakpoints.down('md')]: {
                        fontSize: '0.9rem',
                        lineHeight: '1rem'
                      },

                      fontWeight: 200
                    }}
                    key={index}
                  >
                    {text.toUpperCase()}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </TopSection>
        <FooterBottomSection>
          <Typography
            variant='display3'
            sx={{
              fontSize: '1rem',
              [theme.breakpoints.down('lg')]: {
                fontSize: '0.8rem'
              }
            }}
          >
            Copyright ⓒ OverPower, 2023. All rights reserved.
          </Typography>
          <Box display={{ display: 'flex', gap: '1rem', color: '#fff' }}>
            <Typography
              component={Link}
              variant='display3'
              sx={{
                color: 'secondary.contrastText',
                textDecorationColor: 'white',
                fontSize: '0.8rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.6rem'
                }
              }}
            >
              {` Website Terms`.toUpperCase()}
            </Typography>
            <Typography
              component={Link}
              variant='display3'
              sx={{
                color: 'secondary.contrastText',
                textDecorationColor: 'white',
                fontSize: '0.8rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.6rem'
                }
              }}
            >
              {`Privacy Policy`.toUpperCase()}
            </Typography>
            <Typography
              component={Link}
              variant='display3'
              sx={{
                color: 'secondary.contrastText',
                textDecorationColor: 'white',
                fontSize: '0.8rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.6rem'
                }
              }}
            >
              {`Cookies Policy`.toUpperCase()}
            </Typography>
          </Box>
        </FooterBottomSection>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '3rem 4rem',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2.5rem 3rem'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  }
}));
const FooterBottomSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '1rem 4rem',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    padding: '0.8rem 2rem',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.3em'
  }
}));

const StackRow = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'fit-content'
}));
