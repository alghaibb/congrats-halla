"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useState } from "react";

interface VoiceMessageButtonProps {
  audioSrc: string;
  message?: string;
  label?: string;
}

export default function VoiceMessageButton({
  audioSrc,
  message,
  label = "Play message",
}: VoiceMessageButtonProps) {
  const [playing, setPlaying] = useState(false);

  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.volume = 1;

    setPlaying(true);
    audio.play();
    audio.onended = () => setPlaying(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 space-y-3">
      <Button
        onClick={playAudio}
        variant="outline"
        className="flex gap-2 items-center"
        disabled={playing}
      >
        <Volume2 className="w-5 h-5" />
        {label}
      </Button>

      <AnimatePresence>
        {playing && message && (
          <motion.div
            key={message}
            className="bg-white text-purple-800 rounded-full px-4 py-2 shadow font-medium max-w-xs text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
