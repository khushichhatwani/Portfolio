"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-5  transform  z-50  text-pink-700  px-6 py-3 flex items-center gap-6",
          className
        )}
      >
        {navItems.map((nav, idx) => (
          <Link
            key={idx}
            href={nav.link}
            className="hover:text-pink-500 text-sm font-semibold transition-colors"
          >
            <div className="flex items-center gap-1">
              {nav.icon}
              {nav.name}
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
