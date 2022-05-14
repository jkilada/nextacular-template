import Meta from '@/components/Meta/index';
import render from '@/lib/client/renderer';
import sanityClient from '@/lib/server/sanity';
import { LandingLayout } from '@/layouts/index';

const Home = ({ page }) => {
  return (
    <LandingLayout>
      <Meta title={page.title} description={page.description} />
      {render(page.content)}
    </LandingLayout>
  );
};

// export const getStaticPaths = async () => {
//   const indexPage = await client.fetch(
//     `*[_type == 'page' && isIndex == true][0]`
//   );
//   const paths = [];
//   paths.push({
//     params: {}
//   })

//   return {
//     paths,
//     fallback: true,
//   };
// };

export const getStaticProps = async () => {
  const page = await sanityClient.fetch(
    `*[_type == 'page' && isIndex == true][0]{..., content[]->{...}}`
  );
  return {
    props: { page },
    revalidate: 10,
  };
};

export default Home;
