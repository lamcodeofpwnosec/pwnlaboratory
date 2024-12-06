import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Layers, Box, Users, Star } from 'lucide-react';

const menuItems = [
  { icon: <Box size={24} />, label: 'Models' },
  { icon: <Layers size={24} />, label: 'Assets' },
  { icon: <Users size={24} />, label: 'Community' },
  { icon: <Star size={24} />, label: 'Favorites' },
  { icon: <Settings size={24} />, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-20 bg-gray-900 h-screen fixed left-0 top-0 flex flex-col items-center py-8"
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-12 h-12 bg-blue-500 rounded-xl mb-8 flex items-center justify-center"
      >
        <Box size={24} className="text-white" />
      </motion.div>
      
      <div className="flex flex-col space-y-8">
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            {item.icon}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;