// Get site data from Strapi (metadata, navbar, footer...)
import { getStrapiURL } from "./env"

export async function getGlobalData(locale = "en") {
  const gqlEndpoint = getStrapiURL("/graphql")
  const globalRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
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
        }
        query GetGlobal($locale: I18NLocaleCode!) {
          global(locale: $locale) {
            data {
              id
              attributes {
                logo {
                  ...FileParts
                }
                favicon {
                  ...FileParts
                }
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                metaTitleSuffix
                notificationBanner {
                  type
                  text
                }
                menus {
                    id
                    link {
                     id
                     url
                     newTab
                     text
                   }
                   subMenus {
                    id
                    title
                    url
                    links {
                      id
                      url
                      newTab
                      text
                     }
                    }
                }
                footer {
                  logo {
                    ...FileParts
                  }
                  links {
                      id
                      url
                      newTab
                      text
                  }
                  socialLinks {
                      id
                      url
                      newTab
                      text,
                      icon {
                        ...FileParts
                      }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        locale,
      },
    }),
  })

  const global = await globalRes.json()
  return global.data.global
}
