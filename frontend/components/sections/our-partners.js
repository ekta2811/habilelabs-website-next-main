import React, { useRef } from "react"
import { makeStyles, useTheme } from "@mui/styles"
import { Box, Container, Typography, Grid } from "@mui/material"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import { Rerousel } from "rerousel"
import NextImage from "../elements/image"

const OurPartners = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const refLogo = useRef(null)
  return (
    <>
      <div>
        <Box className={classes.ourPartnersSection}>
          <Container maxWidth="xl">
            <Box className={classes.ourPartnersHeader}>
              <Typography variant="h3" align="center" component="div">
                {data.title}
              </Typography>
              <Player
                autoplay
                loop
                speed={0.5}
                src={data.animation}
                className={classes.partnerAnimation}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </Box>
            <Box>
              <Rerousel interval={3000} itemRef={refLogo}>
                {data?.stackholders?.map((stack, index) => {
                  return (
                    <Box
                      key={index}
                      className={classes.partnersCardBox}
                      sx={{ width: "100%" }}
                      ref={refLogo}
                    >
                      <Container maxWidth="xl">
                        <Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <NextImage key={stack.logo} media={stack.logo} />
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </Box>
                  )
                })}
              </Rerousel>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  ourPartnersSection: {
    padding: theme.spacing(15, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0, 9, 0),
    },
  },

  ourPartnersHeader: {
    color: theme.palette.secondary.contrastText,
    "& .lf-player-container": {
      position: "relative",
      margin: "-190px 50px 0 50px",
      zIndex: "-1",
      [theme.breakpoints.down("md")]: {
        marginTop: "-98px",
      },
    },
  },
  partnerAnimation: {
    height: "350px",
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
  },
  partnersCardBox: {
    flex: "0 0 25%",
    [theme.breakpoints.down("md")]: {
      flex: "0 0 44%",
      paddingLeft: "0px",
    },
    "& .MuiGrid-root": {
      padding: "0px",
    },
  },
}))

export default OurPartners
