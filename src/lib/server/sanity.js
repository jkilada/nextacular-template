import sanityClient from '@sanity/client';

export default sanityClient({
  apiVersion: 'v2021-10-21',
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});
