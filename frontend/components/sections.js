import { useRouter } from "next/router"
import Hero from "@/components/sections/hero"
import LargeVideo from "@/components/sections/large-video"
import BottomActions from "@/components/sections/bottom-actions"
import TestimonialsGroup from "@/components/sections/testimonials-group"
import RichText from "./sections/rich-text"
import LeadForm from "./sections/lead-form"
import ContactUs from "./sections/contact-us"
import Services from "./sections/services"
import ServiceModel from "./sections/service-model"
import FeaturedIndustries from "./sections/featured-industries"
import AboutUsHero from "./sections/about-us-hero"
import HomeFeature from "./sections/home-feature"
import OurOfferings from "./sections/our-offerings"
import ServiceHero from "./sections/service-hero"
import OurApproach from "./sections/our-approach"
import RelatedCaseStudies from "./sections/related-case-studies"
import RelatedInsights from "./sections/related-insights"
import ContactUsHero from "./sections/contact-us-hero"
import ContactUsSocialMedia from "./sections/contact-us-social-media"
import FeatureColumnGroup from "./sections/feature-column-group"
import ContactUsAddress from "./sections/contact-us-address"
import FeaturedStoriesHero from "./sections/featured-stories-hero"
import AboutUsRichText from "./sections/about-us-rich-text"
import OurPartners from "./sections/our-partners"
import HomeWorkLife from "./sections/work-life-section"
import WorkCulture from "./sections/work-culture"
import OurTeam from "./sections/our-team"
import CareerJoinUs from "./sections/career-join-us"
import CompanyUpdates from "./sections/company-updates"
import CaseStudyList from "./sections/case-study-list"
import IframeComponent from "./sections/iframe-component"
import FeaturedBlogs from "./sections/featured-blogs"
// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
  ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsBottomActions: BottomActions,
  ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  ComponentSectionsRichText: RichText,
  ComponentSectionsLeadForm: LeadForm,
  ComponentSectionsContactUs: ContactUs,
  ComponentSectionsServices: Services,
  ComponentSectionsServicesModel: ServiceModel,
  ComponentSectionsIndustriesSection: FeaturedIndustries,
  ComponentSectionsHomeFeaturedServices: HomeFeature,
  ComponentSectionsOurOfferings: OurOfferings,
  ComponentSectionsServiceHero: ServiceHero,
  ComponentSectionsOurApproach: OurApproach,
  ComponentSectionsRelatedCaseStudies: RelatedCaseStudies,
  ComponentSectionsInsights: RelatedInsights,
  ComponentSectionsAboutUsHero: AboutUsHero,
  ComponentSectionsContactUsHero: ContactUsHero,
  ComponentSectionsSocialMedia: ContactUsSocialMedia,
  ComponentSectionsFeatureColumnGroup: FeatureColumnGroup,
  ComponentSectionsAddressSection: ContactUsAddress,
  ComponentSectionsFeaturedStoriesHero: FeaturedStoriesHero,
  ComponentSectionsRichTextAndBackground: AboutUsRichText,
  ComponentSectionsStackholders: OurPartners,
  ComponentSectionsWorkLifeSection: HomeWorkLife,
  ComponentSectionsCulture: WorkCulture,
  ComponentSectionsOurTeam: OurTeam,
  ComponentSectionsJoinUsText: CareerJoinUs,
  ComponentSectionsCompanyUpdates: CompanyUpdates,
  ComponentSectionsCaseStudiesList: CaseStudyList,
  ComponentSectionsIframe: IframeComponent,
  ComponentSectionsFeaturedBlogs: FeaturedBlogs,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename]
  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off{" "}
        </a>{" "}
      </div>{" "}
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Show a banner if preview mode is on */}{" "}
      {preview && <PreviewModeBanner />} {/* Show the actual sections */}{" "}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__typename}${section.id}`}
        />
      ))}{" "}
    </div>
  )
}

export default Sections
