const SubFieldsArray = `fragment SubFieldsArray on StoryRelationResponseCollection {
    data {
      id
      attributes {
          title
          tags
          image{
            ...FileParts
          }
          featured
          publishedDate
          shortDescription
          slug
          createdAt
          updatedAt
          publishedAt
      }
    }
   }`
export default SubFieldsArray
