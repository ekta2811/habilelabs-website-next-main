import { makeStyles } from "@mui/styles"
import NextImage from "../elements/image"
import { Box, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
const TestimonialCard = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.testimonialCardContainer}>
      <div className={classes.container}>
        <div className={classes.testimonialDiv}>
          <div>
            <Grid className={classes.testimonialLogo}>
              <NextImage width="75px" height="75px" media={data.logo} />
            </Grid>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {data.name}
            </Typography>
          </div>
        </div>
        <div className={classes.testimonialContentArea}>
          <Typography variant="body1" gutterBottom>
            {data.text}
          </Typography>
        </div>
      </div>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  testimonialCardContainer: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(4, 0, 0),
    padding: theme.spacing(3.5),
    minHeight: "300px",
  },

  testimonialDiv: {
    display: "flex",
    "& h2": {
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 0,
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
        lineHeight: "18px",
      },
    },
    "& h6": {
      fontSize: 17,
      fontWeight: "normal",
      margin: 0,
      color: theme.palette.primary.contrastText,
      opacity: 0.5,
      [theme.breakpoints.down("md")]: {
        fontSize: 13,
        lineHeight: "16px",
        paddingTop: "5px",
      },
    },
  },
  testimonialContentArea: {
    color: theme.palette.primary.contrastText,
    textAlign: "left",
    letterSpacing: "0.64px",
    "& p": {
      padding: theme.spacing(4, 0),
      [theme.breakpoints.down("md")]: {
        width: "85%",
        boxSizing: "border-box",
      },
    },
  },
  testimonialLogo: {
    background: theme.palette.secondary.dark,
    borderRadius: "50%",
    width: 75,
    height: 75,
    padding: 12,
    marginRight: 17,
  },
}))

export default TestimonialCard
