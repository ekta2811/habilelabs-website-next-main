import React, { useState } from "react"
import Container from "@mui/material/Container"
import { makeStyles } from "@mui/styles"
import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/styles"
import NextImage from "../elements/image"
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import IconButton from "@mui/material/IconButton"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import useInterval from "custom-hooks/useInterval"

const HomeFeature = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()
  const theme = useTheme()
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  useInterval(() => {
    if (activeStep !== data.services.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } else {
      setActiveStep(0)
    }
  }, 2000)
  return (
    <section className={classes.homeBottomActionBar}>
      <Container>
        <Box className={classes.featuredAboutContent}>
          <Typography variant="h3">{data?.title}</Typography>
          <Typography variant="body1">{data?.description}</Typography>
        </Box>
        <Box>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            variant="progress"
            className={classes.stepperContent}
          >
            {data?.services?.map((key, index) => {
              return (
                <Step key={index}>
                  <StepLabel className={classes.stepLabelContent} />
                  <StepContent className={classes.stepContent}>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        md={5}
                        xs={12}
                        className={classes.stepContentGrids}
                      >
                        <Typography variant="h4" gutterBottom>
                          {key?.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {key?.description}
                        </Typography>
                        {key.link && (
                          <Box className={classes.homeFeatureButton}>
                            <ButtonLink
                              button={key?.link}
                              appearance={getButtonAppearance(
                                key?.link?.type,
                                "dark"
                              )}
                              key={key?.link?.id}
                            />
                          </Box>
                        )}
                      </Grid>
                      <Grid
                        item
                        md={7}
                        xs={12}
                        className={classes.stepHandleButton}
                      >
                        <div className={classes.arrowIcon}>
                          <div>
                            <IconButton
                              variant="contained"
                              onClick={handleBack}
                              disabled={index === 0}
                              sx={{ mt: 1, mr: 1 }}
                              className={
                                index === 0
                                  ? classes.stepHandleDisabledIcon
                                  : classes.stepHandleIcon
                              }
                            >
                              <KeyboardControlKeyIcon />
                            </IconButton>
                          </div>
                          <div>
                            <IconButton
                              sx={{ mt: 1, mr: 1 }}
                              onClick={handleNext}
                              disabled={index + 1 === data?.services?.length}
                              className={
                                index + 1 === data?.services?.length
                                  ? classes.stepHandleDisabledIcon
                                  : classes.stepHandleIcon
                              }
                            >
                              <KeyboardArrowDownIcon />
                            </IconButton>
                          </div>
                        </div>
                        <NextImage width="426" height="322" media={key.image} />
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </Box>
      </Container>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
  homeBottomActionBar: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(15, 0, 15, 0),
    [theme.breakpoints.down("md")]: {
      padding: "70px 0",
    },
    "& .MuiStepContent-root": {
      borderLeft: "5px Solid " + theme.palette.borderColor.dark,
    },
  },
  featuredAboutContent: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,
  },
  stepperContent: {
    position: "relative",
    margin: theme.spacing(6, 6, 0, 6),
    "& .MuiStepConnector-line": {
      minHeight: 33,
    },
    "& .MuiStepConnector-root": {
      "&.Mui-completed, &.Mui-active": {
        marginLeft: 0,
        "& span": {
          borderLeft: "solid 5px " + theme.palette.progressbar.main,
          float: "left",
          margin: "0 0 0 12px",
          position: "relative",
          zIndex: 1,
        },
      },
    },
    "& .Mui-completed, & .Mui-active": {
      "& .MuiStepLabel-root": {
        position: "relative",
        "&:after": {
          position: "relative",
          top: 0,
          left: 12,
          width: 5,
          background: theme.palette.progressbar.main,
          content: "''",
          height: "100%",
        },
      },
    },
    "& .MuiStep-vertical": {
      "& .MuiStepLabel-root:not(.Mui-disabled)": {
        position: "relative",
        "&:after": {
          position: "absolute",
          top: 0,
          left: -18,
          zIndex: 1,
          content: "''",
          width: 5,
          height: "100%",
          background: theme.palette.progressbar.main,
        },
      },
    },
  },
  stepLabelContent: {
    marginLeft: theme.spacing(3.75),
  },
  stepContent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
  },
  stepContentGrids: {
    paddingLeft: "60px !important",
    color: theme.palette.primary.contrastText,
    "& .MuiTypography-h4": {
      fontSize: theme.typography.h4.fontSize,
      lineHeight: theme.typography.h4.lineHeight,
    },
    "& .MuiTypography-body2": {
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,
      padding: theme.spacing(2, 0, 6.25, 0),
    },
  },
  homeFeatureButton: {
    display: "flex",
    "& a": {
      "& div": {
        padding: theme.spacing(1.12, 8.25, 1.12, 8.25),
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
  arrowIcon: {
    marginRight: 50,
  },
  stepHandleButton: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  stepHandleIcon: {
    color: theme.palette.secondary.light,
    borderRadius: "14px",
    height: "23px",
    width: "23px",
    border: "1px solid " + theme.palette.secondary.light,
  },
  stepHandleDisabledIcon: {
    opacity: "0.2",
    color: theme.palette.secondary.light + " !important",
    borderRadius: "14px",
    height: "23px",
    width: "23px",
    border: "1px solid " + theme.palette.secondary.light,
  },
}))

export default HomeFeature
