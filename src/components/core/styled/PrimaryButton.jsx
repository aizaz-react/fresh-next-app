import { Button, styled } from '@mui/material';

export const PrimaryButton = styled(Button)(({ border }) => ({
  borderRadius: '12px',
  border: `1px solid ${border}`,
  padding: '.5rem 2rem'
}));
