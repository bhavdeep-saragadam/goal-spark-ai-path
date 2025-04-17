import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Brain, Clock, Award, Check, ChevronRight } from "lucide-react";
export default function Landing() {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Rocket className="h-6 w-6 text-doit-purple mr-2" />
          <h1 className="text-xl font-bold gradient-text">DoIT AI</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link to="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              Dream it. <span className="gradient-text">Do it.</span>
            </motion.h1>
            <motion.p className="text-xl mb-8 text-muted-foreground" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              Let DoIT AI create personalized roadmaps for any goal you want to achieve.
              From starting a podcast to training for a marathon, we'll guide you every step of the way.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <Link to="/login">
                <Button size="lg" className="mr-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  Start Crushing Goals
                  <motion.div animate={{
                  x: isHovered ? 5 : 0
                }} transition={{
                  duration: 0.2
                }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8
          }} className="relative">
              <div className="glass-card p-6 rounded-xl overflow-hidden bg-zinc-900">
                <div className="bg-doit-purple/10 dark:bg-doit-purple/20 p-4 rounded-lg mb-4">
                  <h3 className="font-medium mb-2">I want to start a podcast</h3>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-doit-purple hover:bg-doit-deep-purple">Create Plan</Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Choose your niche</h4>
                      <p className="text-xs text-muted-foreground">Define your podcast topic and target audience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1">
                      <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Get equipment</h4>
                      <p className="text-xs text-muted-foreground">Select basic recording gear within your budget</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1">
                      <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Record first episode</h4>
                      <p className="text-xs text-muted-foreground">Due in 4 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How DoIT AI helps you succeed</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="glass-card p-6 rounded-xl flex flex-col items-center text-center bg-zinc-900">
            <div className="bg-gradient-primary p-4 rounded-full mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Powered Roadmaps</h3>
            <p className="text-muted-foreground">Personalized step-by-step plans tailored to your experience, time availability, and learning style.</p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="glass-card p-6 rounded-xl flex flex-col items-center text-center bg-zinc-900">
            <div className="bg-gradient-primary p-4 rounded-full mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Progress Tracking</h3>
            <p className="text-muted-foreground">Monitor your achievements, celebrate milestones, and stay accountable with smart reminders.</p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl flex flex-col items-center text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
            <div className="bg-gradient-primary p-4 rounded-full mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Gamified Experience</h3>
            <p className="text-muted-foreground">Earn badges, unlock achievements, and build streaks that keep you motivated throughout your journey.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-doit-purple/10 to-doit-blue/5 dark:from-doit-purple/20 dark:to-doit-blue/10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve your goals?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Join thousands of goal-crushers who are turning dreams into reality with DoIT AI's guidance.
            </p>
            <Link to="/login">
              <Button size="lg" className="px-8">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Rocket className="h-5 w-5 text-doit-purple mr-2" />
            <span className="font-semibold">DoIT AI</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DoIT AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
}