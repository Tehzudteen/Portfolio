"use client";
import { ReactNode, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import NextPagePopup from "../../components/NextPagePopup";

const Home = () => {
  return (
    <div className="bg-white ">
      <TextParallaxContent
        imgUrl="https://i.pinimg.com/originals/ba/ae/b1/baaeb11627db951c761203514986f858.gif"
        subheading="HELLO"
        heading="nice to meet you."
      >
        <Content1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://i.pinimg.com/originals/06/60/ef/0660efe82fa3da42ed56eef013171835.gif"
        subheading=""
        heading=""
      >
        <Content2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://i.pinimg.com/originals/ce/76/0f/ce760fde1800bc12b74dfd67d2a5dcbe.gif"
        subheading="burrr I'm so boring."
        heading="I want to make the new website and new design ."
      >
        <Content3 />
      </TextParallaxContent>
    </div>
  );
};

export default Home;

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative   h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content1 = () => {
  const [isFingersCrossed, setIsFingersCrossed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFingersCrossed((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <motion.h1
        className="col-span-1 text-5xl font-bold md:col-span-4"
        style={{
          background: `
            linear-gradient(
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
        }}
        animate={{
          backgroundPosition: ["600% 50%", "100% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        HI I'm Phubet Klubchai but you can call me Teh
      </motion.h1>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          I'm studying at Mae Fah Luang University, major in software
          engineering. this year am a student in year 3.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          I have experience in programming
          <motion.span className="text-4xl" transition={{ duration: 0.5 }}>
            {isFingersCrossed ? "😘" : "😂"}
          </motion.span>{" "}
          (maybe) but you can tried to me skill because I'm always improve
          myself to be a good programmer.
          <motion.span className="text-4xl" transition={{ duration: 0.5 }}>
            {isFingersCrossed ? "🤞" : "✌️"}
          </motion.span>
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl text-purple-500">
          (joke na) I'm a good programmer and good person
        </p>
      </div>
    </div>
  );
};

const Content2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-6xl font-bold md:col-span-4">
      Why you choose me?
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        I don't know am a good person for a developer, but I'm always improving
        myself all the time, and I'm always learning new things.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        I don't want you to judge me hastily based on my appearance or looks,
        but I want you to get to know me through my efforts and abilities.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1  gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Finally, if you're interested, you can click the button to open the next
        page, and you can me in contact page.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        I hope to work with team and have a good day.😁
        <p className="text-5xl"></p>{" "}
      </p>
    </div>
    <img
      src="https://i.pinimg.com/originals/2d/42/ed/2d42ed9e83f844a06dec2937b048145d.gif"
      className="col-span-1 rounded-3xl  border-solid md:col-span-4"
    />
    <NextPagePopup />
  </div>
);
