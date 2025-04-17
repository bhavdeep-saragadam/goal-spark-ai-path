
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  BarChart2, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  ListTodo, 
  Mic, 
  Rocket, 
  Search, 
  Send,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "./theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Goal {
  id: string;
  title: string;
  progress: number;
  deadline: string;
  type: string;
}

export function Dashboard() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmitGoal = () => {
    if (!inputValue.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const newGoal: Goal = {
        id: Date.now().toString(),
        title: inputValue,
        progress: 0,
        deadline: "2 weeks",
        type: "fitness"
      };
      
      setGoals([newGoal, ...goals]);
      setInputValue("");
      setIsProcessing(false);
    }, 2000);
  };

  const recommendedGoals = [
    "Start a podcast",
    "Learn to code",
    "Train for a 5K",
    "Launch an online store"
  ];

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Rocket className="h-8 w-8 text-doit-purple mr-2" />
          <h1 className="text-2xl font-bold gradient-text">DoIT AI</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-doit-purple text-white">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <Card className="glass-card mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">What do you want to achieve?</CardTitle>
          <CardDescription>Tell DoIT your goal and we'll create a plan to help you achieve it</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="E.g., I want to start a podcast..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSubmitGoal} 
              disabled={isProcessing || !inputValue.trim()}
              className="gap-2"
            >
              {isProcessing ? (
                <>Processing<span className="ml-1 animate-pulse">...</span></>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Go
                </>
              )}
            </Button>
            <Button variant="outline" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        {inputValue === "" && (
          <CardFooter className="pt-0">
            <div className="flex flex-wrap gap-2">
              {recommendedGoals.map((goal) => (
                <Badge 
                  key={goal} 
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={() => setInputValue(goal)}
                >
                  {goal}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>

      <Tabs defaultValue="current">
        <TabsList className="mb-6">
          <TabsTrigger value="current">Current Goals</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          {goals.length === 0 ? (
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Target className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">No goals yet</h3>
                <p className="text-muted-foreground mb-6">Start by telling DoIT what you want to achieve</p>
                <Button 
                  variant="outline" 
                  onClick={() => document.querySelector('input')?.focus()}
                >
                  Create your first goal
                </Button>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed">
          <div className="text-center py-16">
            <Award className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold mb-2">No completed goals yet</h3>
            <p className="text-muted-foreground">Your achievements will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <div className="text-center py-16">
            <BarChart2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold mb-2">No insights yet</h3>
            <p className="text-muted-foreground">Complete goals to see your performance insights</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function GoalCard({ goal }: { goal: Goal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle>{goal.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> Due in {goal.deadline}
              </CardDescription>
            </div>
            <Badge variant={goal.progress > 50 ? "default" : "outline"}>
              {goal.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between mb-1 text-sm">
            <span>Progress</span>
            <span>{goal.progress}%</span>
          </div>
          <Progress value={goal.progress} className="h-2" />
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ListTodo className="h-4 w-4" />
                <span className="ml-1">Tasks</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Search className="h-4 w-4" />
                <span className="ml-1">Resources</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <span className="mr-1">View</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
