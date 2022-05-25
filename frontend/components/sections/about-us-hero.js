import NextImage from "../elements/image"
import { makeStyles } from "@mui/styles"
import { Box, Container, Grid, Typography } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"

const AboutUsHero = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.heroBg}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid className={classes.contentArea} item xs={12} md={7}>
            <Typography variant="subtitle2">{data?.title}</Typography>
            <Typography variant="h1">{data?.description}</Typography>
            {data.button && (
              <Box className={classes.heroButton}>
                <Typography variant="button">
                  <ButtonLink
                    button={data.button}
                    appearance={getButtonAppearance(data.button.type, "dark")}
                    key={data.button.id}
                  />
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={5} className={classes.heroImg}>
            <NextImage width="500px" height="450px" media={data.picture} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  heroBg: {
    background: theme.palette.primary.dark,
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(0),
    },
  },
  heroImg: {
    padding: "65px 0 50px 0 !important",
    [theme.breakpoints.down("md")]: {
      padding: "20px 0 30px 0 !important",
      maxWidth: "70% !important",
      margin: "auto !important",
    },
  },
  contentArea: {
    color: theme.palette.primary.contrastText,
    width: "40%",
  },
  heroButton: {
    display: "flex",
    padding: theme.spacing(6.2, 0, 0, 6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6.3, 0),
    },
    "& a": {
      "& div": {
        padding: theme.spacing(1.3, 10.3),
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1.4, 4.5),
        },
      },
    },
  },
}))

export default AboutUsHero
