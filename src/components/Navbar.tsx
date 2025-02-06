import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define the type for the cursor position state
interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

const Navbar: React.FC = () => {
  return (
    <div className="bg-neutral-100 py-4 flex justify-center">
      <SlideTabs />
    </div>
  );
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition} to="/">Me</Tab>
      <Tab setPosition={setPosition} to="/about">About</Tab>
      <Tab setPosition={setPosition} to="/Contact">Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

// Define the props for the Tab component
interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  to: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, to }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black transition-colors duration-300 hover:text-white md:px-5 md:py-3 md:text-base"
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};

// Define the props for the Cursor component
interface CursorProps {
  position: CursorPosition;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};


export default Navbar;
