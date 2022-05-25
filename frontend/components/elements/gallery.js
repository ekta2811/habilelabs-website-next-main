import React from "react"
import { makeStyles } from "@mui/styles"
import NextImage from "./image"
import {
  Box,
  Container,
  Grid,
  Dialog,
  IconButton,
  useTheme,
  MobileStepper,
  Link,
} from "@mui/material"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import CircularProgress from "@mui/material/CircularProgress"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Gallery = ({ gallery }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLoaded, setIsLoaded] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])

  const theme = useTheme()
  const maxSteps = gallery?.images?.data.length

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setActiveStep(0)
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(maxSteps - 1)
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        className={classes.dialogBox}
      >
        <Container>
          <Grid>
            <div className={classes.backStepperButton}>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                backButton={
                  <IconButton size="large" onClick={handleBack}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </IconButton>
                }
              />
            </div>
          </Grid>
          <Grid className={classes.dialogContentBox}>
            <div>
              <IconButton className={classes.crossIcon} onClick={handleClose}>
                <ClearRoundedIcon />
              </IconButton>
            </div>
            <div>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
              >
                {gallery?.images?.data?.map((step, index) => {
                  let newImages = {
                    data: step,
                  }
                  return isLoaded ? (
                    <div container sm={12} xs={6} key={index}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <NextImage
                          width={21}
                          height={9}
                          layout="responsive"
                          objectFit="cover"
                          key={index}
                          media={newImages}
                          onClick={handleClickOpen}
                        />
                      ) : null}
                    </div>
                  ) : (
                    <div className={classes.loaderProgress}>
                      <CircularProgress />
                    </div>
                  )
                })}
              </AutoPlaySwipeableViews>
            </div>
          </Grid>
          <Grid>
            <div className={classes.nextStepperButton}>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <IconButton size="large" onClick={handleNext}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </IconButton>
                }
              />
            </div>
          </Grid>
        </Container>
      </Dialog>
      <Box className={classes.galleryCardContainer} onClick={handleClickOpen}>
        <NextImage
          width="546px"
          height="297px"
          media={gallery.banner}
          className={classes.galleryCardImage}
        />
        {gallery?.link?.text ? (
          <p className={classes.galleryCardText}>
            {gallery.title} <br />
            <Link href={gallery.link.url} underline="none">
              {gallery.link.text}
            </Link>
          </p>
        ) : (
          <p className={classes.galleryCardText}>
            {gallery.title} <br />
          </p>
        )}
      </Box>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  galleryCardContainer: {
    display: "grid",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01)",
      transition: "all 1s ease-in-out",
      boxShadow: "black 0px 0px 10px",
    },
  },
  galleryCardText: {
    position: "absolute",
    width: "463px",
    padding: theme.spacing(4.4),
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    color: theme.palette.background.default,
    letterSpacing: "0.8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      width: "100%",
      padding: theme.spacing(1.4),
    },
  },
  dialogBox: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.background.dialogBox,
    },
  },
  loaderProgress: {
    overflow: "hidden",
    textAlign: "center",
  },
  crossIcon: {
    position: "absolute !important",
    left: "95%",
    right: 0,
    top: 0,
    "& .MuiSvgIcon-root": {
      fontSize: "40px",
      color: theme.palette.primary.contrastText,
    },
  },
  dialogContentBox: {
    marginTop: 60,
    padding: theme.spacing(2.2),
    "& img": {
      aspectRatio: "21/9",
    },
  },
  backStepperButton: {
    position: "absolute",
    top: "45%",
    left: "0",
    "& .MuiButtonBase-root": {
      color: theme.palette.arrow.main,
      width: "30px",
      left: "35px",
      height: "30px",
      borderRadius: "14px",
      border: "1px solid #37DCFF",
    },
    "& .MuiPaper-root": {
      background: "none",
    },
    "& .MuiMobileStepper-dots": {
      display: "none",
    },
  },
  nextStepperButton: {
    position: "absolute",
    top: "45%",
    right: "0",
    "& .MuiButtonBase-root": {
      color: theme.palette.arrow.main,
      width: "30px",
      right: "35px",
      height: "30px",
      borderRadius: "14px",
      border: "1px solid #37DCFF",
    },
    "& .MuiPaper-root": {
      background: "none",
    },
    "& .MuiMobileStepper-dots": {
      display: "none",
    },
  },
}))

export default Gallery
