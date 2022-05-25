import React from "react"
import { makeStyles } from "@mui/styles"
import {
  Box,
  Typography,
  Link,
  Container,
  Grid,
  useTheme,
  Dialog,
  IconButton,
  MobileStepper,
} from "@mui/material"
import NextImage from "../elements/image"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Updates = ({ updates, data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const maxSteps = updates?.images?.data.length

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
      <div>
        <Box
          className={`${classes.updatesContentArea} ${
            classes[
              data?.companyUpdates_background === "light"
                ? "updatesDarkContentArea"
                : "updatesLightContentArea"
            ]
          }`}
        >
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
                  <IconButton
                    className={classes.crossIcon}
                    onClick={handleClose}
                  >
                    <ClearRoundedIcon />
                  </IconButton>
                </div>
                <div>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                  >
                    {updates?.images?.data?.map((update, index) => {
                      let newImages = {
                        data: update,
                      }
                      return (
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
          <Box className={classes.updateBanner} onClick={handleClickOpen}>
            <NextImage media={updates.icon} />
          </Box>
          {updates.url ? (
            <Link href={updates.url} underline="none">
              <Typography
                variant="body2"
                align="left"
                className={classes.contentArea}
              >
                {updates.title}
              </Typography>
            </Link>
          ) : (
            <Typography
              variant="body2"
              align="left"
              className={classes.contentArea}
            >
              {updates.title}
            </Typography>
          )}
          <Box onClick={handleClickOpen}>
            <Typography
              variant="h6"
              align="left"
              className={classes.contentDescription}
            >
              {updates.description}
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  contentArea: {
    padding: theme.spacing(2, 0, 0, 0),
  },
  contentDescription: {
    padding: theme.spacing(2, 0, 11, 0),
  },
  updatesContentArea: {
    "& .MuiTypography-body2": {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.8, 0, 1.2, 0),
      },
    },
    "& .MuiTypography-h6": {
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 0, 6.25, 0),
      },
    },
  },
  updatesLightContentArea: {
    "& .MuiTypography-body2": {
      color: theme.palette.primary.light,
    },
    "& .MuiTypography-body3": {
      color: theme.palette.secondary.dark,
    },
  },
  updatesDarkContentArea: {
    "& .MuiTypography-body2": {
      color: theme.palette.primary.light,
    },
    "& .MuiTypography-body3": {
      color: theme.palette.secondary.contrastText,
    },
  },
  updateBanner: {
    "& :hover": {
      cursor: "pointer",
    },
  },
  dialogBox: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.background.dialogBox,
    },
  },
  crossIcon: {
    position: "absolute !important",
    left: "95%",
    zIndex: 100,
    right: 0,
    top: 0,
    "& .MuiSvgIcon-root": {
      fontSize: "40px",
      color: theme.palette.primary.contrastText,
    },
  },
  dialogContentBox: {
    marginTop: 60,
    justifyContent: "center",
    padding: 20,
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
      opacity: "1",
      width: "30px",
      left: "35px",
      zIndex: "100",
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
      opacity: "1",
      width: "30px",
      right: "35px",
      zIndex: "100",
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

export default Updates
