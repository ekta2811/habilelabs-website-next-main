import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import { makeStyles } from "@mui/styles"
import Container from "@mui/material/Container"

const ContactUs = ({ data }) => {
  const classes = useStyles()
  return (
    <section className={classes.bottomActionBar}>
      <Container>
        <h2 className="">{data.title}</h2>
        {data.description && <p>{data.description}</p>}
        {/* Buttons row */}
        <div className={classes.bActionButton}>
          <ButtonLink
            button={data.button}
            appearance={getButtonAppearance(data.button.type, "dark")}
            key={data.button.id}
          />
        </div>
      </Container>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
  bottomActionBar: {
    background: theme.palette.primary.main,
    textAlign: "center",
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "70px 0",
    },
    "& h2": {
      fontSize: 16,
      lineHeight: "19px",
      color: theme.palette.primary.contrastText,
      margin: "0px",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        fontSize: 12,
      },
    },
    "& p": {
      fontSize: 60,
      lineHeight: "110px",
      color: theme.palette.primary.contrastText,
      margin: 0,
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        fontSize: 30,
        lineHeight: "40px",
        marginBottom: "30px",
      },
    },
  },
  bActionButton: {
    display: "flex",
    justifyContent: "center",
    "& a": {
      margin: 5,
      "& div": {
        padding: "9px 66px",
        borderRadius: 25,
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        fontWeight: "600",
      },
    },
  },
}))

export default ContactUs
