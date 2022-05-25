import { makeStyles } from "@mui/styles"
import { Box, Container, Typography } from "@mui/material"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"

const CareerJoinUs = ({ data }) => {
  console.log("data", data)
  const classes = useStyles()
  return (
    <Box
      className={`${classes.joinBg} ${
        classes[
          data?.joinUsText_background === "dark" ? "joinBgDark" : "joinBgLight"
        ]
      }`}
    >
      <Container maxWidth="xl">
        <Box>
          <Box
            className={`${classes.contentArea} ${
              classes[
                data?.joinUsText_background === "dark"
                  ? "contentAreaDark"
                  : "contentAreaLight"
              ]
            }`}
          >
            <main>
              <div>
                <Typography variant="subtitle1" paragraph>
                  {data?.title}
                </Typography>
                <Typography variant="h4" paragraph>
                  {data?.subtext}
                </Typography>
                <Typography variant="h1">{data?.description}</Typography>

                {data.link && (
                  <Box className={classes.buttonLink}>
                    <Typography variant="button">
                      <ButtonLink
                        button={data.link}
                        appearance={getButtonAppearance(data.link.type, "dark")}
                        key={data.link.id}
                      />
                    </Typography>
                  </Box>
                )}
              </div>
            </main>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  joinBg: {
    padding: theme.spacing(15, 30, 15, 8.1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(9.3, 2.8, 9.3, 1.9),
    },
  },
  joinBgDark: {
    background: theme.palette.primary.main,
  },
  joinBgLight: {
    background: theme.palette.secondary.dark,
  },
  contentArea: {
    "& .MuiTypography-h4": {
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
      },
    },
    "& .MuiTypography-h1": {
      fontWeight: "500",
      paddingLeft: theme.spacing(0),
    },
    "& .MuiTypography-subtitle1": {
      paddingBottom: theme.spacing(0),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(0),
      },
    },
  },
  contentAreaLight: {
    color: theme.palette.secondary.contrastText,
  },
  contentAreaDark: {
    color: theme.palette.primary.contrastText,
  },
  buttonLink: {
    display: "flex",
    paddingTop: theme.spacing(6.3),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(9.3),
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

export default CareerJoinUs
