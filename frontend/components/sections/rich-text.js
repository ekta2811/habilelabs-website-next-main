import PropTypes from "prop-types"
import Markdown from "react-markdown"
import { makeStyles } from "@mui/styles"
import Container from "@mui/material/Container"

const RichText = ({ data }) => {
  const classes = useStyles()
  return (
    <div
      className={`${classes.markDown} ${
        classes[data.background == "primary" ? "primary" : ""]
      }`}
    >
      <Container maxWidth="xl">
        <Markdown
          className={
            data.aligned === "centered"
              ? classes.centerData
              : data.aligned === "left"
              ? classes.leftData
              : classes.rightData
          }
        >
          {data.content}
        </Markdown>
      </Container>
    </div>
  )
}

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

const useStyles = makeStyles((theme) => ({
  markDown: {
    background: theme.palette.secondary.dark,
    padding: theme.spacing(15, 11),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 2),
    },
    "& p": {
      color: theme.palette.secondary.contrastText,
      margin: 0,
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
        lineHeight: "30px",
      },
      "& img": {
        margin: "0 5px -17px",
        display: "initial",
        [theme.breakpoints.down("md")]: {
          margin: theme.spacing(0),
          width: "25px",
        },
      },
    },
  },
  primary: {
    background: theme.palette.primary.main,
    "& p": {
      color: theme.palette.primary.contrastText,
      width: "80%",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
  centerData: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: "37px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  leftData: {
    textAlign: "left",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  rightData: {
    textAlign: "right",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: "500",
  },
}))

export default RichText
