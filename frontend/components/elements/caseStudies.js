import * as React from "react"
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import NextImage from "../elements/image"

const CaseStudies = ({ caseStudy, data }) => {
  const classes = useStyles()
  return (
    <div className={classes.removeShadow}>
      <Box
        className={`${classes.caseStudiesContentArea} ${
          classes[
            data?.caseStudies_background === "dark"
              ? "relatedCaseStudiesLightContentArea"
              : "relatedCaseStudiesDarkContentArea"
          ]
        }`}
      >
        <Box>
          <NextImage media={caseStudy.image} />
        </Box>
        <Typography variant="h6" align="left">
          {caseStudy.title}
        </Typography>
        <Typography variant="body2" align="left">
          {caseStudy.description}
        </Typography>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  removeShadow: {
    boxShadow: "none",
    borderRadius: 0,
  },
  relatedCaseStudiesLightContentArea: {
    "& .MuiTypography-h6": {
      color: theme.palette.secondary.dark,
      padding: theme.spacing(1.8, 0, 1.2, 0),
    },
    "& .MuiTypography-body2": {
      color: theme.palette.secondary.dark,
    },
  },
  relatedCaseStudiesLightContentArea: {
    "& .MuiTypography-h4": {
      color: theme.palette.secondary.dark,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.secondary.dark,
    },
  },
  relatedCaseStudiesDarkContentArea: {
    "& .MuiTypography-h6": {
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1.8, 0, 1.2, 0),
    },
    "& .MuiTypography-body2": {
      color: theme.palette.secondary.contrastText,
    },
  },
}))

export default CaseStudies
