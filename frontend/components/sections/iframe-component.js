import { makeStyles } from "@mui/styles"
import { Box, Container } from "@mui/material"

const IframeComponent = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Container>
        <div>
          <iframe className={classes.frame} src={data.url}></iframe>
        </div>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.secondary.dark,
    padding: theme.spacing(7.5, 0),
  },
  frame: {
    border: "none",
    width: "100%",
    height: "900px",
  },
}))

export default IframeComponent
