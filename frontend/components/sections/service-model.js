import React, { useRef } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import ServiceModelCard from "../elements/service-model-card"
import { InView } from "react-intersection-observer"
import { Rerousel } from "rerousel"

const ServiceModel = ({ data }) => {
  const classes = useStyles()
  const [inView, setInView] = React.useState(false)
  const refLogo = useRef(null)

  return (
    <>
      <Box
        className={`${classes.serviceModelContainer} ${
          classes[
            data?.service_background === "dark"
              ? "serviceModelDarkContainer"
              : "serviceModelLightContainer"
          ]
        }`}
      >
        <Container>
          <Box
            className={`${classes.serviceModelContentArea} ${
              classes[
                data?.service_background === "dark"
                  ? "serviceModelDarkContentArea"
                  : "serviceModelLightContentArea"
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
          {data?.modelFeatures?.length == 3 ? (
            <InView onChange={setInView}>
              {({ ref, inView }) => (
                <Box
                  ref={ref}
                  className={`${classes.serviceModelCard} ${
                    classes[inView ? "sectionAnimate" : ""]
                  }`}
                >
                  <Grid
                    container
                    spacing={2}
                    className={classes.serviceCardModel}
                  >
                    {data?.modelFeatures?.map((data, index) => (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        key={index}
                        className={classes.serviceModelInnerCard}
                      >
                        <ServiceModelCard data={data} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </InView>
          ) : (
            <Rerousel interval={3000} itemRef={refLogo}>
              {data?.modelFeatures?.map((data, index) => (
                <div key={index} className={classes.containerr} ref={refLogo}>
                  <ServiceModelCard data={data} />
                </div>
              ))}
            </Rerousel>
          )}
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  serviceModelContainer: {
    padding: theme.spacing(15, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 2),
    },
  },
  serviceModelDarkContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  serviceModelLightContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  serviceModelContentArea: {
    textAlign: "center",
  },
  serviceModelDarkContentArea: {
    color: theme.palette.primary.contrastText,
  },
  serviceModelLightContentArea: {
    color: theme.palette.secondary.contrastText,
  },
  serviceModelCard: {
    transform: "scale(0.2)",
    transition: "transform 1.2s linear",
  },
  serviceCardModel: {
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0",
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "revert !important",
      maxWidth: "70% !important",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "revert !important",
      maxWidth: "100% !important",
    },
  },
  serviceModelInnerCard: {
    [theme.breakpoints.down("md")]: {
      flex: "0 0 96%",
      maxWidth: "85% !important",
    },
  },
  containerr: {
    flex: "0 0 36%",
    marginRight: 24,
    [theme.breakpoints.down("md")]: {
      flex: "0 0 90%",
      marginRight: 10,
    },
  },
  sectionAnimate: {
    transform: "scale(1)",
  },
}))

export default ServiceModel
