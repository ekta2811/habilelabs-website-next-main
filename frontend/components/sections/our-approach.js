import * as React from "react"
import { makeStyles } from "@mui/styles"
import { Grid, Typography } from "@mui/material"
import OurApproachCard from "../elements/our-approach-card"

const OurApproach = ({ data }) => {
  const classes = useStyles()
  const [inView, setInView] = React.useState(false)

  return (
    <>
      <div className={classes.ourApproachContainer}>
        <div className={classes.ourApproachHeading}>
          <Typography variant="h3">{data?.title}</Typography>
          <Typography variant="subtitle1">{data?.description}</Typography>
        </div>
        <div className={classes.ourApproachContentArea}>
          <Grid container spacing={2}>
            {data?.list?.map((data, index) => (
              <Grid item xs={12} md={4} key={index}>
                <OurApproachCard data={data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  ourApproachContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(15, 9, 15, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 5.8, 5.3, 5.8),
    },
  },
  ourApproachHeading: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,
  },
  ourApproachContentArea: {
    paddingTop: theme.spacing(5.5),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(0),
    },
  },
}))

export default OurApproach
