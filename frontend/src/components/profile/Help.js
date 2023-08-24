import React from 'react'
import { Link } from 'react-router-dom';
import './D1.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Help() {
    return (
        <>
            <div class="personal_information">
                <div class="profile_info">
                    <div class="profile_info2 " style={{ width: '662px', height: '645px' }}>
                        <h1 id="heading"> what's issues are you facing ?</h1>
                        <div class="issues">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography> I want to track my order</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Go to your profile and click on order option.Open the order you want to track.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>I want to manage my order</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    Go to your profile and click on order option.Open the order you want to manage.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>I want help with returns</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    Go to your profile and click on order option.Open the order you want to return.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>I want to help with other issues</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Please contact us on styleme.shoppingweb@gmail.com with your issue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
