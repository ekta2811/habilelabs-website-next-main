import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"
import { fetchTeamList } from "utils/apis/fetch-api"
import NextImage from "../elements/image"
import { Rerousel } from "rerousel"
import TeamCard from "../elements/team-card"

const OurTeam = ({ data }) => {
  const [teamData, setTeamDaTa] = useState([])
  const classes = useStyles()
  const fetchTeamData = async () => {
    try {
      const fetchData = await fetchTeamList()
      setTeamDaTa(fetchData.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTeamData()
  }, [])
  const refCard = useRef(null)

  return (
    <>
      <Box className={classes.teamSection}>
        <Box className={classes.teamHeadingArea}>
          <main>
            <div className={classes.teamTopHeadService}>
              <Typography variant="h3" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="subtitle1">{data.description}</Typography>
            </div>
          </main>
        </Box>

        <Box className={classes.teamImage}>
          <NextImage width="807px" height="409px" media={data.featuredImage} />
        </Box>

        {data?.teamImages?.data?.map((key, index) => {
          let newImages = {
            data: key,
          }
          return (
            <Box key={index} className={classes.teamImages}>
              <NextImage width="1088px" height="618px" media={newImages} />
            </Box>
          )
        })}

        <Box>
          <Grid container className={classes.teamData}>
            <Grid item xs={5}>
              <Typography variant="h4">{data.stackholdersText}</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography className={classes.divider} variant="subtitle1">
                {data.stackholdersSubText}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box className={classes.teamContainer}>
          <Rerousel interval={3000} itemRef={refCard}>
            {teamData.map((teamdata, index) => {
              return (
                <Box key={index} className={classes.teamCardBox} ref={refCard}>
                  <TeamCard teamdata={teamdata} />
                </Box>
              )
            })}
          </Rerousel>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  teamSection: {
    padding: theme.spacing(15, 0),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
  },
  teamHeadingArea: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,
  },
  teamImage: {
    padding: theme.spacing(6.3, 34, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2.4, 6),
    },
  },
  teamImages: {
    textAlign: "center",
    padding: theme.spacing(0, 17.3, 15, 17.3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1.8, 6),
    },
  },
  teamData: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 17.3, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1.8),
    },
    "& .MuiTypography-h4": {
      paddingRight: theme.spacing(6.3),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0.5, 5, 0, 0),
      },
    },
    "& .MuiTypography-subtitle1": {
      paddingLeft: theme.spacing(6.3),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 0, 2.5),
        lineHeight: "21px",
      },
    },
  },
  divider: {
    borderLeft: "1px solid" + theme.palette.backgroundColor.main,
    height: "70px",
    [theme.breakpoints.down("md")]: {
      height: "100px",
    },
  },
  teamContainer: {
    margin: "theme.spacing(1.5)",
    padding: theme.spacing(9, 0, 0, 17.3),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1.8),
    },
  },
  teamCardBox: {
    marginRight: theme.spacing(4),
    flex: "0 0 24%",
    [theme.breakpoints.down("md")]: {
      flex: "0 0 40%",
      marginRight: theme.spacing(1.3),
    },
  },
}))

export default OurTeam
