import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import { Grid, Typography } from "@mui/material"
import Link from "next/link"
import moment from "moment"

const BlogsCard = ({ blogsData }) => {
  const classes = useStyles()                                   
  return (
    <>
      <Grid item xs={3}>
        <Link href={blogsData?.attributes?.slug || "#"} passHref>
          <a target="_blank">
            <NextImage
              width="268px"
              height="149px"
              media={blogsData.attributes.image}
            />
          </a>
        </Link>
      </Grid>
      <Grid item xs={9} className={classes.blogsContent}>
        <Typography variant="h6">
          <Link href={blogsData?.attributes?.slug || "#"} passHref>
            <a target="_blank" className={classes.blogsLink}>
              {blogsData.attributes.title}
            </a>
          </Link>
        </Typography>
        <Typography variant="subtitle1">
          {moment(blogsData.attributes.publishedDate).format("ll")}
        </Typography>
      </Grid>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  blogsContent: {
    color: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(3),
    },
    "& .MuiTypography-h6": {
      lineHeight: "30px",
      [theme.breakpoints.down("md")]: {
        lineHeight: "18px",
      },
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: 300,
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1, 2, 0, 0),
      },
    },
  },
  blogsLink: {
    color: theme.palette.primary.contrastText,
  },
}))

export default BlogsCard
