import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NextPagePopup: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
          setOpen(true);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-30"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: `linear-gradient(
                  90deg,
                  rgba(255, 0, 0, 1) 0%,
                  rgba(255, 154, 0, 1) 10%,
                  rgba(208, 222, 33, 1) 20%,
                  rgba(79, 220, 74, 1) 30%,
                  rgba(63, 218, 216, 1) 40%,
                  rgba(47, 201, 226, 1) 50%,
                  rgba(28, 127, 238, 1) 60%,
                  rgba(95, 21, 242, 1) 70%,
                  rgba(186, 12, 248, 1) 80%,
                  rgba(251, 7, 217, 1) 90%,
                  rgba(255, 0, 0, 1) 100%
              )`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "50% 100%",
              backgroundPosition: "600% 50%",
            }}
            animate={{
              backgroundPosition: ["100% 50%", "600% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="text-2xl font-semibold"
            aria-label="Showcase"
            onClick={() => navigate("/about")}
          >
            Show case
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default NextPagePopup;
