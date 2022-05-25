import React from "react"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import ButtonLink from "@/components/elements/button-link"
import LeadForm from "../sections/lead-form"
import Typography from "@mui/material/Typography"

const ContactUsCard = ({ data }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const buttonData = {
    url: data.joinUs.buttonLink,
    newTab: false,
    text: data.joinUs.buttonText,
  }
  return (
    <Box className={classes.ContactusCard}>
      <Grid container spacing={2} className={classes.ContactCardMainGrid}>
        <Grid item xs={12} md={6} className={classes.ContactCardContent}>
          <div className={classes.ContactContent}>
            <Typography variant="body1" gutterBottom>
              {data?.contactUs?.title}
            </Typography>
            <Typography variant="h2" gutterBottom>
              {data?.contactUs?.description}
            </Typography>
          </div>
          <div>
            <Button className={classes.contactButton} onClick={handleClickOpen}>
              {data?.contactUs?.buttonText}
            </Button>

            <Dialog fullScreen open={open} onClose={handleClose}>
              <IconButton
                edge="start"
                color="inherit"
                className={classes.closeBotton}
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <LeadForm data={data?.contactUs} />
            </Dialog>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.ContactCardContent}>
          <div className={classes.ContactContent}>
            <Typography variant="body1" gutterBottom>
              {data?.joinUs?.title}
            </Typography>
            <Typography variant="h2" gutterBottom>
              {data?.joinUs?.description}
            </Typography>
          </div>
          <div className={classes.joinUsButton}>
            <ButtonLink button={buttonData} key={data?.id} />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  ContactusCard: {
    background: theme.palette.secondary.dark,
    "& .MuiGrid-root": {
      marginLeft: "0px !important",
    },
  },
  ContactCardMainGrid: {
    width: "100%",
    position: "relative",
    bottom: "20%",
    top: "-60px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      padding: "0 15px",
      bottom: "0",
      marginTop: "0",
    },
  },
  ContactCardContent: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    maxWidth: "37%",
    padding: theme.spacing(7.5, 7.5) + "!important",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      margin: theme.spacing(1, 0),
      padding: theme.spacing(4, 3) + "!important",
    },
  },
  ContactContent: {
    color: theme.palette.background.default,
    marginBottom: "50px",
    "& p": {
      padding: theme.spacing(2, 0) + "!important",
      color: theme.palette.backgroundColor.main,
    },
  },
  contactButton: {
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1, 7.5),
    background: theme.palette.primary.light,
    fontWeight: 600,
    borderRadius: "25px",
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  joinUsButton: {
    "& a": {
      "& div": {
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        textAlign: "center",
        float: "left",
        padding: theme.spacing(1, 7.5),
        borderRadius: "25px",
        fontWeight: 600,
        textTransform: "capitalize",
      },
    },
  },
  closeBotton: {
    position: "absolute",
    right: "20px",
    "& .MuiSvgIcon-root": {
      fontSize: "xx-large",
    },
  },
}))

export default ContactUsCard
