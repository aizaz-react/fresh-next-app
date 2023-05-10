import React, { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import RiskIcon from '../../../public/image/RiskIcon';
import StyledContainer from '../core/styled/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@emotion/react';
import EmailModal from '../core/reusable/EmailModal';
const cardData = [
  {
    title: 'CYBERSECURIT (INFOSEC)',
    background: '#B71C1C'
  },
  {
    title: 'DATA PRIVACY (DPG)',
    background: ' #E64A19'
  },
  {
    title: 'GOVERNANCE, RISK COMPLIANCE (GRC)',
    background: '#FF8F00'
  },
  {
    title: 'Business continuity & disaster recovery (bc/dr)',
    background: '#827717'
  },
  {
    title: 'ENTERPRISE ARCHITECTURE (EA)',
    background: '#388E3C'
  },
  {
    title: 'observability (ALOPS)',
    background: '#1565C0'
  }
];
const TabCards = () => {
  const theme = useTheme();

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <TabList>
      <EmailModal open={modalOpen} handleClose={handleClose} />

      {cardData.map((item, index) => (
        <TabBoxMain key={index} sx={{ bgcolor: item.background }}>
          <Typography
            variant='display1'
            component={'h4'}
            sx={{
              fontSize: '.85rem',
              fontWeight: 500,
              wordWrap: 'break-word',
              [theme.breakpoints.down('sm')]: {
                fontSize: '.75rem',
                fontWeight: 400,
                lineHeight: '1.1rem'
              }
            }}
          >
            {item.title.toUpperCase()}
          </Typography>
          <Box
            sx={{
              backgroundColor: 'white',
              display: 'grid',
              placeItems: 'center',
              alignItems: 'center',
              width: '2.2rem',
              height: '2.2rem',
              borderRadius: '2.5rem'
            }}
          >
            <ArrowForwardIcon
              sx={{ color: '#000', fontSize: '1rem', cursor: 'pointer' }}
              onClick={handleClickOpen}
            />
          </Box>
          <IconWrapper>
            <RiskIcon size={'5.5rem'} color={'#ffffff50'} />
          </IconWrapper>
        </TabBoxMain>
      ))}
    </TabList>
  );
};

export default TabCards;

const TabBoxMain = styled(Box)(({ theme }) => ({
  borderRadius: '12px',
  height: '175px',
  minWidth: '175px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '.6rem',
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    height: '150px',
    minWidth: '150px'
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: -8,
  bottom: -15,
  zIndex: 1
}));

const TabList = styled(StyledContainer)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    '&.MuiBox-root::-webkit-scrollbar': {
      display: 'none'
    }
  }
}));
