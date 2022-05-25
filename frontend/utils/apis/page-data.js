import { getStrapiURL } from "./env"
import fileParts from "./fragments/file-parts"
import FilePartsArray from "./fragments/file-parts-array"
import { ServicesType, BottomActions, ServicesHero } from "./sections-types"
import SubFieldsArray from "./fragments/sub-fields-array"
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */
export async function getPageData({ slug, locale = "en", preview }) {
  // Find the pages that match this slug
  const gqlEndpoint = getStrapiURL("/graphql")
  const pagesRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        ${fileParts}
        ${FilePartsArray}
        ${SubFieldsArray}
        query GetPages(
          $slug: String!
          $publicationState: PublicationState!
          $locale: I18NLocaleCode!
        ) {        
          pages(
            filters: { slug: { eq: $slug } }
            publicationState: $publicationState
            locale: $locale
          ) {
            data {
              id
              attributes {
                locale
                localizations {
                  data {
                    id
                    attributes {
                      locale
                    }
                  }
                }
                slug
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                contentSections {
                  __typename
                  ... on ${BottomActions}
                  ... on ${ServicesHero}
                  ... on ComponentSectionsTestimonialsGroup {
                    id
                    description
                    testimonials {
                      id
                      logo {
                        ...FileParts
                      }
                      text
                      name
                      title
                    }
                    title
                  }
                  ... on ComponentSectionsLargeVideo {
                    id
                    description
                    title
                    poster {
                      ...FileParts
                    }
                    video {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsRichText {
                    id
                    content
                    background
                    aligned
                  }
                  ... on ComponentSectionsLeadForm {
                    id
                    emailPlaceholder
                    location
                    submitButton {
                      id
                      text
                      type
                    }
                    title
                  }

                  ... on ${ServicesType}
                  ... on ComponentSectionsServicesModel {
                    id
                    title
                    description
                    modelFeatures {
                      id
                      description
                      url
                      icon {
                        ...FileParts
                      }
                      title
                    }
                    service_background: theme
                  }
                  ... on ComponentSectionsIndustriesSection{
                    id
                    title
                    description
                    featuredIndustries {
                      id
                      title
                      description
                      url
                      icon {
                        ...FileParts
                      }
                    }
                    link_industries {
                      id
                      url
                      newTab
                      text
                    }
                    industries_background: theme
                  }
                  ... on ComponentSectionsContactUs{
                    id 
                    title
                    description
                    button{
                      id
                      url
                      text
                    }
                  }
                  ... on ComponentSectionsOurApproach{
                    id
                    title
                    description
                    list {
                      id
                      description
                      url
                      icon {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsOurOfferings{
                    id
                    title
                    description
                    offerings {
                      id
                      title
                      description
                      url
                      icon {
                        ...FileParts
                      }
                    }
                  }
                  ... on ComponentSectionsServiceHero{
                    id
                    title
                    name
                    animation
                    sideImage {
                      ...Fileparts
                    }
                  }
                  ...  on ComponentSectionsHomeFeaturedServices{
                    id
                    title
                    description
                    services {
                      id
                      title
                      description
                      image {
                        ...FileParts
                      }
                      link {
                        id
                        url
                        newTab
                        text
                        type
                      }
                    }
                  }
                  ... on ComponentSectionsInsights{
                    id
                    title
                    description
                    insights {
                      id
                      description
                      url
                      icon {
                        ...FileParts
                      }
                      title
                    }
                    button {
                      id
                      url
                      newTab
                      text
                      type
                    }
                    theme
                  }
                  ... on ComponentSectionsRelatedCaseStudies{
                    id
                    title
                    description
                    caseStudies {
                      id
                      image {
                        ...FileParts
                      }
                      title
                      description
                      url
                    }
                    viewAllButton{
                      id
                      url
                      newTab
                      text
                      type
                    }
                    caseStudies_background: theme
                  }
                  ... on ComponentSectionsServiceHero{
                    id
                    name
                    title
                    animation
                    breadcrumbs{
                      id
                      url
                      newTab
                      text
                    }
                  }
                  ... on ComponentSectionsAboutUsHero{
                    id
                    title
                    label
                    description
                    picture {
                      ...FileParts
                    }
                    button{
                      id
                      url
                      newTab
                      text
                      type
                    }
                  }
                  ... on ComponentSectionsContactUsHero{
                    id
                    title
                    description
                    image {
                      ...FileParts
                    }
                    joinUs{
                      id
                      title
                      description
                      icon{
                        ...FileParts
                      }
                      buttonLink
                      buttonText
                    }
                    contactUs{
                      id
                      title
                      description
                      formTitle
                      buttonText
                      formDescription
                      image {
                        ...FileParts
                      }
                      formButtonText
                    }
                  } 
                  ... on ComponentSectionsSocialMedia{
                    id
                    title
                    description
                    socialLinks {
                      id
                      text
                      url
                      newTab
                      icon {
                        ...FileParts
                      }
                    }
                  }
                  ... on ComponentSectionsAddressSection{
                    id
                    title
                    description
                    Address
                    contactNumbers
                    emails
                  }
                  ... on ComponentSectionsCulture{
                    id
                    title
                    description
                    galleries{
                      id
                      title
                      banner{
                        ...FileParts 
                      }
                      images{
                        ...FilePartsArray
                      }
                      link{
                        id
                        url
                        newTab
                        text
                      }
                    }
                    culture_background : theme 
                  }
                  ... on ComponentSectionsFeaturedStoriesHero{
                    id
                    stories {
                      id
                      title
                      description
                      featuredTitle
                      image{
                        ...FileParts
                      }
                      buttonText
                      buttonLink
                    }
                  }
                  ... on ComponentSectionsRichTextAndBackground{
                    id
                    title
                    description
                    backgroundImage {
                       ...FileParts
                    }
                  }
                  ... on ComponentSectionsHero{
                    id
                    title
                    label
                    description
                    picture {
                      ...FileParts
                    }
                    buttons {
                      id
                      url
                      newTab
                      text
                      type
                    }
                    animation
                    mobileAnimation
                  }
                  
                  ... on ComponentSectionsWorkLifeSection{
                    id
                    title
                    shortDescription
                    description
                    featured{
                      id
                      title
                      description
                      icon {
                        ...FileParts
                      }
                      buttonLink
                      buttonText
                    }
                    images{
                      ...FilePartsArray
                    }
                  }
                  ... on ComponentSectionsFeatureColumnGroup{
                    id
                    features{
                      id
                      title
                      description
                      icon{
                        ...FileParts
                      }
                      buttonLink
                      buttonText
                    }
                    animation
                    divider
                  }
                  ... on ComponentSectionsJoinUsText{
                    id
                    title
                    subtext
                    description
                    link{
                      id
                      url
                      newTab
                      text
                      type
                    }
                    joinUsText_background : theme 
                  }
                  ... on ComponentSectionsStackholders{
                    id
                    title
                    description
                    animation
                    stackholders{
                      id
                      title
                      logo{
                        ...FileParts
                      }
                      url
                    }
                  }
                  ... on ComponentSectionsIframe{
                    id
                    url
                  }
                  ... on ComponentSectionsOurTeam{
                    id
                    title
                    description
                    featuredImage{
                      ...FileParts
                    }
                    teamImages{
                      ...FilePartsArray
                    }
                    stackholdersText
                    stackholdersSubText
                  }
                  ... on ComponentSectionsCompanyUpdates{
                    id
                    title
                    description
                    updates{
                      id
                      description
                      url
                      icon{
                        ...FileParts
                      }
                      title
                      images{
                        ...FilePartsArray
                      }
                    }
                    companyUpdates_background: theme
                  }  
                  ... on ComponentSectionsCaseStudiesList{
                    id
                    title
                    caseStudiesList_background: theme
                  }
                  ... on ComponentSectionsFeaturedBlogs{
                    id
                    title
                    subtext
                    link {
                      id
                      url
                      newTab
                      text
                      type
                    }
                    layout
                    featuredBlog
                    blogs_background: theme
                    featured_stories{
                      ...SubFieldsArray
                    }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale,
      },
    }),
  })

  const pagesData = await pagesRes.json()
  console.log("pagesData---->>", pagesData)
  // Make sure we found something, otherwise return null
  if (pagesData.data?.pages == null || pagesData.data.pages.length === 0) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return pagesData.data.pages.data[0]
}
