import React, { useEffect, useState, useRef } from "react"
import { makeStyles } from "@mui/styles"
import Link from "@mui/material/Link"
import { Box, Container, Grid, Typography } from "@mui/material"
import ServiceCard from "../elements/card"
import SidebarIcon from "./../icons/infiniteSidebarIcon"

const Services = ({ data }) => {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState("1")
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 1270 && currentScrollY < 1957) {
        setSelectedTab("1")
      }
      if (currentScrollY > 1957 && currentScrollY < 2645) {
        setSelectedTab("2")
      }
      if (currentScrollY > 2645 && currentScrollY < 3612) {
        setSelectedTab("3")
      }
      if (currentScrollY > 3612 && currentScrollY < 4300) {
        setSelectedTab("4")
      }
      if (currentScrollY > 4300) {
        setSelectedTab("5")
      }
      prevScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Box className={classes.serviceSection}>
        <Container maxWidth="xl">
          <Box className={classes.headingArea}>
            <main>
              <Typography variant="h3" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="subtitle1">{data.subTitle}</Typography>
            </main>
          </Box>

          <div id="navList" className={classes.servicePage}>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item xs={12} md={2} className={classes.stickyPosition}>
                <Box className={classes.sideBarContents}>
                  {data?.groups?.map((group, index) => (
                    <>
                      <Link
                        key={index}
                        onClick={() => setSelectedTab(group?.id)}
                        className={`${classes.sideLink} ${
                          selectedTab === group?.id ? classes.tabActive : ""
                        }`}
                        href={`#${group?.id}`}
                        underline="none"
                      >
                        {selectedTab === group?.id ? <SidebarIcon /> : ""}
                        <div className={classes.sideBarTitle}>
                          <Typography variant="subtitle2">
                            {group?.title}
                          </Typography>
                        </div>
                      </Link>
                    </>
                  ))}
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={10}>
                <Box className={classes.serviceContent}>
                  {data?.groups?.map((group) => (
                    <div id={group?.id} key={group.id}>
                      <Box className={classes.serviceHeading}>
                        <Typography variant="h2">{group.title}</Typography>
                      </Box>

                      <Grid container spacing={3}>
                        {group?.cards?.map((data) => (
                          <Grid item={true} xs={6} sm={6} md={6} key={data.id}>
                            <ServiceCard data={data} />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  serviceSection: {
    padding: theme.spacing(15, 9, 15, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2, 9, 0),
    },
  },
  headingArea: {
    textAlign: "center",
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(0),
    },
  },
  servicePage: {
    width: "100%",
    display: "flex",
    position: "relative",
    "& .MuiGrid-root": {
      paddingLeft: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(2),
      },
    },
  },
  stickyPosition: {
    position: "sticky",
    top: "calc(50% - 200px)",
    [theme.breakpoints.down("md")]: {
      position: "inherit",
      top: 0,
      background: theme.palette.secondary.dark,
      zIndex: 3,
      "& .fill-current": {
        display: "none",
      },
    },
  },
  sideBarContents: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      overflowY: "auto",
      padding: theme.spacing(0),
      "&::-webkit-scrollbar": {
        width: "0",
      },
    },
  },
  sideLink: {
    color: theme.palette.secondary.contrastTextLight,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  tabActive: {
    color: theme.palette.primary.light,
    marginTop: theme.spacing(-4),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
    },
  },
  sideBarTitle: {
    marginTop: "-15px",
    "& .MuiTypography-subtitle2": {
      padding: theme.spacing(0, 3, 4, 0),
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        padding: theme.spacing(0, 3, 0, 0),
      },
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
    },
  },
  serviceContent: {
    textAlign: "left",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  serviceHeading: {
    position: "relative",
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    "& .MuiTypography-h2": {
      position: "relative",
      zIndex: 1,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
      width: "auto",
      float: "left",
      paddingRight: theme.spacing(3),
      marginTop: "24px!important",
    },
    "&:after": {
      position: "absolute",
      left: 0,
      content: "''",
      width: "100%",
      height: 2,
      backgroundColor: theme.palette.primary.light,
      marginTop: theme.spacing(4),
    },
  },
}))

export default Services
