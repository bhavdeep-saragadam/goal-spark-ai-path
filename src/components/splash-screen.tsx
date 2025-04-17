
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Lightbulb, ListChecks, Rocket } from "lucide-react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [step, onComplete]);

  const icons = [
    <Lightbulb key="idea" className="h-12 w-12" />,
    <Brain key="plan" className="h-12 w-12" />,
    <ListChecks key="tasks" className="h-12 w-12" />,
    <Rocket key="achieve" className="h-12 w-12" />
  ];

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-primary dark:bg-gradient-secondary z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">DoIT AI</h1>
        <p className="text-xl text-white/90 mb-12">Dream it. Do it.</p>

        <div className="flex justify-center space-x-8 mb-16">
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: i === step ? 1 : 0.3,
                scale: i === step ? 1 : 0.8,
                color: i === step ? "#ffffff" : "#ffffff80"
              }}
              className="flex flex-col items-center"
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="h-2 w-64 bg-white/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${(step + 1) * 25}%` }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
