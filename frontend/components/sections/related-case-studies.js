import React from "react"
import { makeStyles } from "@mui/styles"
import { Typography, Box, Container, Grid } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import CaseStudies from "../elements/caseStudies"

const RelatedCaseStudies = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Box
          className={`${classes.caseStudiesContainer} ${
            classes[
              data?.caseStudies_background === "light"
                ? "relatedCaseStudiesLightContainer"
                : "relatedCaseStudiesDarkContainer"
            ]
          }`}
        >
          <Container maxWidth="xl">
            <Box
              className={`${classes.caseStudiesContentArea} ${
                classes[
                  data?.caseStudies_background === "light"
                    ? "relatedCaseStudiesDarkContentArea"
                    : "relatedCaseStudiesLightContentArea"
                ]
              }`}
            >
              <Box>
                <main>
                  <div className={classes.topHeadCaseStudy}>
                    <Typography variant="h3">{data.title}</Typography>
                    <Typography variant="subtitle1">
                      {data.description}
                    </Typography>
                  </div>
                </main>
              </Box>
              <div>
                <Container className={classes.caseStudypage}>
                  <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    {data?.caseStudies?.map((caseStudy, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <CaseStudies caseStudy={caseStudy} data={data} />
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </div>
              {data.viewAllButton && (
                <Box className={classes.caseStudyButton}>
                  <ButtonLink
                    button={data.viewAllButton}
                    appearance={getButtonAppearance(
                      data.viewAllButton.type,
                      "dark"
                    )}
                    key={data.viewAllButton.id}
                  />
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      </div>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  caseStudiesContainer: {
    textAlign: "center",
    padding: theme.spacing(15, 0, 15, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0, 9.3, 0),
    },
  },
  relatedCaseStudiesLightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  relatedCaseStudiesDarkContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
  relatedCaseStudiesDarkContentArea: {
    color: theme.palette.secondary.contrastText,
  },
  relatedCaseStudiesLightContentArea: {
    color: theme.palette.primary.contrastText,
  },
  relatedCaseStudiesDarkContentArea: {
    color: theme.palette.secondary.contrastText,
  },
  relatedCaseStudiesLightContentArea: {
    color: theme.palette.primary.contrastText,
  },
  caseStudyButton: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
    "& a": {
      margin: 5,
      "& div": {
        padding: "9px 66px",
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        fontWeight: "600",
      },
    },
  },
}))

export default RelatedCaseStudies
