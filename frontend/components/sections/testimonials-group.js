import React, { useRef } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Container } from "@mui/material"
import TestimonialCard from "../elements/testimonials-card"
import { Rerousel } from "rerousel"
import Typography from "@mui/material/Typography"

const Testimonial = ({ data }) => {
  const classes = useStyles()
  const refLogo = useRef(null)
  return (
    <div className={classes.TestimonialContainer}>
      <Container maxWidth="xl">
        <Box className={classes.testimonialContentArea}>
          <Typography variant="h3" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {data.description}
          </Typography>
        </Box>
        <Box className={classes.testimonialCardContainerr}>
          <Rerousel interval={3000} itemRef={refLogo}>
            {data?.testimonials?.map((data, index) => (
              <div key={index} className={classes.containerr} ref={refLogo}>
                <TestimonialCard data={data} />
              </div>
            ))}
          </Rerousel>
        </Box>
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  TestimonialContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(12.5, 0),
  },
  testimonialContentArea: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    lineHeight: "15px",
    opacity: 1,
  },
  testimonialCardContainerr: {
    color: theme.palette.primary.contrastText,
    display: "flex",
  },
  containerr: {
    flex: "0 0 auto",
    maxWidth: "45%",
    marginRight: 10,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100% !important",
      flex: "0 0 97%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      flex: "0 0 94%",
    },
  },
}))

export default Testimonial
