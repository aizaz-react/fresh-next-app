import Logo from '@/assets/custom/Logo';
import { Stack, Typography, Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { PrimaryButton } from '../styled/PrimaryButton';
import Container from '../styled/Container';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Container>
      <StackRow justifyContent={'space-between'} padding={2}>
        <StackRow>
          <Logo size={'3rem'} />
          <Typography variant='display1' sx={{ fontSize: '1.2rem' }}>
            verpower
          </Typography>
        </StackRow>
        <StackRow gap={'1rem'}>
          {['Platform', 'Solutions', 'Support', 'Login'].map((name, index) => (
            <NavLink variant='display1' key={index}>
              {name}
            </NavLink>
          ))}
        </StackRow>
        <Box>
          <PrimaryButton variant='contained'>Request Demo</PrimaryButton>
        </Box>
      </StackRow>
    </Container>
  );
};

export default NavBar;

const StackRow = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center'
}));

const NavLink = styled(Typography)(() => ({
  fontSize: '1.2rem',
  fontWeight: 500
}));
