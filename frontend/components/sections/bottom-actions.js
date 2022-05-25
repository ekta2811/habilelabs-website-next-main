import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import { makeStyles } from "@mui/styles"
import Typography from "@mui/material/Typography"

const BottomActions = ({ data }) => {
  const classes = useStyles()
  return (
    <section className={classes.bottomActionBar}>
      <Typography variant="body2" paragraph>
        {data.description}
      </Typography>
      <Typography variant="h1">{data.title}</Typography>
      <div className={classes.bActionButton}>
        {data.buttons.map((button, index) => (
          <Typography variant="button" key={index}>
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "dark")}
              key={button.id}
            />
          </Typography>
        ))}
      </div>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
  bottomActionBar: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    textAlign: "center",
    padding: theme.spacing(15, 32.75),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(9.4, 1.9),
    },
  },
  bActionButton: {
    paddingTop: theme.spacing(6.25),
    display: "flex",
    justifyContent: "center",
    "& a": {
      "& div": {
        padding: theme.spacing(1.3, 8.25),
        borderRadius: 22,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
}))

export default BottomActions
