import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import Markdown from "react-markdown"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import NextImage from "../elements/image"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepContent from "@mui/material/StepContent"
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import IconButton from "@mui/material/IconButton"

const WorkLife = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const buttonData = {
    url: data.featured.buttonLink,
    newTab: false,
    text: data.featured.buttonText,
    type: "primary",
  }
  const classes = useStyles()
  return (
    <>
      <Box className={classes.workLifeContainer}>
        <Container>
          <Box className={classes.workLifeContentArea}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="subtitle1">{data.shortDescription}</Typography>
          </Box>

          <Grid container spacing={0}>
            <Grid
              className={classes.workLifeContentImage}
              justifyContent="flex-start"
              item
              xs={12}
              md={6}
            >
              <Container>
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  variant="progress"
                  className={classes.stepperContent}
                >
                  {data?.images?.data?.map((key, index) => {
                    let newImages = {
                      data: key,
                    }
                    return (
                      <Step key={index}>
                        <StepContent className={classes.stepContent}>
                          <Grid container spacing={2}>
                            <Grid item xs={10}>
                              <NextImage
                                key={index}
                                width="546"
                                height="650"
                                media={newImages}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={2}
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
                                    disabled={
                                      index + 1 === data?.images?.data?.length
                                    }
                                    className={
                                      index + 1 === data?.images?.data?.length
                                        ? classes.stepHandleDisabledIcon
                                        : classes.stepHandleIcon
                                    }
                                  >
                                    <KeyboardArrowDownIcon />
                                  </IconButton>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </StepContent>
                      </Step>
                    )
                  })}
                </Stepper>
              </Container>
            </Grid>

            <Grid justifyContent="flex-end" item xs={12} md={6}>
              <Box className={classes.workLifeDescription}>
                <Markdown>{data.description}</Markdown>
              </Box>

              <Box className={classes.workLifeBox}>
                <div className={classes.workLifeBoxContent}>
                  <Typography variant="body2">{data.featured.title}</Typography>
                  <Typography variant="h2">
                    {data.featured.description}
                  </Typography>
                </div>
                <Box className={classes.workLifebActionButton}>
                  <Typography variant="button">
                    <ButtonLink
                      button={buttonData}
                      appearance={getButtonAppearance("primary", "dark")}
                      key={data?.id}
                    />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  workLifeContainer: {
    padding: theme.spacing(15, 0, 0, 0),
  },
  workLifeContentArea: {
    textAlign: "center",
  },
  workLifeContentImage: {
    paddingRight: theme.spacing(6),
  },
  stepperContent: {
    position: "relative",
    "& span": {
      "&.MuiStepConnector-line": {
        display: "none",
      },
    },
  },
  stepContent: {
    position: "absolute",
    top: 0,
    height: "100%",
    "& .MuiCollapse-wrapper": {
      width: "112% !important",
    },
    "& .MuiGrid-root": {
      paddingRight: theme.spacing(3),
    },
  },
  stepHandleButton: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  arrowIcon: {
    position: "absolute",
    right: 0,
  },
  stepHandleDisabledIcon: {
    opacity: "0.2",
    color: theme.palette.secondary.light + "!important",
    borderRadius: "14px",
    height: "23px",
    width: "23px",
    border: "1px solid" + theme.palette.secondary.light,
  },
  stepHandleIcon: {
    color: theme.palette.secondary.light,
    borderRadius: "14px",
    height: "23px",
    width: "23px",
    border: "1px solid" + theme.palette.secondary.light,
  },
  workLifeDescription: {
    fontSize: "16px",
    paddingTop: "13px",
    "& p": {
      lineHeight: "1.5rem",
      fontWeight: 400,
    },
    "& ul": {
      width: "110%",
      padding: "0 17px 20px",
      margin: 0,
      float: "left",
      "& li": {
        width: "49%",
        float: "left",
        margin: "1rem 0",
        fontWeight: 400,
        "&:nth-child(2n)": {
          marginLeft: "1%",
        },
      },
    },
  },
  workLifeBox: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    float: "left",
    padding: theme.spacing(6, 0, 6, 6),
    "&:after": {
      width: "600%",
      height: "100%",
      background: theme.palette.primary.main,
      position: "absolute",
      bottom: 0,
      left: "100%",
      content: "''",
      zIndex: 1,
    },
  },
  workLifeBoxContent: {
    "& .MuiTypography-body2": {
      color: theme.palette.primary.light,
      fontWeight: 400,
    },
    "& .MuiTypography-h2": {
      color: theme.palette.primary.contrastText,
      paddingTop: theme.spacing(2),
      fontWeight: 300,
    },
  },
  workLifebActionButton: {
    padding: theme.spacing(10, 0, 5, 0),
    display: "flex",
    "& a": {
      "& div": {
        padding: theme.spacing(1, 10),
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
}))

export default WorkLife
