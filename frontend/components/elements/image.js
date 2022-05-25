import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

/**
 * Wrapper over Next image component.
 * @param media
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const NextImage = ({ media, ...props }) => {
  if (!media?.data) {
    //null check
    return <></>
  }
  const { url, alternativeText, width, height } = media.data.attributes

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    )
  }
  return (
    <Image
      loader={loader}
      layout="responsive"
      width={width || 100}
      height={height || 100}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

Image.propTypes = {
  media: mediaPropTypes,
  className: PropTypes.string,
}

export default NextImage
