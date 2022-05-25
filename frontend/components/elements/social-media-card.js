import NextImage from "./image"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Link from "next/link"

const SocialMediaCard = ({ socialMediaData }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.socialMediaCardContainer}>
        {socialMediaData?.newTab === true ? (
          <Link href={socialMediaData.url} passHref>
            <a target="_blank">
              <NextImage
                width="223px"
                height="223px"
                media={socialMediaData.icon}
              />
            </a>
          </Link>
        ) : (
          <Link href={socialMediaData.url} passHref>
            <NextImage
              width="223px"
              height="223px"
              media={socialMediaData.icon}
            />
          </Link>
        )}
      </Box>
    </>
  )
}

const useStyles = makeStyles(() => ({
  socialMediaCardContainer: {
    minHeight: "100%",
    minWidth: "100%",
    display: "grid",
  },
}))

export default SocialMediaCard
