import projects from "@/data/projects.json";
import { siteConfig } from "@/lib/site";

export function buildSiteJsonLd() {
  const { url, name, description, jobTitle, email, knowsAbout } = siteConfig;

  const featuredProjects = projects.filter((project) => project.featured);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${name} Portfolio`,
        description,
        inLanguage: "en-US",
        publisher: { "@id": `${url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#webpage`,
        url,
        name: siteConfig.title,
        description,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name,
        url,
        jobTitle,
        description,
        email,
        image: `${url}/logo.png`,
        knowsAbout,
        sameAs: [siteConfig.github.url, siteConfig.twitter.url],
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects`,
        name: "Featured projects",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.name,
            description: project.description,
            url: project.github,
            applicationCategory: "DeveloperApplication",
            author: { "@id": `${url}/#person` },
          },
        })),
      },
    ],
  };
}
