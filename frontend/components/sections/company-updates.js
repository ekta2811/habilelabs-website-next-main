import React from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container, Typography, Grid } from "@mui/material"
import Updates from "../elements/updates"

const CompanyUpdates = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Box
          className={`${classes.companyUpdatesContainer} ${
            classes[
              data?.companyUpdates_background === "light"
                ? "companyUpdatesDarkContainer"
                : "companyUpdatesLightContainer"
            ]
          }`}
        >
          <Container maxWidth="lg">
            <Box
              className={`${classes.companyUpdatesContentArea} ${
                classes[
                  data?.companyUpdates_background === "light"
                    ? "companyUpdatesDarkContentArea"
                    : "companyUpdatesLightContentArea"
                ]
              }`}
            >
              <Box>
                <main>
                  <div>
                    <Typography variant="h3">{data.title}</Typography>
                    <Typography variant="subtitle1">
                      {data.description}
                    </Typography>
                  </div>
                </main>
              </Box>
              <Box>
                <Container>
                  <Grid container spacing={2}>
                    {data?.updates?.map((updates, index) => (
                      <Grid item xs={6} key={index}>
                        <Updates updates={updates} data={data} />
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  companyUpdatesContainer: {
    textAlign: "center",
    padding: theme.spacing(15, 0, 2.2, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0, 1.9, 0),
    },
  },
  companyUpdatesDarkContainer: {
    background: theme.palette.secondary.dark,
  },
  companyUpdatesLightContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  companyUpdatesContentArea: {
    padding: theme.spacing(0, 17.3, 0, 17.3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  companyUpdatesLightContentArea: {
    color: theme.palette.primary.contrastText,
  },
  companyUpdatesDarkContentArea: {
    color: theme.palette.secondary.contrastText,
  },
}))

export default CompanyUpdates
