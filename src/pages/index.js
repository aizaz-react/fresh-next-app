import NavBar from '@/components/core/reusable/NavBar';
import { Box, useTheme, styled, useMediaQuery } from '@mui/material';
import MainSection from '@/components/Home/MainSection';
import { PrimaryButton } from '@/components/core/styled/PrimaryButton';
import TabCards from '@/components/Home/TabCards';
import StyledTabs from '@/components/core/styled/Tabs';
import { complextablist } from '@/components/core/constants';
import { useState } from 'react';
import Counters from '@/components/Counters';
import TeamCard from '@/components/Home/TeamCard';
import Container from '@/components/core/styled/Container';
import ControlledAccordions from '@/components/Home/Accordian';
import OverPowerTeam from '@/components/Home/OverPowerTeam';
import FlashHuntPlateform from '@/components/Home/FlashHuntPlateform';
import Footer from '@/components/Home/Footer';

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = useState(complextablist[0].name);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BackgroundLayout sx={{ paddingBottom: '5rem' }}>
        <NavBar />
        <Container>
          <MainSection
            direction={'row'}
            title={'Boost Your Cyber Risk Management Literally in Minutes'}
            description={
              'Easy deploy, manage, and scale your corporate cyber-risk managementwithout compromising.'
            }
            onClick={() => null}
          >
            <Box sx={{ flex: 0.5, display: 'grid', placeItems: 'center' }}>
              <HeroSctionImg
                component={'img'}
                src={'/image/heroimg.png'}
                alt='hello'
                width={'100%'}
                sx={{
                  borderRadius: '25px',
                  boxShadow: `3px 3px 1px 1px ${theme.palette.primary.main}`
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1.5rem'
                }}
              >
                <PrimaryButton variant='contained'>LEARN MORE</PrimaryButton>
              </Box>
            </Box>
          </MainSection>
        </Container>
      </BackgroundLayout>
      <TabCards />
      <Container>
        <MainSection
          direction={'row-reverse'}
          gap={5}
          title={'Easily Build, Discover, and Triage Your Cyber Risk'}
          description={
            'Say goodbye to hours of workshops anddocumentation. Fully discover and understand your organization’s most critical systems forma single dashboard.'
          }
          buttonText={'LEARN MORE'}
          onClick={() => null}
        >
          <Box sx={{ flex: 0.55, display: 'grid', placeItems: 'center' }}>
            <HeroSction
              component={'img'}
              src={'/image/Mainsection.png'}
              alt='hello'
              width={'100%'}
              sx={{
                borderRadius: '25px'
              }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1.5rem'
              }}
            ></Box>
          </Box>
        </MainSection>
        <MainSection
          direction={'row'}
          title={'Lightning-Fast Deployment'}
          description={`In just a few click, purchase, provision, and enable
          comprehensive cyber risk management on-prem, in
          the cloud, or anywhere in between.`}
          buttonText={'LEARN MORE'}
          onClick={() => null}
        >
          <Box sx={{ flex: 0.55, display: 'grid', placeItems: 'center' }}>
            <LightFixImg
              component={'img'}
              src={'/image/graph.png'}
              alt='hello'
              width={'100%'}
              sx={{
                borderRadius: '25px'
              }}
            />
          </Box>
        </MainSection>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={'Simplify the Complex with our World-Class Support'}
          description={`In just a few click, purchase, provision, and enable
          comprehensive cyber risk management on-prem, in
          the cloud, or anywhere in between.`}
          textaligin={'center'}
          onClick={() => null}
        >
          <Box
            sx={{
              bgcolor: 'background.default',
              borderRadius: '10px',
              padding: '1rem 3rem',
              [theme.breakpoints.down('md')]: {
                padding: '1rem 0.7rem'
              }
            }}
          >
            <StyledTabs
              value={value}
              onChange={handleChange}
              tabList={complextablist}
            />
            <MainSection
              direction={'row'}
              gap={5}
              removePadding
              title={'Turnkey Vendor Management'}
              description={` Maximize risk mitigation and minimize operational
              impact by leveraging our team to contact, collect,
              and complete due diligence on vendors that provide
              technology to your organization.`}
              buttonText={'LEARN MORE'}
              onClick={() => null}
            >
              <Box sx={{ flex: 0.55, display: 'grid', placeItems: 'center' }}>
                <DiscoverBuildSection
                  component={'img'}
                  src={'/image/Mainsection.png'}
                  alt='hello'
                  width={'100%'}
                  sx={{
                    borderRadius: '25px',
                    border: `3px solid ${theme.palette.primary.main}`,
                    borderRight: 'none',
                    marginLeft: '4rem',
                    [theme.breakpoints.down('md')]: {
                      marginLeft: '0.1rem !important'
                    }
                  }}
                />
              </Box>
            </MainSection>
          </Box>
        </MainSection>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={'The Impact of Radical Simplicity'}
          description={`as the attack surface of organizations grows --- with more environments and devices to protect and more tools
        to manage, so grows complexity. this is what we call the cyber complexity trap and here’s how we defeat it.`}
          textaligin={'center'}
          onClick={() => null}
        >
          <Counters />
        </MainSection>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={`From Manufacturing to healthcare,
        Here’s Why Businesses choose 
        Flashunt`}
          description={`see how we help organizations achieve the peace of mind they deserve.`}
          onClick={() => null}
        >
          <OPTConatinerWrapper>
            <OverPowerTeam />
          </OPTConatinerWrapper>
        </MainSection>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={'The Latest and the Greatest'}
          description={`News, updates and insights from our team.`}
          textaligin={'center'}
          onClick={() => null}
        >
          <TeamCard />
        </MainSection>
      </Container>
      <Box sx={{ bgcolor: 'primary.main', pb: '3rem' }}>
        <Container>
          <MainSection
            direction={'row'}
            gap={5}
            title={`SOC 2 Type 2,
        GDPR, CPRA,
        ITAR, NIST
        800-171/53 and
        ISO 27001`}
            description={
              'Say goodbye to hours of workshops anddocumentation. Fully discover and understand your organization’s most critical systems forma single dashboard.'
            }
            onClick={() => null}
          >
            <Box sx={{ flex: 0.55, display: 'grid', placeItems: 'center' }}>
              <Box
                component={'img'}
                src={'/image/sector.png'}
                alt='hello'
                width={'70%'}
                sx={{
                  borderRadius: '25px',

                  [theme.breakpoints.down('md')]: {
                    marginTop: '1rem'
                  }
                }}
              />
            </Box>
          </MainSection>
        </Container>
      </Box>
      <Container>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={`FlasHunt: A Platform for Good`}
          description={`an elegant solution to a complicated problem.`}
          onClick={() => null}
        >
          <FlashHuntPlateform />
        </MainSection>
      </Container>

      <Container
        sx={{
          padding: '1rem 10rem',
          [theme.breakpoints.down('lg')]: {
            padding: '1rem 8rem'
          },
          [theme.breakpoints.down('md')]: {
            padding: '1rem 5rem'
          },
          [theme.breakpoints.down('sm')]: {
            padding: '1rem 4rem'
          }
        }}
      >
        <Box
          sx={{ display: 'grid', placeItems: 'center' }}
          component={'img'}
          src={'/image/circle.png'}
          alt='hello'
          width={'100%'}
        />
      </Container>
      <Container sx={{ padding: '0rem 1rem' }}>
        <MainSection
          direction={'column'}
          textAlign={'center'}
          titleWidth='98%'
          gap={5}
          title={'Our Mission is Ensuring your Mission'}
          description={'solutions for your industry:'}
          onClick={() => null}
        >
          <AccordianWrapper>
            <ControlledAccordions />
          </AccordianWrapper>
        </MainSection>

        <MainSection
          direction={'column'}
          textAlign={'center'}
          gap={5}
          title={'Easily Build, Discover, and Triage Your Cyber Risk'}
          buttonText={'Get Started'}
          onClick={() => null}
        >
          <Box
            component={'img'}
            src={'/image/footerimg.png'}
            alt='hello'
            width={'100%'}
          />
        </MainSection>
      </Container>

      <Footer />
    </>
  );
}

