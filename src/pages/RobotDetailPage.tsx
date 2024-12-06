import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Rocket,
  Share2,
  ArrowLeft,
  Code,
  Shield,
  Terminal,
  Cpu,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { robots } from '../data/robots';
import CodeBlock from '../components/CodeBlock';

const RobotDetailPage = () => {
  const { id } = useParams();
  const robot = robots.find((r) => r.id === id);

  if (!robot) {
    return <div>Robot not found</div>;
  }

  const handleLaunch = () => {
    window.open('https://t.me/pwn_sscasn', '_blank');
  };

  const handleContact = () => {
    window.open('https://instagram.com/pwn0sec', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-8"
    >
      <Link
        to="/"
        className="flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Robots
      </Link>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="relative h-96">
          <img
            src={robot.image}
            alt={robot.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{robot.name}</h1>
            <p className="text-gray-300">by {robot.creator}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLaunch}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
            >
              <Rocket size={20} className="mr-2" />
              Launch Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center"
            >
              <MessageCircle size={20} className="mr-2" />
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
            >
              <Share2 size={20} className="mr-2" />
              Share
            </motion.button>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-3 text-blue-500" size={24} />
              About
            </h2>
            <p className="text-gray-300 mb-8">{robot.description}</p>
            <p className="text-gray-300 mb-8">{robot.description2}</p>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Terminal className="mr-3 text-blue-500" size={24} />
              Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(robot.specs).map(([key, value]) => (
                <div key={key} className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm capitalize">{key}</p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Cpu className="mr-3 text-blue-500" size={24} />
              Kemampuan Features
            </h2>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              {robot.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold">Code Example</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Here's a sample implementation showcasing the robot's control
                system:
              </p>
              <CodeBlock
                code={robot.codeExample.code}
                language={robot.codeExample.language}
              />
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Terminal className="mr-3 text-blue-500" size={24} />
                Additional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    Security Measures
                  </h3>
                  <p className="text-gray-300">
                    This bot implements industry-standard security protocols
                    including end-to-end encryption for all data transmissions,
                    secure token-based authentication, and comprehensive audit
                    logging of all operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    Data Processing
                  </h3>
                  <p className="text-gray-300">
                    The system processes data in accordance with Indonesian data
                    protection regulations. All personal information is handled
                    with strict confidentiality and stored in secure, encrypted
                    databases.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    Integration Guidelines
                  </h3>
                  <p className="text-gray-300">
                    For system integration, ensure your infrastructure meets the
                    following requirements:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Secure HTTPS connection</li>
                    <li>Valid API authentication credentials</li>
                    <li>Minimum network bandwidth of 10 Mbps</li>
                    <li>Support for WebSocket connections</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    Usage Limitations
                  </h3>
                  <p className="text-gray-300">
                    Please note the following usage limitations:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Maximum 1000 requests per hour</li>
                    <li>Maximum 5 concurrent connections</li>
                    <li>Data retention period of 30 days</li>
                    <li>Maximum file upload size of 10MB</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    Support and Documentation
                  </h3>
                  <p className="text-gray-300">
                    For technical support and detailed documentation, please
                    contact our support team or visit our documentation portal.
                    We provide 24/7 support for critical issues and maintain
                    comprehensive API documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotDetailPage;
