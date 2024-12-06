import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900 fixed top-0 left-20 right-0 h-16 flex items-center justify-between px-8 z-10"
    >
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search robots..."
            className="w-full bg-gray-800 text-white pl-12 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          <Bell className="text-gray-400" size={20} />
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
        >
          <User className="text-gray-400" size={20} />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;