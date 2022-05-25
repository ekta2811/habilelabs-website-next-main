import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import FeaturedIndustriesCard from "../elements/featured-industries-card"

const FeaturedIndustries = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Box
        className={`${classes.fIContainer} ${
          classes[
            data?.industries_background === "dark"
              ? "fIDarkContainer"
              : "fILightContainer"
          ]
        }`}
      >
        <Container maxWidth="xl">
          <Box
            className={`${classes.fIContentArea} ${
              classes[
                data?.industries_background === "dark"
                  ? "fIDarkContentArea"
                  : "fILightContentArea"
              ]
            }`}
          >
            <main>
              <Typography variant="h3" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="subtitle1">{data.description}</Typography>
            </main>
          </Box>

          <Grid
            container
            spacing={2}
            className={classes.featuredIndustriesUsingCustomFlex}
          >
            {data?.featuredIndustries?.map((data, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                className={classes.featuredIndustriesCustomChild}
              >
                <FeaturedIndustriesCard data={data} />
              </Grid>
            ))}
          </Grid>

          {data.link_industries && (
            <Box className={classes.featuredIndustriesbActionButton}>
              <Typography variant="button">
                <ButtonLink
                  button={data.link_industries}
                  appearance={getButtonAppearance(
                    data.link_industries.type,
                    "dark"
                  )}
                  key={data.link_industries.id}
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
  fIContainer: {
    padding: theme.spacing(15, 17),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 2),
    },
  },
  fILightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  fIDarkContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
  fIContentArea: {
    textAlign: "center",
  },
  fILightContentArea: {
    color: theme.palette.secondary.contrastText,
  },
  fIDarkContentArea: {
    color: theme.palette.primary.contrastText,
  },
  featuredIndustriesUsingCustomFlex: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  featuredIndustriesCustomChild: {
    flex: "0 0 50%",
    [theme.breakpoints.down("md")]: {
      flex: "0 0 96%",
    },
    "&:nth-child(3)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:nth-child(1)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
      "&:nth-child(2)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
    },
  },
  featuredIndustriesbActionButton: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(7),
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

export default FeaturedIndustries
