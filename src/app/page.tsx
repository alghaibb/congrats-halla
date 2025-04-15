"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import CatCompanion from "@/components/CatCompanion";
import VoiceMessageButton from "@/components/VoiceMessageButton";

export default function Home() {
  const [showGift, setShowGift] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-100 to-purple-200 text-center overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center">
        {showConfetti && <Confetti />}

        {showGift ? (
          <CatCompanion
            src="/mish.jpg"
            size={80}
            position={{ bottom: "10%", left: "50%" }}
            message="You did it! You finally graduated. I&apos;m so proud of you."
          />
        ) : (
          <CatCompanion
            src="/mish.jpg"
            size={80}
            position={{ bottom: "20%", left: "49%" }}
            message="You worked so hard to get here. You really deserve this moment."
          />
        )}

        <CatCompanion
          src="/simba.jpg"
          size={80}
          position={{ top: "10rem", right: "10rem" }}
          message="You kept going even when it was unfair. That&apos;s strength."
          messagePosition="right"
        />

        <CatCompanion
          src="/dash.jpg"
          size={80}
          position={{ top: "10rem", left: "10rem" }}
          message="Everyone saw you fall — but only you chose to stand back up."
          messagePosition="left"
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-purple-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🎓 Congratulations Nurse Halla!
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-xl text-purple-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          You did it! All the late nights, the hard work, and the passion—I&apos;m so
          proud of you. This is only the beginning 💜
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button onClick={() => setShowGift(true)} size="lg">
            🎁 Open Your Gift
          </Button>
        </motion.div>

        {showGift && (
          <motion.div
            className="mt-8 w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-pink-600">
                  💖 A Special Note
                </h2>
                <p className="mt-4 leading-relaxed">
                  Halla, this isn&apos;t just about graduating. It&apos;s about
                  everything you went through to get here. You got failed for
                  the most stupidest reason, wasted 2 whole years, and still had
                  to redo the whole thing for another year and a half. I know
                  how much that broke you — how many times you wanted to give
                  up, how unfair it all was.
                </p>
                <p className="mt-4 leading-relaxed">
                  But you still showed up. You still pushed through when it felt
                  impossible. You cried, you got back up, and you kept going.
                  That&apos;s what makes this so special. You earned this, with
                  every bit of strength you had left.
                </p>
                <p className="mt-4 font-medium text-purple-700">
                  I know this isn&apos;t a materialistic gift — and I&apos;m
                  sorry for that. But I wanted to give you something from the
                  heart, something personal. You mean the world to me, and I
                  hope this small gesture reminds you how much I love you and
                  how proud I am of you.
                </p>

                <p className="mt-4 font-medium text-purple-700">
                  You&apos;ve done what most people would&apos;ve quit on.
                  You&apos;re finally a nurse — and no one can ever take that
                  from you. I love you always, and I&apos;ll never stop being in
                  awe of you 💜
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <VoiceMessageButton audioSrc="/hagir.mp3" label="Click me" />
      </div>
    </main>
  );
}
