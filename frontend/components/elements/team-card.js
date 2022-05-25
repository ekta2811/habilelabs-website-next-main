import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import { Grid, Typography } from "@mui/material"

const TeamCard = ({ teamdata }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NextImage media={teamdata.attributes.image} />
          <div className={classes.teamDescription}>
            <Typography variant="h5">{teamdata.attributes.name}</Typography>
            <Typography variant="subtitle1">
              {teamdata.attributes.designation}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  teamDescription: {
    color: theme.palette.primary.contrastText,
    textAlign: "left",
    "& .MuiTypography-h5": {
      paddingTop: theme.spacing(2.5),
    },
    "& .MuiTypography-subtitle1": {
      padding: theme.spacing(1.8, 0, 9.3, 0),
    },
  },
}))

export default TeamCard
