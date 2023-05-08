import React from 'react';
import { Box, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { PrimaryButton } from '../core/styled/PrimaryButton';

const MainSection = (props) => {
  const {
    title,
    description,
    buttonText,
    onClick,
    children,
    direction,
    gap,
    textAlign,
    titleWidth,
    removePadding
  } = props;
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <MainContent
      direction={direction}
      gap={gap || 1}
      pt={removePadding ? '0rem' : '3rem'}
    >
      <Stack
        direction={'column'}
        alignContent='center'
        spacing={3}
        sx={{ flex: 0.45 }}
      >
        <MainHeading
          component={'h3'}
          sx={{
            textAlign: matches ? 'center' : textAlign,
            width: titleWidth || 'auto'
          }}
        >
          {title || 'required title'}
        </MainHeading>
        <MainDescription
          variant='display1'
          component={'p'}
          sx={{
            textAlign: matches ? 'center' : textAlign,
            alignSelf: textAlign
          }}
        >
          {description}
        </MainDescription>
        {buttonText && (
          <Box sx={{ alignSelf: matches ? 'center' : textAlign }}>
            <PrimaryButton variant='contained' onClick={onClick}>
              {buttonText}
            </PrimaryButton>
          </Box>
        )}
      </Stack>
      {children}
    </MainContent>
  );
};

export default MainSection;
const MainHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.display2heading,
  fontWeight: 700
}));
const MainDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1Description,
  textTransform: 'uppercase',

  [theme.breakpoints.down('md')]: {
    width: '70%',
    alignSelf: 'center'
  }
}));
const MainContent = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
    // margin: '.8rem'
  }
}));
