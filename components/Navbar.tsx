"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import App from "next/app";
import { Dispatch, SetStateAction, useRef, useState } from "react";

import Image from "next/image";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 30) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 box-border flex w-full justify-center pt-3"
    >
      <a href="/" className="absolute left-8 top-5">
        <div className="flex justify-start font-Doto text-2xl text-[#000] font-black">
          DRAW <span className="text-[#7d72ff]">&nbsp;-&nbsp;</span> X
        </div>
      </a>

      <SlideTabs />
    </motion.div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#000] p-1 px-1 font-Doto font-black bg-[#e3e3e3]"
    >
      <Tab setPosition={setPosition}>
        <a href="/" className="w-6 h-6">Home</a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="#features" className="w-6 h-6">Features</a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="/login" className="w-6 h-6">Login</a>
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: any;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-[#000] md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#7d72ff] md:h-12"
    />
  );
};

export default Nav;
