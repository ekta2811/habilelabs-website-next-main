import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"

const ServiceModelCard = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.serviceModelCardContainer}>
        <div className={classes.serviceModelCardContentArea}>
          <Typography variant="h4">{data.title}</Typography>
          <Typography variant="subtitle1">{data.description}</Typography>
        </div>
        <Grid
          container
          justifyContent="flex-end"
          className={classes.serviceModelCardContentImg}
        >
          <NextImage width="140%" height="120%" media={data.icon} />
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  serviceModelCardContainer: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: 450,
    display: "grid",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      minHeight: 320,
    },
  },
  serviceModelCardContentArea: {
    color: theme.palette.primary.contrastText,
    "& .MuiTypography-h4": {
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        width: "100%",
      },
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "200",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(3, 0),
      },
    },
  },
  serviceModelCardContentImg: {
    [theme.breakpoints.down("md")]: {
      width: "80px",
      float: "right",
    },
  },
}))

export default ServiceModelCard
