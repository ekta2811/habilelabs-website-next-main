import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import { Grid } from "@mui/material"
import Link from "next/link"
import Typography from "@mui/material/Typography"

const StoryCard = ({ blogsData }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Link href={blogsData?.attributes?.slug || "#"} passHref>
            <a target="_blank">
              <NextImage
                media={blogsData.attributes.image}
                width="600px"
                height="350px"
              />
            </a>
          </Link>
          <div className={classes.storiesDescription}>
            <Typography variant="subtitle1">
              {blogsData.attributes.tags}
            </Typography>
            <Typography variant="h6">
              <Link href={blogsData?.attributes?.slug || "#"} passHref>
                <a target="_blank" className={classes.storiesLink}>
                  {blogsData.attributes.title}
                </a>
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  storiesDescription: {
    "& .MuiTypography-subtitle1": {
      color: theme.palette.progressbar.main,
      padding: theme.spacing(2, 0, 2, 0),
    },
    "& .MuiTypography-h6": {
      fontWeight: 450,
      lineHeight: "33px",
      minHeight: "70px",
      [theme.breakpoints.down("md")]: {
        lineHeight: "18px",
      },
    },
  },
  storiesLink: {
    color: theme.palette.secondary.contrastText,
  },
}))

export default StoryCard
