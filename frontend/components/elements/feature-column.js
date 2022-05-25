import { makeStyles } from "@mui/styles"
import NextImage from "./image"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import Typography from "@mui/material/Typography"

const FeatureColumn = ({ data }) => {
  const classes = useStyles()
  const buttonData = {
    url: data.buttonLink,
    newTab: false,
    text: data.buttonText,
    type: "primary",
  }
  return (
    <div className={classes.FeatureColumnCard}>
      <div className={classes.ImageContainer}>
        <NextImage layout="fill" media={data.icon} className={classes.Image} />
      </div>
      <div className={classes.FeaturedData}>
        <Typography variant="h4" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          {data.description}
        </Typography>
        {data && (
          <div className={classes.FeaturedButton}>
            <Typography variant="button">
              <ButtonLink
                button={buttonData}
                appearance={getButtonAppearance("primary", "dark")}
                key={data?.id}
              />
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  FeatureColumnCard: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    padding: "10%",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
    },
  },
  ImageContainer: {
    width: "30%",
    position: "static",
    [theme.breakpoints.down("md")]: {
      width: "20%",
    },
  },
  FeaturedData: {
    marginLeft: "6%",
    display: "flex",
    flexDirection: "column",
    minHeight: "164px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      minHeight: "auto",
      alignItems: "center",
    },
    "& h1": {
      letterSpacing: "0.6px",
      marginBottom: "0%",
      textAlign: "left",
      fontSize: "26px",
      fontWeight: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
    "& p": {
      letterSpacing: "0.32px",
      fontSize: "16px",
      marginTop: "0%",
      opacity: "70%",
      minHeight: "87px",
      margin: 0,
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
  },
  FeaturedButton: {
    marginTop: "auto",
    "& a": {
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1, 3),
      backgroundColor: theme.palette.backgroundColor.main,
      borderRadius: 25,
      float: "left",
    },
  },
}))

export default FeatureColumn
