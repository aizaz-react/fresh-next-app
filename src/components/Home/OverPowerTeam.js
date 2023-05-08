import { useTheme } from '@emotion/react';
import { Typography, Stack, styled } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import React from 'react';
import Logo from '../../assets/custom/Logo';
import Radio from '@mui/material/Radio';

const OverPowerTeam = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item }
  });
  return (
    <MainSection sx={{ bgcolor: 'background.default' }}>
      <LeftSection spacing={3}>
        <StackRow>
          <Logo size={'3rem'} />
          <Typography
            variant='display1'
            sx={{ fontSize: '1.8rem', fontWeight: 500 }}
          >
            verpower
          </Typography>
        </StackRow>
        <Description
          variant='display3'
          sx={{ fontSize: '0.9rem', fontWeight: 400 }}
        >
          We have been with overpower for about two years and the service has
          been absolutely superb. We have over 1000 employees who all work in a
          hybrid environment across the Midwest. With FlasHunt, we are confident
          we can make the best use of our resources and secure our organization.
        </Description>
        <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
          <Title
            variant='display1'
            sx={{
              fontSize: '1.8rem',
              fontWeight: 500,
              lineHeight: '1.7rem'
            }}
          >
            JIM MCLARTY
          </Title>
          <Description

          // sx={{ fontSize: '0.9rem', fontWeight: 400, lineHeight: '1.7rem' }}
          >
            CISO, Independent
          </Description>
          <Description
          // variant='display3'
          // sx={{ fontSize: '0.9rem', fontWeight: 400 }}
          >
            Banking Corporation
          </Description>
        </Stack>
      </LeftSection>
      <RightSection spacing={3} direction={'column'}>
        <ContainerWrapper
          component={'img'}
          src={'/image/ceo.png'}
          alt='hello'
          width={'60%'}
          sx={{
            borderRadius: '50%'
          }}
        />
        <Stack direction={'row'} sx={{ paddingTop: '1rem' }}>
          <Radio {...controlProps('a')} size='small' />
          <Radio {...controlProps('b')} size='small' />
          <Radio {...controlProps('c')} size='small' />
          <Radio {...controlProps('d')} size='small' />
        </Stack>
      </RightSection>
    </MainSection>
  );
};

export default OverPowerTeam;
const StackRow = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center'
}));
const LeftSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));
const RightSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  paddingLeft: '5rem',
  marginTop: '3rem',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    paddingLeft: '0rem',
    marginTop: '2rem'
  }
}));
const MainSection = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
  display: 'flex',
  padding: '1rem 2.5rem',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1rem'
  }
}));
const ContainerWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '40%'
  },
  [theme.breakpoints.down('md')]: {
    width: '30%'
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1,
  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '1.7rem',
  [theme.breakpoints.down('md')]: {
    textAlign: 'left'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.display3,
  [theme.breakpoints.down('md')]: {
    textAlign: 'left'
  }
}));
