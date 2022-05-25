import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import Markdown from "react-markdown"

const ContactUsAddress = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Container>
          <Box className={classes.addressContentArea}>
            <Typography variant="h3">{data?.title}</Typography>
            <Typography variant="subtitle1">{data?.description}</Typography>
          </Box>
          <Grid container spacing={2} className={classes.contentData}>
            <Grid className={classes.contentMap} justifyContent="flex-start">
              <p>
                <iframe
                  className={classes.contentMaplink}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6569685761306!2d75.76888991421998!3d26.850860783154218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a31add3b85%3A0x3c6f6cd6567e2aa2!2sHabilelabs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1649136886512!5m2!1sen!2sin"
                ></iframe>
              </p>
            </Grid>
            <Grid justifyContent="flex-end" className={classes.contentAddress}>
              <Typography variant="h4">Office Address</Typography>
              <Typography variant="subtitle1">{data?.Address}</Typography>
              <Typography variant="h4">Contact Number</Typography>
              <Typography
                className={classes.contactContent}
                variant="subtitle1"
              >
                <Markdown>{data?.contactNumbers}</Markdown>
              </Typography>
              <Typography variant="h4">Email</Typography>
              <Typography className={classes.emailContent} variant="subtitle1">
                <Markdown>{data?.emails}</Markdown>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  addressContentArea: {
    paddingTop: theme.spacing(15),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(0),
    },
  },
  contentData: {
    padding: "50px 0 98px 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(0),
      margin: theme.spacing(0),
    },
  },
  contentAddress: {
    width: "25% !important",
    paddingLeft: theme.spacing(7.5),
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      padding: theme.spacing(6.25, 0, 0, 0),
    },
    "& .MuiTypography-subtitle1": {
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 3.8, 0),
      },
    },
  },
  contentMaplink: {
    border: "none",
    height: "530px",
    width: "100% !important",
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
  },
  contentMap: {
    width: "73%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      padding: theme.spacing(0),
    },
  },
  contactContent: {
    "& p": {
      width: "150px",
      lineHeight: "35px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
  emailContent: {
    "& p": {
      lineHeight: "30px",
    },
  },
}))

export default ContactUsAddress
