import { useState } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const experiences = [
    { year: "2023 - Present", role: "Software Engineer", company: "Tech Corp" },
    { year: "2021 - 2023", role: "Frontend Developer", company: "Web Solutions" },
    { year: "2019 - 2021", role: "Intern Developer", company: "Startup Inc." },
  ];

  const education = [
    { year: "2019 - 2023", degree: "B.Sc. in Computer Science", institution: "Tech University" },
    { year: "2017 - 2019", degree: "Diploma in Software Engineering", institution: "Coding Academy" },
  ];

  const certifications = [
    { title: "Full-Stack Web Development", provider: "Udemy", year: 2022 },
    { title: "React & TypeScript Mastery", provider: "Coursera", year: 2023 },
    { title: "Cloud Computing with AWS", provider: "Google Cloud", year: 2024 },
  ];

  return (
    <div className="container mx-auto p-8 my-10 min-h-screen flex flex-col items-center bg-white text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-semibold mb-4">💼 Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} - {exp.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} - {edu.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-semibold mb-4">📜 Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              className="p-4 bg-white rounded-lg shadow-md transition-all cursor-pointer border border-gray-100"
              onClick={() => setSelectedCert(cert.title)}
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.provider} - {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-96 border border-gray-300"
          >
            <h2 className="text-xl font-semibold">{selectedCert}</h2>
            <p className="text-gray-600 mt-2">This certification validates expertise in modern development technologies.</p>
            <button
              onClick={() => setSelectedCert(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
