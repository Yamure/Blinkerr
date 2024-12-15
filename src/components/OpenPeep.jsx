import PropTypes from 'prop-types';
import peepSvg from '../assets/Astro.svg';

const OpenPeep = ({ className }) => {
  return (
    <img
      src={peepSvg}
      alt="Open Peep illustration"
      className={className}
    />
  );
};

OpenPeep.propTypes = {
  className: PropTypes.string.isRequired,
};

export default OpenPeep;
