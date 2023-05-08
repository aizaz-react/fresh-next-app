import { Box, Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const FlashHuntPlateform = () => {
  const FlashHunt = [
    {
      bordercolor: '#E64A19',
      desc: `integrated vendor
        management with
        powerful contract ai.`,
      title: `Vendor
        Management`
    },
    {
      bordercolor: '#FF8F00',
      desc: `software defined
      architecture with auto-
      discovery.`,
      title: `Enterprise
      Architecture`
    },
    {
      bordercolor: '#827717',
      desc: `simple, affordable,
      compliance data privacy
      tool chain`,
      title: `
      Data
      Privacy`
    },
    {
      bordercolor: '#388E3C',
      desc: `Stay compliant with 50+
      voluntary and statutory
      regulations`,
      title: `Regulatory
      compliance`
    },
    {
      bordercolor: '#00838F',
      desc: `automated business
      process mapping with
      disaster recovery plans`,
      title: `
      Business Continuity`
    },
    {
      bordercolor: '#1565C0',
      desc: `automated incident response
      plans connected to your
      business model`,
      title: `Incident Response`
    },
    {
      bordercolor: '#3949AB',
      desc: `understand user behaviour,
        access and authentication
        across your organization`,
      title: `Insider
        Threat`
    },
    {
      bordercolor: '#6A1B9A',
      desc: `affordable, ai-backed
        observability and
        automation for powerful
        visibility`,
      title: `Security
      Telemetry`
    },
    {
      bordercolor: '#880E4F',
      desc: `full discovery of
      vulnerabilities and
      exposures in your it
      supply chain`,
      title: `Supply
      Chain`
    }
  ];
  return (
    <MainContainer sx={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
      {FlashHunt.map((item, index) => (
        <MainSection
          key={index}
          sx={{ border: ` 2px solid ${item.bordercolor}` }}
        >
          <Description variant='display1' component={'p'}>
            {item.desc.toUpperCase()}
          </Description>
          <Box>
            <Header variant='display2' component={'h3'}>
              {' '}
              {item.title}
            </Header>
            <Box
              sx={{
                display: 'flex',
                marginTop: '1rem'
              }}
            >
              <Typography
                variant='display3 '
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#B71C1C'
                }}
              >
                GET IT NOW
              </Typography>

              <ArrowForwardIcon sx={{ color: '#B71C1C', fontSize: '1rem' }} />
            </Box>
          </Box>
        </MainSection>
      ))}
    </MainContainer>
  );
};

export default FlashHuntPlateform;
const MainContainer = styled(Box)(({ theme }) => ({}));

const MainSection = styled(Stack)(() => ({
  padding: '1.5rem',
  minWidth: '200px',
  maxWidth: '300px',
  borderRadius: '15px',
  gap: '1rem',
  height: '320px',
  justifyContent: 'space-between'
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '1.9rem',
  width: 'min-content',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.5rem',
    lineHeight: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 400,
  lineHeight: '1.6rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.4rem',
    lineHeight: '1.5rem',
    fontWeight: 300
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    lineHeight: '1.3rem'
  }
}));
