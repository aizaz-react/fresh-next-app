import React, { memo } from 'react';

import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StyledContainer from '../core/styled/Container';
const cardData = [
  {
    desc: `How to model your
    organizations
    risk in 30 minutes`,
    title: 'watch now'
  },
  {
    desc: `a ciso’s guide to the
    first 100 days of cyber
    risk management`,
    title: 'Get it now'
  },

  {
    desc: `haworth global finds
    an affordable way to
    secure their sensitive
    data.`,
    title: 'learn more'
  }
];
const TeamCard = () => {
  const theme = useTheme();
  return (
    <>
      <CardList>
        {cardData.map((item, index) => (
          <TabBoxMain
            sx={{ bgcolor: 'background.default', border: '2px solid #B71C1C' }}
            key={index}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '4rem'
              }}
              spacing={3}
            >
              <Typography
                variant='display1'
                sx={{ fontSize: '1rem', fontWeight: 500 }}
              >
                {item.desc.toUpperCase()}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '1rem'
                }}
              >
                <Typography
                  variant='display3 '
                  sx={{ fontSize: '1rem', fontWeight: 500, color: '#B71C1C' }}
                >
                  {item.title.toUpperCase()}
                </Typography>

                <ArrowForwardIcon sx={{ color: '#B71C1C', fontSize: '1rem' }} />
              </Box>
            </Stack>
          </TabBoxMain>
        ))}
      </CardList>
    </>
  );
};

export default memo(TeamCard);
const TabBoxMain = styled(Box)(({ theme, selected }) => ({
  borderRadius: '12px',
  padding: '2rem 2rem',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '1.5rem 1.5rem'
  },
  [theme.breakpoints.down('lg')]: {
    padding: '1rem 0.5rem'
  }
}));

const CardList = styled(StyledContainer)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'min-content',
  gap: '0.5rem',
  overflow: 'auto',
  padding: '6.5rem 5rem',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '3.5rem 1rem',
    gap: '0.7rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '2.5rem 0.5rem',
    gridTemplateColumns: '1fr '
  }
}));
