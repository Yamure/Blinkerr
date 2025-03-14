import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};
