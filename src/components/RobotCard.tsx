import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Robot } from '../types/robot';

interface RobotCardProps {
  robot: Robot;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      <Link to={`/robot/${robot.id}`}>
        <div className="relative group">
          <img
            src={robot.image}
            alt={robot.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 p-2 rounded-lg"
              onClick={(e) => e.preventDefault()}
            >
              <Download size={20} className="text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 p-2 rounded-lg"
              onClick={(e) => e.preventDefault()}
            >
              <Heart size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">{robot.name}</h3>
            <ArrowRight className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </div>
          <p className="text-gray-400 text-sm">by {robot.creator}</p>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <Heart size={16} className="mr-1" />
            {robot.likes}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RobotCard;