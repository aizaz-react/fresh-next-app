import React, { memo, useState } from 'react';

import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StyledContainer from '../core/styled/Container';
import DownloadIcon from '@/assets/custom/DownlodIcon';
import SearchIcon from '@/assets/custom/SearchIcon';
import YoutubeIcon from '@/assets/custom/YoutubeIcon';
import EmailModal from '../core/reusable/EmailModal';
import Popup from '../core/reusable/Popup';

const cardData = [
  {
    icon: <YoutubeIcon size='5rem' />,
    desc: `How to model your
    organizations
    risk in 30 minutes`,
    title: 'watch now'
  },
  {
    icon: <SearchIcon size='5rem' />,
    desc: `a ciso’s guide to the
    first 100 days of cyber
    risk management`,
    title: 'Get it now'
  },

  {
    icon: <DownloadIcon size='5rem' />,

    desc: `haworth global finds
    an affordable way to
    secure their sensitive
    data.`,
    title: 'learn more'
  }
];
const TeamCard = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <CardList>
        <Popup open={modalOpen} handleClose={handleClose} />
        {cardData.map((item, index) => (
          <TabBoxMain
            sx={{ bgcolor: 'background.default', border: '2px solid #B71C1C' }}
            key={index}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '1rem'
              }}
              spacing={3}
            >
              <Typography
                sx={{
                  marginLeft: '5rem',

                  [theme.breakpoints.down('md')]: {
                    marginLeft: '2rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    marginLeft: '1rem'
                  }
                }}
                component={'h5'}
              >
                {item.icon}
              </Typography>
              <Typography
                variant='display1'
                sx={{
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.7rem'
                  }
                }}
              >
                {item.desc}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '1rem',
                  alignItems: 'center',
                  [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    justifyContent: 'center'
                  }
                }}
              >
                <Typography
                  variant='display3'
                  sx={{
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#B71C1C',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '1.2rem'
                    }
                  }}
                >
                  {item.title.toUpperCase()}
                </Typography>

                <ArrowForwardIcon
                  sx={{ color: '#B71C1C', fontSize: '1rem', cursor: 'pointer' }}
                  onClick={handleClickOpen}
                />
              </Box>
            </Stack>
          </TabBoxMain>
        ))}
      </CardList>
    </>
  );
};

export default memo(TeamCard);
const TabBoxMain = styled(Box)(({ theme }) => ({
  borderRadius: '12px',
  padding: '2rem 2rem',
  overflow: 'hidden',
  flex: '1 1 250px',
  [theme.breakpoints.down('lg')]: {
    padding: '1.5rem 1.5rem'
  },
  [theme.breakpoints.down('lg')]: {
    padding: '1rem 1rem'
  }
}));

const CardList = styled(StyledContainer)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  overflow: 'auto',
  padding: '2rem 5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem'
  }
}));
