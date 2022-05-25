import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import OfferingsCard from "../elements/offerings-card"

const OurOfferings = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.offeringsSection}>
        <Container maxWidth="xl">
          <Box className={classes.offeringsHeadingArea}>
            <main>
              <div className={classes.offeringsTopHeadService}>
                <Typography variant="h3" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="subtitle1">{data.description}</Typography>
              </div>
            </main>
          </Box>

          <Grid container spacing={3}>
            {data?.offerings?.map((offeringData, index) => (
              <Grid item xs={6} md={4} key={index}>
                <OfferingsCard offeringData={offeringData} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  offeringsSection: {
    padding: theme.spacing(15, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 2),
    },
  },
  offeringsHeadingArea: {
    textAlign: "center",
  },
}))

export default OurOfferings
