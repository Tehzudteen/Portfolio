import React, { FC, useRef } from "react";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import { Link } from "react-router-dom"; // import สำหรับการนำทางภายใน

const About: FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <ProjectsBlock />
        <ExperienceBlock />
      </motion.div>
      {/* Modified HoverImageLinks now includes a popup transition */}
      <HoverImageLinks />
    </div>
  );
};

// Extend HTMLMotionProps เพื่อรองรับ motion props (เช่น whileHover)
interface BlockProps extends HTMLMotionProps<"div"> {
  className?: string;
}

const Block: FC<BlockProps> = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=tom"
      alt="avatar"
      className="mb-4 w-14 h-14 rounded-full"  // เปลี่ยนจาก size-14 เป็น w-14 h-14
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      I build cool websites like this one.
    </h1>
    {/* ใช้ Link สำหรับ client-side routing */}
    <Link to="/contact" className="flex items-center gap-1 text-red-300 hover:underline">
      Contact me <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 row-span-3 bg-blue-600 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/phubet-klubchai-03555730b/"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <RxLinkedinLogo />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 row-span-3 bg-black md:col-span-3"
    >
      <a
        href="https://github.com/Tehzudteen"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I work primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const ProjectsBlock = () => (
  <Block className="col-span-12 text-xl leading-snug">
    <h2 className="mb-4 text-2xl font-bold">Projects</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>
        <strong>Project One:</strong> A web application that streamlines task
        management using React and Tailwind CSS.
      </li>
      <li>
        <strong>Project Two:</strong> An e-commerce platform built with Next.js,
        focusing on performance and accessibility.
      </li>
      <li>
        <strong>Project Three:</strong> A mobile-first design system developed
        for rapid prototyping.
      </li>
    </ul>
  </Block>
);

const ExperienceBlock = () => (
  <Block className="col-span-12 text-xl leading-snug">
    <h2 className="mb-4 text-2xl font-bold">Experience</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>
        <strong>Company A:</strong> Frontend Developer responsible for building
        responsive user interfaces and optimizing performance.
      </li>
      <li>
        <strong>Company B:</strong> UI/UX Designer collaborating with
        cross-functional teams to deliver engaging web experiences.
      </li>
      <li>
        <strong>Freelance:</strong> Developed multiple projects using modern web
        technologies, enhancing user interaction and overall design.
      </li>
    </ul>
  </Block>
);

// HoverImageLinks Component with enhanced transition (popup effect)
export const HoverImageLinks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
      className="bg-neutral-950 p-4 md:p-8"
    >
      {/* แก้ไข grid-cols- ให้ถูกต้อง */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 gap-4">
        <LinkItem
          heading="About"
          subheading="Learn what we do here"
          imgSrc="https://i.pinimg.com/originals/69/03/82/690382855b30e8fdf7a833da178044b6.gif"
          href="#"
        />
        <LinkItem
          heading="Clients"
          subheading="We work with great people"
          imgSrc="https://i.pinimg.com/originals/b7/cf/64/b7cf64f94b16c00147c783ecafa53de9.gif"
          href="#"
        />
        <LinkItem
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="https://i.pinimg.com/originals/5c/b7/e2/5cb7e22b0cef069aff4b0ae8abd5fb3a.gif"
          href="#"
        />
        <LinkItem
          heading="Careers"
          subheading="We want cool people"
          imgSrc="https://i.pinimg.com/originals/5c/b7/e2/5cb7e22b0cef069aff4b0ae8abd5fb3a.gif"
          href="#"
        />
        <LinkItem
          heading="Projects"
          subheading="See my projects in detail"
          imgSrc="https://i.pinimg.com/originals/5c/b7/e2/5cb7e22b0cef069aff4b0ae8abd5fb3a.gif"
          href="#projects"
        />
        <LinkItem
          heading="Experience"
          subheading="My professional journey"
          imgSrc="https://i.pinimg.com/originals/5c/b7/e2/5cb7e22b0cef069aff4b0ae8abd5fb3a.gif"
          href="#experience"
        />
      </div>
    </motion.section>
  );
};

interface LinkItemProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const LinkItem = ({ heading, imgSrc, subheading, href }: LinkItemProps) => {
  // Define a container variant for a popup effect
  const containerVariants = {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={containerVariants}
      whileHover="whileHover"
      initial="initial"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

const Logo = () => (
  <svg
    width="40"
    height="auto"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-12 fill-zinc-50"
  >
    <path
      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
      stopColor="#000000"
    ></path>
    <path
      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
      stopColor="#000000"
    ></path>
  </svg>
);

export default About;
