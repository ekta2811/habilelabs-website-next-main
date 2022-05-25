import * as React from "react"
import Container from "@mui/material/Container"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import FeatureColumn from "../elements/feature-column"
import Lottie from "react-lottie"
import * as animationData from "./industry_services_homepage_animation.json"

const FeatureColumnGroup = ({ data }) => {
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
    <div className={classes.FeatureColumnGroupCard}>
      <Container
        className={
          data?.divider === true
            ? classes.positionRemove
            : classes.imagePosition
        }
      >
        <Grid
          className={
            data?.divider === true
              ? classes.animationNone
              : classes.featureAnimation
          }
        >
          <Lottie options={defaultOptions} />
        </Grid>
        <Grid
          container
          spacing={2}
          className={data?.divider === true ? classes.FeatureDivider : null}
        >
          {data?.features?.map((feature) => (
            <Grid
              item
              xs={12}
              md={6}
              key={feature.id}
              className={classes.featureData}
            >
              <FeatureColumn data={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  imagePosition: {
    position: "relative",
    height: "493px",
    display: "flex",
    alignItems: "center",
  },
  featureAnimation: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "45px",
  },
  animationNone: {
    display: "none",
  },
  FeatureColumnGroupCard: {
    backgroundColor: theme.palette.backgroundColor.default,
    boxSizing: "border-box",
    padding: "5.2rem",
    color: theme.palette.textColor.default,
    [theme.breakpoints.down("md")]: {
      padding: "15% 5%",
    },
    "& .MuiGrid-item": {
      [theme.breakpoints.down("md")]: {
        "&:nth-child(2)": {
          paddingLeft: "0px",
          margin: "6% 5%",
          borderTop: "solid 1px" + theme.palette.secondary.dark,
        },
      },
    },
  },
  FeatureDivider: {
    backgroundImage: "linear-gradient(#fff, #fff)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1px 100%",
    backgroundPosition: "center center",
    marginTop: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      backgroundSize: "0",
    },
  },
  featureData: {
    zIndex: 999,
  },
}))

export default FeatureColumnGroup
