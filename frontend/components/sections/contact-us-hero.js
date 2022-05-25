import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import ContactUsCard from "../elements/contact-us-card"
import Typography from "@mui/material/Typography"

const ContactUsHero = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.contactUsBoxes}>
      <Box className={classes.contactUsBox}>
        <Container maxWidth="xl">
          <Box className={classes.contactContent}>
            <main className={classes.content}>
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="h1" gutterBottom>
                  {data.description}
                </Typography>
              </div>
              <div className={classes.contactUsImg}>
                <NextImage width="683px" height="540px" media={data.image} />
              </div>
            </main>
          </Box>
        </Container>
      </Box>
      <ContactUsCard data={data} />
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  contactUsBox: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(0, 0, 15, 0),
  },
  content: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  contactContent: {
    color: theme.palette.primary.contrastText,
  },
  contactUsImg: {
    marginTop: "7%",
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "80%",
    },
  },
  contactButton: {
    color: theme.palette.secondary.contrastText,
    padding: "9px 66px",
    background: theme.palette.primary.light,
    fontWeight: 600,
    borderRadius: "25px",
  },
}))

export default ContactUsHero
