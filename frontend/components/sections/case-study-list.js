import React, { useState, useEffect } from "react"
import { Box, Container, Grid, Typography } from "@mui/material"
import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import { fetchcaseStudiesAPI } from "utils/apis/fetch-api"

const CaseStudyList = ({ data }) => {
  const classes = useStyles()
  const [caseData, setCaseData] = useState([])

  const fetchCaseData = async () => {
    try {
      const response = await fetchcaseStudiesAPI()
      setCaseData(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCaseData()
  }, [])
  return (
    <>
      <Box
        className={`${classes.caseStudiesContainer} ${
          classes[
            data?.caseStudiesList_background === "light"
              ? "caseStudiesListLightContainer"
              : "caseStudiesListDarkContainer"
          ]
        }`}
      >
        <Container maxWidth="xl">
          <Box
            className={`${classes.caseStudiesContentArea} ${
              classes[
                data?.caseStudiesList_background === "light"
                  ? "caseStudiesListDarkContentArea"
                  : "caseStudiesListLightContentArea"
              ]
            }`}
          >
            <Grid
              container
              maxWidth="xl"
              spacing={3}
              justifyContent="center"
              alignItems="flex-start"
            >
              {caseData?.map((caseData, index) => (
                <Grid item md={6} xs={12} key={index}>
                  <Box>
                    <NextImage media={caseData.attributes.image} />
                  </Box>
                  <Typography variant="h5">
                    {caseData.attributes.title}
                  </Typography>
                  <Typography variant="body1">
                    {caseData.attributes.excerpt}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  caseStudiesContainer: {
    padding: theme.spacing(15, 17.37, 0, 17.37),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(9.3, 1.8, 9.3, 1.8),
    },
  },
  caseStudiesListLightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  caseStudiesListDarkContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
  caseStudiesContentArea: {
    "& .MuiTypography-h5": {
      padding: theme.spacing(3.6, 0, 2.25, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.87, 0, 1.87, 0),
      },
    },
    "& .MuiTypography-body1": {
      padding: theme.spacing(0, 0, 18.75, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 0, 6.25, 0),
      },
    },
  },
  caseStudiesListDarkContentArea: {
    "& .MuiTypography-h5": {
      color: theme.palette.secondary.contrastText,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.secondary.contrastText,
    },
  },
  caseStudiesListLightContentArea: {
    "& .MuiTypography-h5": {
      color: theme.palette.primary.contrastText,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.primary.contrastTextColor,
    },
  },
}))

export default CaseStudyList
