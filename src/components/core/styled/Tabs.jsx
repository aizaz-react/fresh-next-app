import { useTheme } from '@emotion/react';
import { Tab, Tabs, styled, tabsClasses } from '@mui/material';
import React from 'react';

const StyledTabs = ({ tabList, value, onChange }) => {
  const theme = useTheme();

  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant='scrollable'
      scrollButtons={false}
      TabIndicatorProps={{ sx: { mb: 1 } }}
      sx={{
        borderBottom: '2.5px solid #000000',
        display: 'block',
        textAlign: 'center',
        '& .MuiTabs-flexContainer': {
          gap: '1rem',
          display: 'flex',
          justifyContent: 'center'
        },
        '& .MuiTabs-scroller ': {
          width: '100%'
        },
        [`& .${tabsClasses.scrollButtons}`]: {
          '&.Mui-disabled': { opacity: 0.3 }
        },

        [theme.breakpoints.down('sm')]: {
          width: '100% '
        }
      }}
    >
      {tabList.map((tab, index) => (
        <StyledTab
          key={index}
          label={tab.name}
          value={tab.name}
          sx={{ color: 'text.primary' }}
        />
      ))}
    </Tabs>
  );
};

export default StyledTabs;

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.display1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '.8rem'
  }
}));