const BackgroundLayout = styled(Box)({
  backgroundImage: `url(/image/moodboard.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: ` 00px -63px 57px 11px rgba(0,0,0,0.95) inset;
  -webkit-box-shadow: 0px -63px 57px 11px rgba(0,0,0,0.95) inset;
  -moz-box-shadow: 0px -63px 57px 11px rgba(0,0,0,0.95) inset;`
});

const HeroSctionImg = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginTop: '1.5rem'
  }
}));

const HeroSction = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginTop: '1.5rem'
  }
}));

const LightFixImg = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginTop: '1.5rem'
  }
}));
const OPTConatinerWrapper = styled(Box)(({ theme }) => ({
  padding: ' 1rem 5rem',
  [theme.breakpoints.down('lg')]: {
    padding: '0rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0rem'
  }
}));

const DiscoverBuildSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginTop: '1.5rem'
  }
}));
const AccordianWrapper = styled(Box)(({ theme }) => ({
  padding: '2.3rem 6.5rem 5rem 6.5rem',
  [theme.breakpoints.down('lg')]: {
    padding: '1.9rem 3.6rem 3.5rem 3.6rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.7rem 2.8rem 2.7rem 2.8rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1.2rem 1.2rem 1.2rem',
    marginTop: '0rem !important'
  }
}));
