import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const SEO = () => {
  useEffect(() => {
    // Update document title
    document.title = `${portfolioData.personal.name} - ${portfolioData.personal.title} | React, TypeScript, DevOps Expert`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `Full Stack Developer with expertise in React, TypeScript, Node.js, and Cloud Computing. Experience in web and mobile development, DevOps, and network design. Based in ${portfolioData.personal.contact.location}.`
      );
    }

    // Add structured data (JSON-LD)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: portfolioData.personal.name,
      jobTitle: portfolioData.personal.title,
      description: portfolioData.personal.profile,
      email: portfolioData.personal.contact.email,
      telephone: portfolioData.personal.contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sfax',
        addressCountry: 'TN',
      },
      url: portfolioData.personal.contact.portfolio,
      sameAs: [
        portfolioData.personal.contact.linkedin,
        portfolioData.personal.contact.github,
        portfolioData.personal.contact.portfolio,
      ],
      knowsAbout: portfolioData.skills.map((skill) => skill.name),
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Faculty of Sciences of Sfax',
      },
      award: portfolioData.awards.map((award) => ({
        '@type': 'Award',
        name: award.title,
        awarder: award.organization,
        dateReceived: award.date,
      })),
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sfax',
          addressRegion: 'Sfax',
          addressCountry: 'TN',
        },
      },
      hasOccupation: portfolioData.experience.map((exp) => ({
        '@type': 'Occupation',
        name: exp.title,
        occupationLocation: {
          '@type': 'Place',
          name: exp.location,
        },
        worksFor: {
          '@type': 'Organization',
          name: exp.company,
        },
        startDate: exp.startDate,
        endDate: exp.endDate === 'Present' ? undefined : exp.endDate,
      })),
    });

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default SEO;

