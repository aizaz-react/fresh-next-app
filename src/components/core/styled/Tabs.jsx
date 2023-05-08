import { Tab, Tabs, styled, tabsClasses } from '@mui/material';
import React from 'react';

const StyledTabs = ({ tabList, value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant='scrollable'
      scrollButtons={false}
      TabIndicatorProps={{ sx: { mb: 1 } }}
      sx={{
        py: 1.5,
        borderBottom: '2.5px solid #000000',
        display: 'block',
        textAlign: 'center',
        '& .MuiTabs-flexContainer': {
          gap: '1rem'
        },
        [`& .${tabsClasses.scrollButtons}`]: {
          '&.Mui-disabled': { opacity: 0.3 }
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
