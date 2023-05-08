import React from 'react';

import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import StyledContainer from './core/styled/Container';
const cardData = [
  {
    count: '500+',
    title: 'Hours Saved',
    desc: `flashunt customers save at least
    500+ hours yearly on manual
    discovery, documentation, vendor
    due diligence and triage
    compared to non-customers`
  },
  {
    count: '20',
    title: 'Minute Deployment',
    desc: `most flashunt customers can begin
    using their cyber risk model in under
    20 minutes, compared to 90+ days
    for most non-customers`
  },

  {
    count: '60%',
    title: 'TCO Reduction',
    desc: `Flashunt reduces the tco by 60%
    eliminating expensive consulting,
    regulatory discovery, manual vendor
    management, system documentation
    and business mapping.`
  },

  {
    count: '50+',
    title: 'Compliance Standards',
    desc: `Flashunt incorporates 50+
    cybersecurity, data privacy and it
    best-practices in to 1 unified data
    model for all cyber risk
    management scenarios and use-cases.`
  }
];
const Counters = () => {
  const theme = useTheme();
  return (
    <>
      <TabList>
        {cardData.map((item, index) => (
          <TabBoxMain sx={{ bgcolor: 'background.default' }} key={index}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Typography
                variant='display2'
                sx={{
                  fontSize: '2.6rem',
                  [theme.breakpoints.down('lg')]: {
                    fontSize: '2.7rem',
                    lineHeight: '3.6rem'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '2.2rem',
                    lineHeight: '3.1rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1.7rem',
                    lineHeight: '2rem'
                  },

                  fontWeight: 700,
                  color: '#B71C1C'
                }}
              >
                {item.count}
              </Typography>
              <Typography
                variant='display2'
                sx={{
                  fontSize: '1.1rem',
                  [theme.breakpoints.down('lg')]: {
                    fontSize: '0.9rem'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '0.8rem',
                    lineHeight: '3.1rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.8rem',
                    lineHeight: '2rem'
                  },
                  fontWeight: 400,
                  lineHeight: '3rem'
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant='display1'
                sx={{
                  fontSize: '0.8rem',
                  [theme.breakpoints.down('lg')]: {
                    fontSize: '0.7rem',
                    marginTop: '1rem'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '0.6rem',
                    marginTop: '0.9rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.55rem',
                    marginTop: '0.8rem'
                  },
                  fontWeight: 400,
                  marginTop: '2rem'
                }}
              >
                {item.desc.toUpperCase()}
              </Typography>
            </Stack>
          </TabBoxMain>
        ))}
      </TabList>
    </>
  );
};

export default Counters;
const TabBoxMain = styled(Box)(({ theme, selected }) => ({
  borderRadius: '12px',
  padding: '2rem 1rem',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '1rem 1rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.6rem 0.5rem'
  }
}));

const TabList = styled(StyledContainer)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: 'min-content',
  borderRadius: '15px',
  paddingLeft: '0rem',
  paddingRight: '0rem',
  gap: '1rem',
  overflow: 'auto',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '0.7rem'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '0.9rem'
  }
  // [theme.breakpoints.down('lg')]: {
  //   gap: '0.3rem'
  // }
}));
