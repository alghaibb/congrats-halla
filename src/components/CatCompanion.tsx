"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface CatCompanionProps {
  src: string;
  size?: number;
  className?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  message?: string;
  messagePosition?: "left" | "right" 
}

export default function CatCompanion({
  src,
  size = 80,
  position = {},
  className,
  message,
  messagePosition = "left",
}: CatCompanionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.2}
      className={cn("fixed z-50 cursor-grab active:cursor-grabbing", className)}
      style={{ ...position, width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt="Cat Companion"
          width={size}
          height={size}
          className="rounded-full shadow-lg object-cover w-full h-full"
        />

        <AnimatePresence>
          {hovered && message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -24 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute -top-20 bg-background text-foreground text-sm border border-border rounded-md px-3 py-2 shadow max-w-[200px] w-max whitespace-normal text-center z-50",
                messagePosition === "left" && "left-0",
                messagePosition === "right" && "right-0",
              )}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
