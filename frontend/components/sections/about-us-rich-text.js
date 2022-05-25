import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"

const AboutUsRichText = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.richBg}>
      <Grid container-fluid={+true} className={classes.aboutRich}>
        <Grid className={classes.contentArea} item xs={12} md={7}>
          <Typography variant="h1">{data?.title}</Typography>
          <Typography variant="h6">{data?.description}</Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.richBgImg}>
          <NextImage media={data.backgroundImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  richBg: {
    background: theme.palette.primary.main,
  },
  richBgImg: {
    "& span": {
      height: "100% !important",
      [theme.breakpoints.down("md")]: {
        height: "214px !important",
      },
    },
    "& img": {
      objectFit: "cover !important",
    },
  },
  aboutRich: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse !important",
      position: "relative",
    },
  },
  contentArea: {
    color: theme.palette.headingColor.main,
    "& .MuiTypography-h6": {
      padding: theme.spacing(6.25, 2.2, 15, 10.3),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6.25, 5.25, 9.3, 1.9),
      },
    },
    "& .MuiTypography-h1": {
      padding: theme.spacing(15, 0, 0, 10.3),
      zIndex: 1,
      position: "relative",
      marginRight: "-50%",
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(0),
        padding: theme.spacing(11.9, 8, 6.9, 1.9),
        position: "absolute",
        top: 0,
        left: 0,
      },
    },
  },
}))

export default AboutUsRichText
