/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./FAQ.css";
import fqa_img from "../imgs/userf.jpg";
import { Link } from 'react-router-dom';
export default function FAQ() {
  return (
    <>
    <div className='FQA_cont'>
        <div className='FQA_img_cont'>
        <h1 className='reveal fade-right' id="heading_fqa">Frequently Asked Questions</h1> <br/>
            <img className='reveal fade-right' src={fqa_img} id="img_fqa"/>
        </div>
        <div className='FQA_txt'>
        <Link to="/me/helpcenter">

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          
          <ListItem className='reveal fade-left' disablePadding style={{width:'130%', border:'1px solid black'}}>
            <ListItemButton >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="where is my order" />
            </ListItemButton>
          </ListItem>
          <ListItem className='reveal fade-left' disablePadding style={{width:'130%', border:'1px solid black'}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="how do i cancel my order" />
            </ListItemButton>
          </ListItem>
          <ListItem className='reveal fade-left' disablePadding style={{width:'130%', border:'1px solid black'}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="how do i konw if my order is confirmed" />
            </ListItemButton>
          </ListItem>
          <ListItem className='reveal fade-left' disablePadding style={{width:'130%', border:'1px solid black'}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="how do i konw if my order is confirmed" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </Link>
        </div>

    </div>
    </>
    )
}
