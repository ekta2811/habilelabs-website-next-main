import { makeStyles } from "@mui/styles"
import { useRef } from "react"
import { Box, Container, Grid, Typography } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import { Rerousel } from "rerousel"
import StoryCard from "../elements/story-card"
import BlogsCard from "../elements/blogs-card"
import InsightsCard from "../elements/insights-card"

const FeaturedBlogs = ({ data }) => {
  const classes = useStyles()
  const refCard = useRef(null)
  return (
    <>
      <Box
        className={`${classes.blogsSection} ${
          classes[
            data?.blogs_background === "dark"
              ? "blogsSectionDark"
              : "blogsSectionLight"
          ]
        }`}
      >
        <Container maxWidth="xl">
          <Box
            className={`${classes.blogsHeadingArea} ${
              classes[
                data?.blogs_background === "dark"
                  ? "blogsHeadingAreaDark"
                  : "blogsHeadingAreaLight"
              ]
            }`}
          >
            <main>
              <div className={classes.blogsTopHeadService}>
                <Typography variant="h3" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="subtitle1">{data.subtext}</Typography>
              </div>
            </main>
          </Box>

          <Grid container spacing={2}>
            {data?.featured_stories?.data?.map((blogsData, index) =>
              data?.layout == "column" &&
              blogsData?.attributes?.featured &&
              data?.featured_stories?.data?.length <= 3 ? (
                <Grid item xs={12} md={4} sm={4} key={index}>
                  <InsightsCard blogsData={blogsData} data={data} />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>

          <Rerousel interval={3000} itemRef={refCard}>
            {data?.featured_stories?.data?.map((blogsData, index) =>
              data?.layout == "column" &&
              blogsData?.attributes?.featured &&
              data?.featured_stories?.data?.length > 3 ? (
                <Box
                  container
                  ref={refCard}
                  className={classes.storiesCardBox}
                  key={index}
                >
                  <StoryCard blogsData={blogsData} />
                </Box>
              ) : (
                ""
              )
            )}
          </Rerousel>

          <Grid container>
            {data?.featured_stories?.data?.map((blogsData, index) =>
              data?.layout == "row" &&
              blogsData?.attributes?.featured === false ? (
                <Grid
                  item
                  xs={12}
                  md={12}
                  container
                  className={classes.blogsCard}
                  key={index}
                >
                  <BlogsCard blogsData={blogsData} />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>

          {data.link && (
            <Box className={classes.blogsbActionButton}>
              <Typography variant="button">
                <ButtonLink
                  button={data.link}
                  appearance={getButtonAppearance(data.link.type, "dark")}
                  key={data.link.id}
                />
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  blogsSection: {
    padding: theme.spacing(15, 7),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 2),
    },
  },
  blogsSectionLight: {
    backgroundColor: theme.palette.secondary.dark,
  },
  blogsSectionDark: {
    backgroundColor: theme.palette.primary.dark,
  },
  blogsHeadingArea: {
    textAlign: "center",
  },
  blogsHeadingAreaDark: {
    color: theme.palette.primary.contrastText,
  },
  blogsHeadingAreaLight: {
    color: theme.palette.secondary.contrastText,
  },
  blogsTopHeadService: {
    width: "100%",
    float: "left",
  },
  storiesCardBox: {
    flex: "0 0 40%",
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flex: "0 0 70%",
      marginRight: theme.spacing(2),
    },
  },
  blogsCard: {
    paddingBottom: theme.spacing(5),
  },
  blogsbActionButton: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(6),
    },
    "& a": {
      "& div": {
        padding: theme.spacing(1, 10),
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1, 4),
        },
      },
    },
  },
}))

export default FeaturedBlogs
