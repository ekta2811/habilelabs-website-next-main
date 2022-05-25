import { makeStyles } from "@mui/styles"
import { Box, Typography } from "@mui/material"

const OurApproachCard = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.approachContentArea}>
        <Typography variant="h4" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body1">{data.description}</Typography>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  approachContentArea: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1),
    },
    "& .MuiTypography-h4": {
      height: "100px",
      fontWeight: "400",
      [theme.breakpoints.down("md")]: {
        height: "50px",
        // lineHeight: "24px",
      },
    },
    "& .MuiTypography-body1": {
      [theme.breakpoints.down("md")]: {
        // lineHeight: "18px",
        marginBottom: theme.spacing(4),
      },
    },
  },
}))

export default OurApproachCard
