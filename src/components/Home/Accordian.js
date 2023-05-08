import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';

const ControlledAccordions = () => {
  const AccordianData = [
    {
      title: 'Manufacturing & Logistics:',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Critical Infrastructure',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Critical Infrastructure',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Healthcare',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Finance & Banking',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Retail & Merchandising',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Government',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Insurance',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
    },
    {
      title: 'Defense',
      Desc: 'FlasHunt Manufacturing and Logistics Organizations identify, discover and triage their mission critical Enterprise, Industrial and Operational systems to deliver an accurate inventory and ISO 31000 Risk Register. With increasing compliance requirements and talent shortages, FashHunt eliminates hours of manual work, shortens time necessary to achieve maandatory compliances, and drives quick, risk-based decisions for investments in automation. '
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
            bgcolor: expanded === index && 'primary.main',
            borderRadius: '15px',
            marginTop: '1rem',
            '& .MuiPaper-root-MuiAccordion-root:before': {
              backgroundColor: 'red !important'
            }
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
                [theme.breakpoints.down('lg')]: {
                  fontSize: '1.1rem'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '0.9rem',
                  lineHeight: '1.2rem'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.7rem',
                  lineHeight: '0.9rem'
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
                fontSize: '1rem ',
                [theme.breakpoints.down('lg')]: {
                  fontSize: '0.9rem'
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
export default ControlledAccordions;
