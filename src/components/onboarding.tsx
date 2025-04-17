
import { useState } from "react";
import { ArrowRight, CalendarClock, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const steps = [
  {
    id: "name",
    title: "What should we call you?",
    description: "Let's personalize your experience",
    icon: <User className="h-6 w-6 text-doit-purple" />,
  },
  {
    id: "interests",
    title: "What are your interests?",
    description: "We'll tailor your experience based on these",
    icon: <Heart className="h-6 w-6 text-doit-purple" />,
  },
  {
    id: "time",
    title: "How much time can you commit?",
    description: "This helps us create realistic action plans",
    icon: <CalendarClock className="h-6 w-6 text-doit-purple" />,
  }
];

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    interests: [] as string[],
    timeCommitment: "",
  });

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const updateFormData = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const currentStep = steps[step];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-4">
      <motion.div
        key={currentStep.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              {currentStep.icon}
            </div>
            <CardTitle className="text-2xl text-center">{currentStep.title}</CardTitle>
            <CardDescription className="text-center">{currentStep.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select your interests</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Fitness", "Business", "Creative", "Technology", "Learning", "Finance"].map((interest) => (
                      <Button
                        key={interest}
                        variant={formData.interests.includes(interest) ? "default" : "outline"}
                        onClick={() => {
                          const newInterests = formData.interests.includes(interest)
                            ? formData.interests.filter(i => i !== interest)
                            : [...formData.interests, interest];
                          updateFormData("interests", newInterests);
                        }}
                        className="justify-start"
                      >
                        {interest}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="time">Weekly time commitment</Label>
                  <Select 
                    onValueChange={(value) => updateFormData("timeCommitment", value)}
                    value={formData.timeCommitment}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select time commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal (1-2 hours/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 hours/week)</SelectItem>
                      <SelectItem value="dedicated">Dedicated (6-10 hours/week)</SelectItem>
                      <SelectItem value="committed">Fully Committed (10+ hours/week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={handleNext}
              disabled={(step === 0 && !formData.name) || 
                       (step === 1 && formData.interests.length === 0) ||
                       (step === 2 && !formData.timeCommitment)}
            >
              {step < steps.length - 1 ? "Continue" : "Get Started"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      
      <div className="absolute bottom-8 flex">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 mx-1 rounded-full ${
              index === step ? "bg-doit-purple" : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
