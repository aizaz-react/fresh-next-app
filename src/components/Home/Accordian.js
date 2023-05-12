import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  borderRadius: '15px',
  marginTop: '1rem',
  backgroundColor: theme.palette.primary.footer
}));

const ControlledAccordions = () => {
  const AccordianData = [
    {
      title: 'Manufacturing & Logistics:',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Critical Infrastructure',
      Desc: `FlasHunt keeps organizations that leverage and deliver Critical Infrastructure focused on their mission. WIthout the use of staff, FlasHunt is able to identify the organization's systems 
      within hours and automatically flags those any system considered mission critical. With aging operating hardware and software and a 
      dwindling pipeline of talent and tools that manage and protect these systems, FlasHunt 
      results in focused remediation actions that are common-sense and risk-based, resulting in increased controls while avoiding costly upgrades. 
      
      `
    },

    {
      title: 'Healthcare',
      Desc: `
      FlasHunt helps Healthcare quickly identify, 
discover, and triage their Enterprise and 
Clinical technology systems, keeping system, 
vendor, and risk documentation all in one place. 
With data privacy at its forefront, FlasHunt 
assists Healthcare organizations to triage each 
system against NIST and HIPAA requirements, 
making it simple to understand where gaps 
exist and what controls to put in place to 
achieve compliance. As a single point solution, 
FlasHunt ensures healthcare leaders and 
technologists can quickly and easily access 
HIPAA compliance reporting, keeping clinicians 
focused on patient care.
      `
    },
    {
      title: 'Finance & Banking',
      Desc: `FlasHunt helps Finance and Banking 
organizations manage cyber-risk across first,
second, third, and fourth party systems and 
providers all in one platform. With Finance 
organizations facing focused and complex 
regulations, FlasHunt simplifies the work of 
Finance and Banking leaders by creating a 
single source of truth across all systems and 
vendors.  A comprehensive system inventory, 
vendor management dashboard, ISO 31000 
Risk Register, and easy compliance reporting 
across over 127 compliance frameworks cuts 
out the manual entry, updating and 
management of audit and compliance 
spreadsheets
      `
    },
    {
      title: 'Retail & Merchandising',
      Desc: `FlasHunt results in more effective privacy, risk and security controls across payment, 
customer management, and supply chain 
systems. Quickly instantiating a comprehensive 
system inventory, FlasHunt documents the 
most mission critical systems necessary to 
deliver safe customer transactions. Utilizing an 
ISO 31000 risk triage, each system is rated to 
ensure  a quick view of the riskiest systems 
and vendors. FlasHunt drives compliance with 
PCI and numerous privacy standards necessary 
to ensure your customers and suppliers 
maintain buying confidence with your 
organization.
      `
    },
    {
      title: 'Government',
      Desc: `FlasHunt keeps Government organizations, 
      providers, and contractors on track to meet 
      necessary compliance requirements to do 
      business.  As a single solution, FlasHunt 
      instantiates a comprehensive system and 
      vendor inventory within hours,  FlasHunt 
      quickly identifies and triages systems to point 
      out the greatest risks and where they live, 
      creating an order of priority to ensure the 
      organization's investment of time and 
      remedation activities are focused on items that 
      pose threat to privacy and compliance 
      requirements. `
    },
    {
      title: 'Insurance',
      Desc: `FlasHunt helps Insurance providers keep their 
      provider and customer data safe, while 
      managing the many second and third party 
      vendors necessary to keep the doors open. 
      With an increasing need for third party 
      platforms, Insurance organizations have data 
      hosted in several places without the staff or 
      time to complete regular due diligence on  
      providers.  FlasHunt is able to manage your 
      vendor policies, contracts, and agreements all 
      in one place, driving an ISO 31000 risk rating 
      of each. These  results allow Insurance 
      organizations to confidently make decisions 
      about customer data privacy and the existing 
      and necessary controls in place to keep it safe`
    },
    {
      title: 'Defense',
      Desc: `Facing the heaviest regulatory burden with 
      NIST,  DOD, and CMMC requirements,  FlasHunt 
      is able to assist Defense organizations, 
      suppliers, and contractors manage risk and 
      compliance quickly and effectively by auto 
      detecting enterprise and industrial systems 
      that are subject to mandatory requirements.  
      Using  Department of Defense Mission 
      Assurance Categories, FlasHunt quickly 
      identifies and triages systems to point out the 
      greatest risks and where they live, creating an 
      order of priority to ensure the organization's 
      investment of time and remedation activities 
      are focused on items that pose threat to 
      privacy and compliance requirements. `
    }
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const theme = useTheme();

  return (
    <>
      {AccordianData.map((item, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          sx={{
            bgcolor: expanded === index && 'primary.main'
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon sx={{ color: '#fff' }} />
              ) : (
                <AddIcon sx={{ color: '#B71C1C' }} />
              )
            }
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{ borderRadius: '15px' }}
          >
            <Typography
              sx={{
                width: '33%',
                flexShrink: 0,
                textAlign: 'left',
                [theme.breakpoints.down('lg')]: {
                  fontSize: '1.1rem'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '0.9rem',
                  lineHeight: '1.2rem'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  lineHeight: '1rem'
                }
              }}
              variant='display2'
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='display3'
              sx={{
                fontSize: '1.2rem ',
                fontWeight: 300,
                [theme.breakpoints.down('lg')]: {
                  fontSize: '1rem'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '0.8rem',
                  lineHeight: '0.7rem'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.7rem',
                  lineHeight: '0.7rem'
                }
              }}
            >
              {item.Desc}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default React.memo(ControlledAccordions);
