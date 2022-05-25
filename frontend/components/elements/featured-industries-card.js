import * as React from "react"
import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"
import { InView } from "react-intersection-observer"

const FeaturedIndustriesCard = ({ data }) => {
  const classes = useStyles()
  const [inView, setInView] = React.useState(false)
  return (
    <>
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <Box
            ref={ref}
            className={`${classes.featuredIndustriesCardContainer} ${
              classes[inView ? "sectionAnimate" : ""]
            }`}
          >
            <Grid container spacing={2}>
              <Grid
                container
                justifyContent="flex-start"
                className={classes.IndustriesCardTitle}
              >
                <div className={classes.featuredIndustriesCardContentArea}>
                  <Typography variant="h4">{data.title}</Typography>
                  <Typography variant="subtitle1">
                    {data.description}
                  </Typography>
                </div>
              </Grid>
              <Grid
                container
                justifyContent="flex-end"
                className={classes.featuredIndustriesCardImage}
              >
                <NextImage width="200px" height="170px" media={data.icon} />
              </Grid>
            </Grid>
          </Box>
        )}
      </InView>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  featuredIndustriesCardContainer: {
    backgroundColor: theme.palette.primary.main,
    transform: "scale(0.2)",
    transition: "transform 1s linear",
    display: "grid",
    minHeight: "100%",
    minWidth: "100%",
    padding: theme.spacing(4),
  },
  sectionAnimate: {
    transform: "scale(1)",
  },
  IndustriesCardTitle: {
    width: "70% !important",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
    },
  },
  featuredIndustriesCardContentArea: {
    color: theme.palette.primary.contrastText,
    "& .MuiTypography-h4": {
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "200",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(3, 0),
      },
    },
  },
  featuredIndustriesCardImage: {
    paddingTop: theme.spacing(3),
    width: "30% !important",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      paddingTop: theme.spacing(0),
    },
  },
}))

export default FeaturedIndustriesCard
