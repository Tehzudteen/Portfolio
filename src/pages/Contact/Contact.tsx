import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h1>

        {/* Three-column contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <ContactCard
            Icon={FiPhoneCall}
            title="By Phone"
            description="Reach us via our toll-free numbers."
            lines={[
              "North America: 1-877-300-7483",
              "International: 1-604-637-0780",
            ]}
            buttonText="Call Now"
          />
          <ContactCard
            Icon={BsBriefcase}
            title="Start a New Case"
            description="Send us your questions or concerns to get quick support."
            buttonText="Start Here"
          />
          <ContactCard
            Icon={HiOutlineChatAlt2}
            title="Live Chat"
            description="Chat with a member of our in-house team."
            buttonText="Start Chat"
          />
        </div>

        {/* Track a Case Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Track a Case</h3>
          <p className="text-gray-600 mb-6">
            View the status of your messages with our support team.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Track Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  lines?: string[];
  buttonText: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  title,
  description,
  lines,
  buttonText,
}) => {
  return (
    <motion.div
      // Outer div creates the gradient border
      className="relative p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient rounded-lg shadow"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Inner content (white card) */}
      <div className="bg-white rounded-md p-8 flex flex-col items-center">
        <Icon className="text-5xl text-gray-600 mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        {lines &&
          lines.map((line, idx) => (
            <div key={idx} className="text-gray-700 mb-1">
              {line}
            </div>
          ))}
        {lines && <div className="mb-4"></div>}
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default ContactPage;
