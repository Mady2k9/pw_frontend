function OrganisationAppSchema() {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "Physics Wallah",
      "url": "https://www.pw.live/",
      "logo": "https://pw.live/version14/assets/img/logo.png",
      "image": "https://pw.live/version14/assets/img/mobile-and-alakh-sir.png",
      "email": "support@pw.live",
      "description": "Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.",
      "address": {
      "@type": "PostalAddress",
      "postalCode": "201309",
      "streetAddress": "KLJ Noida One, B 8, Block-B, Industrial Area",
      "addressCountry": "India",
      "addressRegion": "Uttar Pradesh",
      "addressLocality": "Sec 62 Noida"
      },
      "telephone": "9513850450",
      "sameAs": [
      "Facebook: https://www.facebook.com/physicswallah",
      "Instagram: https://www.instagram.com/physicswallah/",
      "Youtube: https://www.youtube.com/physicswallah",
      "Linkedin: https://www.linkedin.com/company/physicswallah/",
      "Twitter: https://twitter.com/physicswallahap?lang=en"
      ],
      "founder": {
      "@type": "Person",
      "name": "Alakh Pandey",
      "image": "https://pw.live/version14/assets/img/alakh-sir-web-launch.png",
      "url": "https://pw.live/version14/assets/img/alakh-sir-web-launch.png",
      "jobTitle": "Education",
      "brand": {
      "@type": "Brand",
      "logo": {
              "@type": "ImageObject",
              "url": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/baea2846-ed40-4951-8683-84bd031d350a.png",
              "height": "45",
              "width": "45"
      },
      "slogan": "Selection Hoga Yahi Se!"
      }
}
}`,
  };
}
export default OrganisationAppSchema;
