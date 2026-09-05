import { Helmet } from 'react-helmet-async';

interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  areaServed?: string[];
  geo?: { latitude: string; longitude: string };
  sameAs?: string[];
  telephone?: string;
  email?: string;
}

interface WebSiteSchema {
  name: string;
  url: string;
  description: string;
}

interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
}

interface BlogPostSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
  };
}

interface PortfolioItemSchema {
  name: string;
  description: string;
  image: string;
  client: string;
  datePublished: string;
}

export const OrganizationSchema = ({ data }: { data: OrganizationSchema }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.email && { email: data.email }),
    ...(data.address && { address: { '@type': 'PostalAddress', ...data.address } }),
    ...(data.areaServed && {
      areaServed: data.areaServed.map((area) => ({ '@type': 'Place', name: area }))
    }),
    ...(data.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.geo.latitude,
        longitude: data.geo.longitude
      }
    }),
    ...(data.sameAs && { sameAs: data.sameAs })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const WebSiteSchema = ({ data }: { data: WebSiteSchema }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const ServiceSchema = ({ data }: { data: ServiceSchema }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: data.provider
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BlogPostSchema = ({ data }: { data: BlogPostSchema }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: data.author
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const PortfolioItemSchema = ({ data }: { data: PortfolioItemSchema }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: data.name,
    description: data.description,
    image: data.image,
    client: data.client,
    datePublished: data.datePublished
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}; 