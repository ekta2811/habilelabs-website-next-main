import * as React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { useRouter } from "next/router"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import NextImage from "./image"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

const Navbar = ({ logo, menus }) => {
  const router = useRouter()
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [subMenuShow, setSubMenuShow] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      {/* The actual navbar */}
      <AppBar position="static" className={classes.headerBg}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <a className={classes.headerLogo}>
                {logo?.data && (
                  <NextImage width="175" height="58" media={logo} />
                )}
              </a>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: "auto",
              }}
            >
              <IconButton
                sx={{ marginLeft: "auto" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                }}
                className={classes.mobileMenu}
              >
                {menus?.map((navLink) => (
                  <MenuItem key={navLink.link.id} onClick={handleCloseNavMenu}>
                    <Link href={navLink.link.url} textAlign="center">
                      {navLink?.link?.text}
                    </Link>
                    {navLink.subMenus.length > 0 ? (
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        className={classes.expandIcon}
                      >
                        <AddIcon />
                        <RemoveIcon />
                      </IconButton>
                    ) : (
                      ""
                    )}
                    <Box className={classes.subMenu}>
                      {navLink?.subMenus?.map((menu) => {
                        return (
                          <MenuItem key={menu.id} onClick={handleCloseNavMenu}>
                            <Link href="#" textAlign="center">
                              {menu.title}
                            </Link>
                            <Box className={classes.subMenu}>
                              {menu?.links?.map((subMenu) => {
                                return (
                                  <MenuItem key={subMenu.id}>
                                    <Link href={subMenu.url} textAlign="center">
                                      {subMenu.text}
                                    </Link>
                                  </MenuItem>
                                )
                              })}
                            </Box>
                          </MenuItem>
                        )
                      })}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              className={classes.menuStyle}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menus?.map((navLink) => (
                <MenuItem
                  key={navLink.link.id}
                  className={`${
                    router.asPath == navLink?.link?.url ? "active" : ""
                  }`}
                  onClick={handleCloseNavMenu}
                >
                  <Link href={navLink?.link?.url} textAlign="center">
                    {navLink?.link?.text}
                  </Link>
                </MenuItem>
              ))}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className={classes.burgerMenuIcon}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                  display: { xs: "none", md: "block" },
                }}
                className={classes.mobileMenu}
              >
                <IconButton
                  onClick={handleCloseNavMenu}
                  className={classes.OpenMenuIcon}
                >
                  <MenuIcon />
                </IconButton>
                {menus?.map((navLink) => (
                  <MenuItem
                    key={navLink.link.id}
                    className={`${subMenuShow ? "openSubMenu" : ""}`}
                  >
                    <Box className={classes.linkBox}>
                      <Link href={navLink.link.url} textAlign="center">
                        {navLink?.link?.text}
                      </Link>
                      {navLink.subMenus.length > 0 ? (
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={() => setSubMenuShow(!subMenuShow)}
                          color="inherit"
                          className={classes.expandIcon}
                        >
                          <AddIcon />
                          <RemoveIcon />
                        </IconButton>
                      ) : (
                        ""
                      )}
                    </Box>
                    <Box className="subMenu">
                      {navLink?.subMenus?.map((menu) => {
                        return (
                          <MenuItem key={menu.id} onClick={handleCloseNavMenu}>
                            {menu?.url ? (
                              <Link href={menu.url} textAlign="left">
                                {menu.title}
                              </Link>
                            ) : (
                              <Typography variant="h5" component="div">
                                {menu.title}
                              </Typography>
                            )}
                            <Box className={classes.subMenu}>
                              {menu?.links?.map((subMenu) => {
                                return (
                                  <MenuItem key={subMenu.id}>
                                    <Link href={subMenu.url} textAlign="center">
                                      {subMenu.text}
                                    </Link>
                                  </MenuItem>
                                )
                              })}
                            </Box>
                          </MenuItem>
                        )
                      })}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
}
const useStyles = makeStyles((theme) => ({
  headerBg: {
    "&.MuiPaper-root": {
      background: theme.palette.primary.dark,
      boxShadow: "none",
      paddingTop: 15,
    },
  },
  headerLogo: {
    position: "fixed",
    zIndex: 99,
  },
  humberIcon: {
    padding: 10,
    marginLeft: 10,
    zIndex: "99",
  },
  mobileMenu: {
    "& .MuiPaper-root": {
      background: theme.palette.primary.main,
      minWidth: 734,
      height: "100vh",
      top: "0 !important",
      overflowX: "auto",
      maxHeight: "initial",
      "&::-webkit-scrollbar": {
        width: "0",
      },
      [theme.breakpoints.down("md")]: {
        minWidth: "100%",
        left: "0 !important",
      },
      borderRadius: 0,
      "& ul": {
        paddingLeft: "20px",
        minWidth: 734,
        maxWidth: 734,
        [theme.breakpoints.down("md")]: {
          minWidth: "100%",
          maxWidth: "100%",
        },
      },
      "& li": {
        margin: 0,
        width: "100%",
        float: "left",
        flexDirection: "column",
        "& .MuiTouchRipple-root": {
          opacity: 0,
        },
        "& svg": {
          display: "block",
          "& + svg": {
            display: "none",
          },
        },
        "& .MuiTypography-h5": {
          fontSize: 16,
          width: "90%",
          letterSpacing: "0.64",
          color: theme.palette.textColor.default,
          opacity: "0.5",
          textTransform: "upperCase",
          textAlign: "left",
          padding: "30px 0 20px",
          "&:hover": {
            cursor: "default",
          },
        },
        "& a": {
          margin: 0,
          width: "100%",
          textAlign: "left",
          padding: "10px 20px",
          float: "left",
          color: theme.palette.secondary.dark,
          fontSize: 30,
          fontWeight: "300",
        },
        "& li": {
          width: "50%",
          padding: "6px 0 0 10px",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          "& a": {
            fontSize: 16,
            color: theme.palette.textColor.default,
            padding: "10px 5px 0 10px",
          },

          "& li": {
            width: "100%",

            "& a": {
              color: theme.palette.primary.contrastText,
              textTransform: "capitalize",
            },
          },
        },
        "& .subMenu": {
          maxHeight: 0,
          transition: "max-height 0.5s ease-in",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
        },
        "&.openSubMenu": {
          "& svg": {
            display: "none",
            "& + svg": {
              display: "block",
            },
          },
          "& .subMenu": {
            maxHeight: 1300,
            transition: "max-height 3s ease-out",
          },
        },
      },
    },
  },
  menuStyle: {
    width: "100%",
    justifyContent: "flex-end",
    paddingRight: 80,
    position: "relative",
    zIndex: "9",
    "& .active a": {
      color: theme.palette.primary.light,
    },
    "& li": {
      padding: "13px 20px",
      "&:hover": {
        cursor: "default",
      },

      "& a": {
        margin: 0,
        width: "100%",
        textAlign: "left",
        float: "left",
        color: theme.palette.primary.contrastText,
        fontSize: 16,
        "&:hover": {
          cursor: "pointer",
        },
        [theme.breakpoints.down("lg")]: {
          padding: "0 10px",
          fontSize: 14,
        },
      },
    },
  },
  expandIcon: {
    border: "solid 1px" + theme.palette.primary.light + "!important",
    padding: "7px !important",
    width: "39px",
    height: "39px",
    marginTop: "14px !important",
    "& svg": {
      fill: theme.palette.primary.light,
    },
  },
  active: {
    margin: "0px",
  },
  burgerMenuIcon: {
    position: "fixed !important",
    right: 40,
    background: theme.palette.primary.main + " !important",
    zIndex: 3,
    "&:hover": {
      background: theme.palette.primary.dark + " !important",
    },
  },
  OpenMenuIcon: {
    color: theme.palette.secondary.dark + "!important",
    float: "right !important",
    marginRight: "19px !important",
  },
  linkBox: {
    width: "100%",
    display: "flex",
  },
}))

export default Navbar
