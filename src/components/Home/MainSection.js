import { Box, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import React, { memo } from 'react';
import { PrimaryButton } from '../core/styled/PrimaryButton';
import Container from '../core/styled/Container';
import { useTheme } from '@emotion/react';

const MainSection = (props) => {
  const theme = useTheme();
  const {
    title,
    description,
    buttonText,
    onClick,
    children,
    direction,
    gap,
    textAlign,
    desWidth,
    titleWidth
  } = props;
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <Container>
      <MainContent direction={direction} spacing={gap || 1} pt={'3rem'}>
        <Stack
          direction={'column'}
          alignContent='center'
          spacing={3}
          sx={{ flex: 0.45 }}
        >
          <MainHeading
            sx={{
              textAlign: matches ? 'center' : textAlign,
              width: titleWidth || 'auto'
            }}
          >
            {title || 'required title'}
          </MainHeading>
          <MainDescription
            variant='display1'
            sx={{
              textAlign: matches ? 'center' : textAlign,
              width: desWidth || 'auto',
              alignSelf: textAlign
            }}
          >
            {description || 'required description'}
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
    </Container>
  );
};

export default MainSection;
const MainHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.display2heading,
  fontWeight: 700
}));
const MainDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1Description,
  textTransform: 'uppercase'
}));
const MainContent = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem'
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '1rem'
  }
}));
