import { makeStyles } from "@mui/styles"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { CardActionArea } from "@mui/material"
import { Grid, Typography } from "@mui/material"
import Link from "next/link"
import NextImage from "../elements/image"

const OfferingsCard = ({ offeringData }) => {
  const classes = useStyles()
  return (
    <Card className={classes.offeringsCardContainer}>
      {offeringData?.url === null ? (
        <CardActionArea className={classes.offeringsCardLink}>
          <CardContent className={classes.offeringsCardContentArea}>
            <Typography variant="h4">{offeringData.title}</Typography>
            <Typography variant="subtitle1">
              {offeringData.description}
            </Typography>
            <Grid container justifyContent="flex-end">
              <NextImage width="34" height="16" media={offeringData.icon} />
            </Grid>
          </CardContent>
        </CardActionArea>
      ) : (
        <Link href={offeringData?.url || "#"} passHref>
          <CardActionArea>
            <CardContent className={classes.offeringsCardContentArea}>
              <Typography variant="h4">{offeringData.title}</Typography>
              <Typography variant="subtitle1">
                {offeringData.description}
              </Typography>
              <Grid container justifyContent="flex-end">
                <NextImage width="34" height="16" media={offeringData.icon} />
              </Grid>
            </CardContent>
          </CardActionArea>
        </Link>
      )}
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  offeringsCardContainer: {
    display: "grid",
    borderRadius: 0,
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      display: "inherit",
      border: "1px solid " + theme.palette.borderColor.main,
    },
  },
  offeringsCardLink: {
    "&:hover": {
      cursor: "default",
    },
  },
  offeringsCardContentArea: {
    minHeight: 280,
    border: "1px solid " + theme.palette.borderColor.main,
    display: "flex",
    flexDirection: "column",
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down("md")]: {
      border: 0,
      minHeight: 355,
    },
    "& .MuiTypography-h4": {
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 3, 0),
        fontSize: "14px",
      },
    },
    "& .MuiTypography-subtitle1": {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 4, 0),
      },
    },
  },
}))

export default OfferingsCard
