import * as React from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import RelatedInsightsCard from "../elements/related-insights-card"

const RelatedInsights = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Container
          maxWidth="xl"
          className={`${
            classes[
              data?.theme === "light"
                ? "relatedInsightsLightContainer"
                : "relatedInsightsDarkContainer"
            ]
          }`}
        >
          <Box
            className={`${classes.relatedInsightsContentArea} ${
              classes[
                data?.theme === "light"
                  ? "relatedInsightsLightContentArea"
                  : "relatedInsightsDarkContentArea"
              ]
            }`}
          >
            <Typography variant="h3" gutterBottom>
              {data?.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {data?.description}
            </Typography>
          </Box>

          <Box className={classes.relatedInsightsCard}>
            <Grid container spacing={2} className={classes.usingCustomFlex}>
              {data?.insights?.map((insightData, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  className={`${classes.customChild} ${
                    classes[data?.insights?.length < 3 ? "gridTwoChild" : ""]
                  }`}
                >
                  <RelatedInsightsCard insightData={insightData} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {data.button && (
            <Box className={classes.relatedInsightsbActionButton}>
              <Typography variant="button">
                <ButtonLink
                  button={data.button}
                  appearance={getButtonAppearance(data.button.type, "dark")}
                  key={data.button.id}
                />
              </Typography>
            </Box>
          )}
        </Container>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  relatedInsightsLightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  relatedInsightsDarkContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
  relatedInsightsContentArea: {
    textAlign: "center",
    padding: theme.spacing(15, 45.25, 0, 45.25),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 4.4, 0, 4.4),
    },
    "& .MuiTypography-subtitle1": {
      [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(0),
      },
    },
  },
  relatedInsightsDarkContentArea: {
    color: theme.palette.primary.contrastText,
  },
  relatedInsightsLightContentArea: {
    color: theme.palette.secondary.contrastText,
  },
  relatedInsightsCard: {
    padding: theme.spacing(3.8, 12, 3.8, 12),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.8, 1.8, 9, 1.8),
    },
    "& .MuiGrid-root": {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        flexDirection: "inherit",
      },
    },
  },
  relatedInsightsbActionButton: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(6.25, 0, 15, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.25, 1.25, 9.3, 1.25),
    },
    "& a": {
      "& div": {
        padding: theme.spacing(1.3, 8.25),
        borderRadius: 22,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
  usingCustomFlex: {
    height: "650px",
  },
  customChild: {
    flex: "0 0 50%",
    "&:first-child": {
      flex: "0 0 100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:nth-child(2)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
      "&:nth-child(3)": {
        maxWidth: "50%",
        flexBasis: "96%",
      },
    },
    "& div": {
      height: "100%",
    },
  },
  gridTwoChild: {
    flex: "0 0 100%",
  },
}))

export default RelatedInsights
