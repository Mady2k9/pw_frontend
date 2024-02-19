function SoftwareAppSchema() {
  return {
    __html: ` {
        "@context": "https://schema.org/",
        "@type": "SoftwareApplication",
        "name": "Physics Wallah",
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "402942",
        "reviewCount": "",
        "bestRating": "4.5"
        },
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Android",
        "contentRating": "",
        "fileSize": "130M"
}`,
  };
}
export default SoftwareAppSchema;
