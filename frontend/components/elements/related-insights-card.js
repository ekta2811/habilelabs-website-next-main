import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import { Box, Typography } from "@mui/material"

const RelatedInsightsCard = ({ insightData }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.relatedInsightsCardContainer}>
        <NextImage
          width="546px"
          height="297px"
          objectFit="cover"
          media={insightData.icon}
          className={classes.relatedInsightsCardImage}
        />
        <Typography className={classes.relatedInsightsCardText} variant="h6">
          {insightData.title}
        </Typography>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  relatedInsightsCardContainer: {
    display: "grid",
    position: "relative",
    textAlign: "center",
  },
  relatedInsightsCardText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
    color: theme.palette.secondary.dark,
  },
}))

export default RelatedInsightsCard
