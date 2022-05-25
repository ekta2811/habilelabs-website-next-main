import React from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import Gallery from "../elements/gallery"

const WorkCulture = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Container
          maxWidth="xl"
          className={`${classes.workContainer} ${
            classes[
              data?.culture_background === "dark"
                ? "workDarkContainer"
                : "workLightContainer"
            ]
          }`}
        >
          <Box
            className={`${classes.workCultureHeading} ${
              classes[
                data?.culture_background === "dark"
                  ? "darkWorkCultureHeading"
                  : "lightWorkCultureHeading"
              ]
            }`}
          >
            <Typography variant="h3" align="center">
              {data?.title}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {data?.description}
            </Typography>
          </Box>
          <Box className={classes.workCultureCards}>
            <Grid container spacing={2} className={classes.usingCustomFlex}>
              {data?.galleries?.map((gallery, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  key={index}
                  className={`${classes.customChild}`}
                >
                  <Gallery gallery={gallery} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  workContainer: {
    padding: theme.spacing(15, 0, 15, 0),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  workDarkContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
  workLightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  workCultureHeading: {
    padding: "0 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  darkWorkCultureHeading: {
    color: theme.palette.primary.contrastText,
  },
  lightWorkCultureHeading: {
    color: theme.palette.secondary.contrastText,
  },
  workCultureCards: {
    padding: theme.spacing(3.8, 12, 3.8, 12),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.8, 1.8, 9, 1.8),
    },
    "& .MuiGrid-root": {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        flexDirection: "inherit",
      },
    },
  },
  usingCustomFlex: {
    height: "650px",
  },
  customChild: {
    flex: "0 0 50%",
    "&:first-child": {
      flex: "0 0 100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:nth-child(2)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
      "&:nth-child(3)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
    },
    "& div": {
      height: "100%",
    },
  },
  gridTwoChild: {
    flex: "0 0 100%",
  },
}))

export default WorkCulture
