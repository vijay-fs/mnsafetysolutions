import Helmet from "react-helmet";
const SEO = ({ title, desc, ogTitle }) => {
  const capitalizeTitle = title[0].toUpperCase() + title.substring(1, 60);
  const capitalizeOgTitle = ogTitle[0].toUpperCase() + ogTitle.substring(1, 55);
  const shortenDesc = desc.substring(0, 160);
  return (
    <Helmet>
      <title>{capitalizeTitle}</title>
      <meta property="og:title" content={capitalizeOgTitle} />
      <meta name="description" content={shortenDesc} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};
export default SEO;
