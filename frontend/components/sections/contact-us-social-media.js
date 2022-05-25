import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import SocialMediaCard from "../elements/social-media-card"

const ContactUsSocialMedia = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.socialMediaContainer}>
        <Container>
          <Box className={classes.socialMediaContentArea}>
            <main>
              <div>
                <Typography variant="h3" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="subtitle1">{data.description}</Typography>
              </div>
            </main>
          </Box>

          <Grid container spacing={3}>
            {data?.socialLinks?.map((socialMediaData) => (
              <Grid item xs={2.4} key={socialMediaData._id}>
                <SocialMediaCard socialMediaData={socialMediaData} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  socialMediaContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(15, 9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 2),
    },
  },
  socialMediaContentArea: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
}))

export default ContactUsSocialMedia
