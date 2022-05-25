import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { CardActionArea } from "@mui/material"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import Link from "next/link"
import BottomArrow from "./../icons/bottomArrow"

const ServiceCard = (props) => {
  const { data } = props
  const classes = useStyles()
  return (
    <Card className={classes.removeShadow}>
      <Link href={data.link || "#"} passHref>
        <CardActionArea>
          <CardContent className={classes.serviceCard}>
            <Typography variant="h4">{data.title}</Typography>
            <Typography variant="subtitle1">{data.description}</Typography>
            <BottomArrow />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  removeShadow: {
    boxShadow: "none",
    borderRadius: 0,
  },
  serviceCard: {
    minHeight: 256,
    border: "1px solid " + theme.palette.borderColor.main,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      minHeight: 260,
    },
    "& .MuiTypography-h4": {
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 3, 0),
        fontSize: "14px",
      },
    },
    "& .MuiTypography-subtitle1": {
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
      },
      "& + div": {
        marginLeft: "auto",
        marginTop: "auto",
      },
    },
  },
}))

export default ServiceCard
