import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";
import { Modal } from "@mui/material";
import { user } from "../config";

const pages = ["Home", "Download", "Upload", "About Us"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log("HANDLE OPEN IS WORKING !!!");
    };
    const handleClose = () => {
        setOpen(false);
        console.log("Handle close is working !!!");
    };

    const [openSignUp, setOpenSignUp] = React.useState(false);
    const handleOpenSignUp = () => {
        setOpenSignUp(true);
        // console.log("CLICKED")
    };
    const handleCloseSignUp = () => setOpenSignUp(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const Nav = styled(Toolbar)({
        backgroundColor: "white",
        color: "black",
    });

    return (
        <AppBar position='static' sx={{ backgroundColor: "white" }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            color: "black",
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                        }}>
                        PYP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            color: "black",
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "flex-end",
                            display: { xs: "none", md: "flex" },
                        }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ m: 2, color: "black", display: "block" }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <Box sx={{ "& button": { m: 1 } }}>
                        {user ? (
                            <Avatar>{user.name?user.username[0]:'H'}</Avatar>
                        ) : (
                            <div>
                                <Button
                                    sx={{
                                        backgroundColor: "white",
                                        color: "grey",
                                    }}
                                    variant='outlined'
                                    size='medium'
                                    onClick={handleOpen}>
                                    Login
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby='modal-modal-title'
                                        aria-describedby='modal-modal-description'>
                                        <SignInForm />
                                    </Modal>
                                </Button>

                                <Button
                                    sx={{
                                        backgroundColor: "white",
                                        color: "grey",
                                    }}
                                    variant='outlined'
                                    size='medium'
                                    onClick={handleOpenSignUp}>
                                    Signup
                                    <Modal
                                        open={openSignUp}
                                        handleCloseSignUp={handleCloseSignUp}
                                        // aria-labelledby="modal-modal-title"
                                        // aria-describedby="modal-modal-description"
                                    >
                                        <SignUpForm
                                            handleCloseSignUp={
                                                handleCloseSignUp
                                            }
                                        />
                                    </Modal>
                                </Button>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
