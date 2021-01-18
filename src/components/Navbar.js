import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav>
            <motion.ul className="d-row" animate={{ x: -10 }}>
                <motion.li whileHover={{ scale: 1.2 }}>
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </motion.li>

                <motion.li whileHover={{ scale: 1.2 }}>
                    <NavLink to="/about" className="nav-link">
                        About Me
                    </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                    <NavLink to="/projects" className="nav-link">
                        Projects
                    </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </motion.li>
            </motion.ul>
        </nav>
    )
}

export default Navbar;