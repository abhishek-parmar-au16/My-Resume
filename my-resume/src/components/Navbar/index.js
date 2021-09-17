import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, Toolbar, AppBar, Typography, Button, IconButton, Avatar,ListItem, ListItemIcon, ListItemText, List, Divider, } from '@material-ui/core';
import { GetAppRounded, EmailRounded, GitHub, LinkedIn, Phone, Home, InfoRounded, ContactMailRounded, DescriptionRounded } from '@material-ui/icons/';
import MenuIcon from "@material-ui/icons/Menu";
import Resume from "../../components/About/resume/Abhishek Resume.pdf";
import Profile from "../../components/Jumbotron/images/profilepic.jpg";
import useStyles from './style';

function Navbar (props) {
    const [clicked, setClicked] = useState(false);
    const classes = useStyles();
    const InfoList = [

        {
            text: 'abhishekparmar220197@gmail.com',
            icon: <EmailRounded />,
            link: "abhishekparmar220197@gmail.com",


        },
        {
            text: 'GitHub',
            icon: <GitHub />,
            link: "https://github.com/abhishek-parmar-au16",
        },
        {
            text: 'LinkedIn',
            icon: <LinkedIn />,
            link: "https://www.linkedin.com/in/abhishek-parmar-2562501b1/",
        },

    ]
    return (
        <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { setClicked(true) }}>
            <MenuIcon />
        </IconButton>
            <div className={classes.brandContainer}>
                <Button component={Link} to="/PortfolioWithReact">
                <a className="navbar-brand text-warning" href="/">Abhishek Parmar</a>
                </Button>
            </div>
            <div>
            </div>
        
        </AppBar>
        <SwipeableDrawer
        anchor="left"
        open={clicked}
        onClose={() => { setClicked(false) }}
        onOpen={() => { }}
        className={classes.drawer}>
        <a href="/PortfolioWithReact"
        className={classes.roundedPic}>
        <Avatar
            alt="Profile pic"
            src={Profile}
            className={classes.roundedPic}
            id="avatar" />
        </a>
        <List>
        {InfoList.map((item, index) => {
                        const { text, icon, onClick, link } = item;
                        return (
                            <a href={link} target="_blank" rel="noopener noreferrer" primary={text} style={{ color: "#8B0000", textDecoration: "none" }} >
                                <ListItem button key={text} onClick={onClick}>
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />
                                </ListItem>
                            </a>
                        )
                    })}
            <ListItem>
                <ListItemIcon>
                    <Phone />
                </ListItemIcon>
                <ListItemText primary="7039875277" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <Link to="/PortfolioWithReact" style={{ color: "#000000", textDecoration: "none" }}>
            <ListItem button key="Home">
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
            </Link>
        </List>
        
        
        <List>
            <Link to="/contact" style={{ color: "#000000", textDecoration: "none" }}>
            <ListItem button key="Contact">
            <ListItemIcon>
                <ContactMailRounded />
            </ListItemIcon>
            <ListItemText primary="Contact" />
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
        <a href={Resume} rel="noreferrer" style={{ color: "#000000", textDecoration: "none" }} >
            <ListItem>
                <ListItemIcon>
                    <GetAppRounded />
                </ListItemIcon>
                <ListItemText primary="Resume" />
            </ListItem>
        </a>
        </List>
    </SwipeableDrawer>
    </div>
    )
}

export default Navbar;