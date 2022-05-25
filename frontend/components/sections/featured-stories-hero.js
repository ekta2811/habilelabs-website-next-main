import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import Lottie from "react-lottie"
import * as animationData from "./featured_stories_animation.json"
import LinearProgress from "@mui/material/LinearProgress"

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  )
}

const FeaturedStoriesHero = ({ data }) => {
  const classes = useStyles()
  const [progress, setProgress] = useState(0)
  const [stories, setStories] = useState([])
  let animationIndex = 0
  const buttonData = {
    url: stories.buttonLink,
    newTab: false,
    text: stories.buttonText,
    type: "primary",
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const setAnimation = () => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 25 : prevProgress + 25
    )
    setStories(data?.stories[animationIndex++])
    if (animationIndex === data?.stories.length) animationIndex = 0
  }

  useEffect(() => {
    setAnimation()
    setInterval(setAnimation, 3750)
  }, [])
  return (
    <>
      <Box className={classes.homeHeroContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box className={classes.homeHeroContent}>
              <Typography variant="body1" gutterBottom>
                {stories.title}
              </Typography>
              <Typography variant="h1" gutterBottom>
                {stories.description}
              </Typography>
              <Box className={classes.homeActionButton}>
                <ButtonLink
                  button={buttonData}
                  appearance={getButtonAppearance("primary", "dark")}
                  key={stories?.id}
                />
              </Box>
              <div className={classes.progressContainer}>
                <Typography variant="h5" gutterBottom>
                  {stories.featuredTitle}
                </Typography>
                <Box className={classes.progressBar} sx={{ width: "100%" }}>
                  <LinearProgressWithLabel
                    className={classes.activeColor}
                    value={progress}
                  />
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Lottie options={defaultOptions} />
            </Box>
          </Grid>
        </Grid>
        <div>
          <Box className={classes.mobileProgressHeader}>
            <Typography variant="h5" gutterBottom>
              {stories.featuredTitle}
            </Typography>
          </Box>
          <Box className={classes.mobileProgressBar} sx={{ width: "100%" }}>
            <LinearProgressWithLabel
              className={classes.activeColor}
              value={progress}
            />
          </Box>
        </div>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  homeHeroContainer: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(6, 0, 0, 0),
  },
  homeHeroContent: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 6, 0, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 3, 0, 5),
    },
    "& .MuiTypography-h1": {
      padding: 0,
    },
  },
  progressContainer: {
    padding: theme.spacing(0, 6, 0, 0),
    [theme.breakpoints.down("md")]: {
      padding: 0,
      display: "none",
    },
  },
  progressBar: {
    position: "relative",
    "& .MuiLinearProgress-root": {
      borderRadius: "10px",
    },
    "& .MuiLinearProgress-bar": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  mobileProgressHeader: {
    display: "none",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3, 0, 5),
      display: "flex",
    },
  },
  mobileProgressBar: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      padding: theme.spacing(0, 3, 9, 5),
      "& .MuiLinearProgress-bar": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  homeActionButton: {
    padding: theme.spacing(4, 6, 16, 0),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0),
    },
    "& a": {
      "& div": {
        padding: theme.spacing(1.5, 8),
        borderRadius: 25,
        fontWeight: 500,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(1, 4),
        },
      },
    },
  },
}))

export default FeaturedStoriesHero
