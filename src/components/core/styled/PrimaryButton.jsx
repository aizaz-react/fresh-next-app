import { Button, styled } from '@mui/material';

export const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '.5rem 2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '.3rem 1rem',
    fontSize: '.7rem',
    borderRadius: '6px'
  }
}));
