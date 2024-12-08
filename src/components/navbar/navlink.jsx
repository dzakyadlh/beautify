import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NavLink({ href, text }) {
  return (
    <Link href={href} className="font-medium">
      <motion.div
        whileHover={{
          backgroundColor: 'rgba(255, 215, 0, 0.5)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {text}
      </motion.div>
    </Link>
  );
}

export function NavIcon({ icon }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: 'rgba(255, 215, 0, 0.5)',
      }}
      transition={{ duration: 0.3 }}
      style={{
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-black" />
    </motion.div>
  );
}
