import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes, socialLinkPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"
import { makeStyles } from "@mui/styles"
import Container from "@mui/material/Container"

const Footer = ({ footer }) => {
  const classes = useStyles()
  return (
    <>
      {footer && (
        <footer className={classes.footerSection}>
          <Container maxWidth="xl" className={classes.dFlex}>
            <div>
              {footer.logo && (
                <NextImage width="174" height="59" media={footer.logo} />
              )}
            </div>
            <div className={classes.staticPages}>
              {footer.links.map((link) => (
                <span key={link?.id}>
                  <CustomLink link={link}>{link.text}</CustomLink>
                </span>
              ))}
            </div>
            <div>
              <ul className={classes.socialLinks}>
                {footer.socialLinks.map((link) => (
                  <CustomLink link={link} key={link.text}>
                    <NextImage width="24" height="24" media={link.icon} />
                  </CustomLink>
                ))}
              </ul>
            </div>
          </Container>
        </footer>
      )}
    </>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    links: PropTypes.arrayOf(linkPropTypes),
    socialLinks: PropTypes.arrayOf(socialLinkPropTypes),
  }),
}

const useStyles = makeStyles((theme) => ({
  dFlex: {
    display: "flex !important",
    alignItems: "baseline",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  footerSection: {
    padding: "37px 0 55px",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      padding: "20px 0 10px",
      display: "flex",
    },
  },
  staticPages: {
    marginLeft: "auto",
    marginRight: 25,
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
    "& span": {
      position: "relative",
      bottom: "6px",
      display: "flex",
      listStyle: "none",
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
      "& a": {
        color: theme.palette.primary.contrastText,
        padding: "0 20px",
        [theme.breakpoints.down("md")]: {
          padding: "30px 20px",
        },
      },
    },
  },
  socialLinks: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    "& a": {
      marginLeft: 20,
      [theme.breakpoints.down("md")]: {
        margin: "0 15px",
      },
    },
  },
}))

export default Footer
