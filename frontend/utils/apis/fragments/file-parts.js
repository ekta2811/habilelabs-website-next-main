const fileParts = `fragment FileParts on UploadFileEntityResponse {
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
export default fileParts
