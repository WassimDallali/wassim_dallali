import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const SEO = () => {
  useEffect(() => {
    // Update document title
    document.title = `${portfolioData.personal.name} - ${portfolioData.personal.title} Portfolio | React, TypeScript, DevOps Expert in ${portfolioData.personal.contact.location.split(',')[0]}`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `${portfolioData.personal.name} is a ${portfolioData.personal.title} based in ${portfolioData.personal.contact.location}. Expert in React, TypeScript, Node.js, and Cloud Computing. Experience in web and mobile development, DevOps, and network design. ${portfolioData.awards.length > 0 ? `${portfolioData.awards[0].organization} ${portfolioData.awards[0].title}.` : ''}`
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

    // Add BreadcrumbList structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: portfolioData.personal.contact.portfolio,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: portfolioData.personal.name,
          item: `${portfolioData.personal.contact.portfolio}/#about`,
        },
      ],
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Cleanup
      const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
      scriptsToRemove.forEach((script) => script.remove());
    };
  }, []);

  return null;
};

export default SEO;

