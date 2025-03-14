import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title} | Resource Manager</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
