import { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="container mx-auto my-10 p-8 min-h-screen flex flex-col items-center bg-white text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200 relative group"
      >
        {/* Hover effect background animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-200 to-purple-200"
        ></motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-green-600">✅ Message Sent!</h2>
            <p className="text-gray-600 mt-2">This is just a visual effect. No data was sent.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleFakeSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6", backgroundColor: "#f8f9fa" }}
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6", backgroundColor: "#f8f9fa" }}
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02, borderColor: "#3b82f6", backgroundColor: "#f8f9fa" }}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Social Media Links with Hover Effects */}
      <div className="mt-8 flex space-x-6">
        <motion.a
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
          href="mailto:your-email@example.com"
          className="text-gray-700 transition"
        >
          📧 Email
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
          href="https://linkedin.com/in/yourprofile"
          className="text-gray-700 transition"
        >
          🔗 LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
          href="https://github.com/yourprofile"
          className="text-gray-700 transition"
        >
          💻 GitHub
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
