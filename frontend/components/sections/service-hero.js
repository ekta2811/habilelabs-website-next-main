import { makeStyles, useTheme } from "@mui/styles"
import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"
import DownArrowIcon from "../icons/DownArrow"
import { Player, Controls } from "@lottiefiles/react-lottie-player"

const ServiceHero = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Box className={classes.heroBg}>
      <Container maxWidth="xl">
        <Box className={classes.contentArea}>
          <div className={classes.topBar}>
            {data.breadcrumbs.map((link) => {
              return (
                <Link href={link?.url} key={link.id} passHref>
                  {link?.text}
                </Link>
              )
            })}
            <p className={classes.slash}>/</p>

            <Typography variant="body2">{data.name}</Typography>
            <div className={classes.downArrow}>
              <DownArrowIcon />
            </div>

            
          </div>

          <Box className={classes.homeBanner}>
            <Player
              autoplay
              loop
              speed={0.5}
              src={data.animation}
              height={550}
              width={1006}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  sideImg: {
    padding: "65px 0 50px 0 !important",
    [theme.breakpoints.down("md")]: {
      padding: "20px 0 30px 0 !important",
      maxWidth: "70% !important",
      margin: "auto !important",
    },
  },
  heroBg: {
    background: theme.palette.primary.dark,
    height: "100%",
  },
  homeAnimation: {
    boxShadow: "none",
    borderRadius: 0,
    transition: "none",
  },
  slash: {
    color: theme.palette.primary.light + " !important",
    padding: theme.spacing(0, 1.5, 0, 1.5),
  },
  topBar: {
    padding: theme.spacing(6, 0, 0, 6),
    display: "flex",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 0, 0, 0),
    },
    "& a": {
      color: theme.palette.primary.contrastText,
      opacity: "50%",
      fontSize: "16px",
      zIndex: 99,
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  downArrow: {
    margin: theme.spacing(1, 0, 0, 2),
  },
  contentArea: {
    position: "relative",
    color: theme.palette.primary.contrastText,
    "& .MuiTypography-h1": {
      padding: theme.spacing(10, 16, 0, 6),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(11, 2.5, 0, 0),
      },
    },
  },
  homeBanner: {
    "& div": {
      maxWidth: 1006,
      marginLeft: "auto !important",
      "& div": {
        margin: "0px -75px 0px auto !important",
        [theme.breakpoints.down("md")]: {
          margin: theme.spacing(0, 0, 0, 0) + " !important",
        },
      },
    },
  },
}))

export default ServiceHero
