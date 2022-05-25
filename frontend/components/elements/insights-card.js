import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import Typography from "@mui/material/Typography"
import Link from "next/link"

const InsightsCard = ({ blogsData, data }) => {
  const classes = useStyles()
  return (
    <>
      <Link href={blogsData?.attributes?.slug || "#"} passHref>
        <a target="_blank">
          <NextImage
            width="352px"
            height="200px"
            media={blogsData.attributes.image}
          />
        </a>
      </Link>
      <div className={classes.insightsDescription}>
        <Typography variant="subtitle1">
          <Link href={blogsData?.attributes?.slug || "#"} passHref>
            <a
              target="_blank"
              className={
                classes[
                  data?.blogs_background === "dark"
                    ? "insightsLinkDark"
                    : "insightsLinkLight"
                ]
              }
            >
              {blogsData.attributes.title}
            </a>
          </Link>
        </Typography>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  insightsDescription: {
    "& .MuiTypography-subtitle1": {
      width: "95%",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
      },
    },
  },
  insightsLinkDark: {
    color: theme.palette.primary.contrastText,
  },
  insightsLinkLight: {
    color: theme.palette.secondary.contrastText,
  },
}))

export default InsightsCard
