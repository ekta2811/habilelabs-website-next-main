const FilePartsArray = `fragment FilePartsArray on UploadFileRelationResponseCollection {
  data {
    id
    attributes {
      alternativeText
      width
      height
      mime
      url
      formats
    }
  }
 }`
export default FilePartsArray
