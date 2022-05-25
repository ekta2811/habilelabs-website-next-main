import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import { makeStyles } from "@mui/styles"
import { Box, Container, Typography } from "@mui/material"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import * as animationData from "./service_banner_animation.json"

const Hero = ({ data }) => {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Box className={classes.heroBg}>
      <Container maxWidth="xl">
        <Box className={classes.homeBanner}>
          <Player
            className={classes.homeAnimation}
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
          <Player
            className={classes.mobileAnimation}
            autoplay
            loop
            speed={0.5}
            src={data.mobileAnimation}
            height={550}
            width={1006}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>

          <Box className={classes.contentArea}>
            <main>
              {/* Left column for content */}
              <div>
                {/* Big title */}
                <Typography variant="subtitle2">{data.title}</Typography>
                {/* Description paragraph */}
                <Typography variant="h1">{data.description}</Typography>
                {/* Buttons row */}
                <div>
                  {data.buttons.map((button) => (
                    <ButtonLink
                      button={button}
                      appearance={getButtonAppearance(button.type, "light")}
                      key={button.id}
                    />
                  ))}
                </div>
              </div>
            </main>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  heroBg: {
    background: theme.palette.primary.dark,
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 50vw)",
    },
  },
  homeBanner: {
    position: "relative",
    "& span": {
      maxWidth: 963,
      marginLeft: "auto !important",
      marginRight: "-85px !important",
      "& span": {
        paddingTop: "60% !important",
      },
    },
  },
  homeAnimation: {
    float: "right",
    width: "77%",
    position: "relative",
    right: "-150px",
    top: "-77px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileAnimation: {
    float: "right",
    width: "100%",
    position: "absolute",
    right: "0",
    top: "100px",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      top: "50vw",
    },
  },
  contentArea: {
    color: theme.palette.primary.contrastText,
    position: "absolute",
    top: "12%",
    left: "0",
    "& .MuiTypography-h1": {
      width: "50%",
    },
  },
}))

export default Hero
