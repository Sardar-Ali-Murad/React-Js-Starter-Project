import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='div-center-80 my-[60px]'>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h7 sx={{ width: '33%', flexShrink: 0 }} className="label" style={{color:"black"}}>What Is The Purpose Of MLS?</h7>
        </AccordionSummary>
        <AccordionDetails>
          <p className='form-font'>
          MLS stands for Multiple Listing Services. It is an area where many real estate listings are displayed. The user can review this list to explore what kind of features are available in their respective price range. This was mainly supported by a local real estate agency that contains the details of every land, house, and list of all businesses related to real estate.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h7 sx={{ width: '33%', flexShrink: 0 }} className="label" style={{color:"black"}}>Is an older home as good a value as a new home?</h7>
        </AccordionSummary>
        <AccordionDetails>
          <p className='form-font'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet massa mi, sed ornare dui ullamcorper non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec orci ac lorem tempor ultricies. Pellentesque pulvinar nisl pulvinar ex tincidunt, eu gravida lacus auctor. Maecenas finibus eros pharetra, tempus tortor sit amet, faucibus sapien. Donec non nulla posuere, malesuada urna quis, ornare lectus. Nunc gravida, sapien non laoreet consectetur, sem ligula consequat ex, sit amet sodales velit dui a ipsum. Mauris aliquet metus nec dui porttitor, non mattis ex accumsan. Duis gravida diam est, ac molestie erat porta sit amet. Vivamus tortor mauris, aliquet condimentum elit porttitor, consequat malesuada nibh. Duis nec vestibulum nisi, eget dignissim ex           </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h7 sx={{ width: '33%', flexShrink: 0 }} className="label" style={{color:"black"}}>What is a broker??</h7>
        </AccordionSummary>
        <AccordionDetails>
          <p className='form-font'>
          MLS stands for Multiple Listing Services. It is an area where many real estate listings are displayed. The user can review this list to explore what kind of features are available in their respective price range. This was mainly supported by a local real estate agency that contains the details of every land, house, and list of all businesses related to real estate.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h7 sx={{ width: '33%', flexShrink: 0 }} className="label" style={{color:"black"}}>How long does the loan process take?</h7>
        </AccordionSummary>
        <AccordionDetails>
          <p className='form-font'>
          MLS stands for Multiple Listing Services. It is an area where many real estate listings are displayed. The user can review this list to explore what kind of features are available in their respective price range. This was mainly supported by a local real estate agency that contains the details of every land, house, and list of all businesses related to real estate.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h7 sx={{ width: '33%', flexShrink: 0 }} className="label" style={{color:"black"}}>Can I pay my own taxes and insurance?</h7>
        </AccordionSummary>
        <AccordionDetails>
          <p className='form-font'>
          MLS stands for Multiple Listing Services. It is an area where many real estate listings are displayed. The user can review this list to explore what kind of features are available in their respective price range. This was mainly supported by a local real estate agency that contains the details of every land, house, and list of all businesses related to real estate.
          </p>
        </AccordionDetails>
      </Accordion>

      {/*  */}
     
    </div>
  );
}