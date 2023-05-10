import Logo from '@/assets/custom/Logo';
import {
  Stack,
  Typography,
  Box,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { PrimaryButton } from '../styled/PrimaryButton';
import Container from '../styled/Container';
import Link from 'next/link';
import EmailModal from './EmailModal';

const navlinks = [
  { name: 'Platform', path: '', id: 1 },
  { name: 'Solutions', path: '', id: 1 },
  { name: 'Support', path: '', id: 1 },
  { name: 'Login', path: '', id: 1 }
];

const NavBar = () => {
  const { breakpoints } = useTheme();

  const [open, setOpen] = useState(false);

  const toggle = (e) => setOpen(e.target.checked);

  const matches = useMediaQuery(breakpoints.between('sm', 'md'));

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Container
      sx={{
        [breakpoints.down('md')]: {
          bgcolor: open && '#191919'
        }
      }}
    >
      <StackRow justifyContent={'space-between'} py={1}>
        <StackRow>
          <Logo size={matches ? '1rem' : '3rem'} />
          <Typography variant='display2' sx={{ fontSize: '1.2rem' }}>
            verPower
          </Typography>
        </StackRow>

        {/* desktop layout */}
        <StackRow
          sx={{
            [breakpoints.down('md')]: {
              display: 'none'
            }
          }}
          gap={'1rem'}
        >
          {navlinks.map(({ name }, index) => (
            <NavLink variant='display1' key={index} sx={{}}>
              {name}
            </NavLink>
          ))}
        </StackRow>
        <Box
          sx={{
            [breakpoints.down('md')]: {
              display: 'none'
            }
          }}
        >
          <PrimaryButton variant='contained' onClick={handleClickOpen}>
            Request Demo
          </PrimaryButton>
        </Box>
        {/* mobile layout */}
        <Label component={'label'} htmlFor='check'>
          <Input
            type='checkbox'
            id='check'
            value={open}
            checked={open}
            onChange={toggle}
          />
          <Box component={'span'} />
          <Box component={'span'} />
          <Box component={'span'} />
          <DropDown component={'div'} open={open}>
            <UlBox component={'ul'}>
              {navlinks.map(({ name, path, id }, idx) => (
                <StyledLink component={'li'} key={idx}>
                  <Link key={id} href={`/${path}`}>
                    {name}
                  </Link>
                </StyledLink>
              ))}
            </UlBox>
            <PrimaryButton
              sx={{
                mt: 1,
                '& span': {
                  display: 'none'
                }
              }}
              variant='contained'
            >
              Request Demo
            </PrimaryButton>
          </DropDown>
        </Label>
      </StackRow>
      <EmailModal open={modalOpen} handleClose={handleClose} />
    </Container>
  );
};

export default NavBar;

const StackRow = styled(Stack)(({ open }) => ({
  flexDirection: 'row',
  alignItems: 'center'
}));

const NavLink = styled(Typography)(() => ({
  fontSize: '1.2rem',
  fontWeight: 500
}));

const Input = styled('input')((theme) => ({
  display: 'none'
}));

const Label = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: ' column',
  width: '2rem',
  cursor: 'pointer',
  '& span': {
    background: '#fff',
    borderRadius: '10px',
    height: '2px',
    margin: '0.25rem 0',
    transition: '0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  },
  '& span:nth-of-type(1)': {
    width: '100%'
  },
  '& span:nth-of-type(2)': {
    width: '100%'
  },
  '& span:nth-of-type(3)': {
    width: '100%'
  },
  '& #check:checked ~ span:nth-of-type(1)': {
    transformOrigin: 'bottom',
    transform: 'rotatez(45deg) translate(0.25rem, 0.063rem)',
    width: '50%'
  },
  '& #check:checked ~ span:nth-of-type(2)': {
    transformOrigin: 'top',
    transform: 'rotatez(-45deg)'
  },
  '& #check:checked ~ span:nth-of-type(3)': {
    transformOrigin: 'bottom',
    width: '55%',
    transform: 'translate(0.75rem, -0.375rem) rotatez(45deg)'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

const DropDown = styled(Box)(({ theme, open }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  top: '2.8rem',
  height: '0px',
  overflow: 'hidden',
  transition: 'height 0.15s ease-out',
  backgroundColor: '#191919',
  zIndex: 1,
  ...(open && {
    height: '14.5rem',
    transition: 'height 0.5s ease-in',
    backgroundColor: '#191919',
    paddingBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: '13.5rem',
      top: '4rem'
    }
  })
}));

const UlBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '1rem',
  listStyleType: 'none',
  '& a': {
    color: '#fff',
    textDecoration: 'none'
  },
  '& .active': {
    color: theme.palette.primary.main,
    textDecoration: 'none'
  },
  'a:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  }
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1,
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  }
}));
