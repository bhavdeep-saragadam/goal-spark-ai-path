
import { ArrowLeft, Calendar, CheckCircle2, CircleSlash, Clock, Cog, Edit2, FileText, ListChecks, MessageCircle, MoreHorizontal, PlusCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface GoalDetailProps {
  onBack: () => void;
  goalId: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

export function GoalDetail({ onBack, goalId }: GoalDetailProps) {
  // This would normally be fetched based on the goalId
  const goal = {
    id: goalId,
    title: "Start a podcast about tech trends",
    description: "Create and launch a weekly tech podcast discussing emerging trends",
    progress: 35,
    deadline: "May 15, 2025",
    tasks: [
      {
        id: "1",
        title: "Research podcast equipment",
        completed: true,
        dueDate: "Apr 20, 2025"
      },
      {
        id: "2",
        title: "Create podcast branding and cover art",
        completed: true,
        dueDate: "Apr 22, 2025"
      },
      {
        id: "3",
        title: "Set up hosting platform account",
        completed: false,
        dueDate: "Apr 25, 2025"
      },
      {
        id: "4",
        title: "Record intro episode",
        completed: false,
        dueDate: "Apr 29, 2025"
      },
      {
        id: "5",
        title: "Edit and publish pilot episode",
        completed: false,
        dueDate: "May 5, 2025"
      },
      {
        id: "6",
        title: "Submit podcast to directories",
        completed: false,
        dueDate: "May 10, 2025"
      }
    ],
    resources: [
      { title: "Top Podcast Equipment Guide", type: "article" },
      { title: "Podcast Marketing Strategies", type: "video" },
      { title: "Audio Editing Basics", type: "tutorial" }
    ]
  };

  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const totalTasks = goal.tasks.length;

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Cog className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-3xl font-bold">{goal.title}</h1>
          <Button variant="outline" size="sm">
            <Edit2 className="mr-1 h-4 w-4" />
            Edit
          </Button>
        </div>
        <p className="text-muted-foreground mb-4">{goal.description}</p>
        
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Due {goal.deadline}</span>
            </div>
            <div className="flex items-center">
              <ListChecks className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{completedTasks} of {totalTasks} tasks</span>
            </div>
          </div>
          <Badge className="text-xs" variant="secondary">{goal.progress}% complete</Badge>
        </div>
        <Progress value={goal.progress} className="h-2.5" />
      </div>

      <Tabs defaultValue="tasks">
        <TabsList className="mb-6">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Task List</h2>
            <Button size="sm">
              <PlusCircle className="mr-1 h-4 w-4" />
              Add Task
            </Button>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {goal.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid gap-4 md:grid-cols-2">
            {goal.resources.map((resource, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-base">{resource.title}</CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm">View Resource</Button>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="border-dashed flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-secondary/20 transition-colors">
              <PlusCircle className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="font-medium">Add New Resource</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
              <CardDescription>Keep track of ideas and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="min-h-[200px] border rounded-md p-4 bg-card text-card-foreground">
                <p className="text-muted-foreground italic">Click to add notes...</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <FileText className="mr-1 h-4 w-4" />
                Templates
              </Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ai-assistant">
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>Ask questions about your goal</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[300px] flex flex-col">
              <div className="flex-1 space-y-4 mb-4">
                <div className="bg-secondary/30 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">How can I help you with your podcast goal today?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 rounded-md border bg-background"
                />
                <Button>
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TaskItem({ task }: { task: Task }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <Checkbox id={`task-${task.id}`} checked={task.completed} />
        <label
          htmlFor={`task-${task.id}`}
          className={`text-base ${task.completed ? "line-through text-muted-foreground" : ""}`}
        >
          {task.title}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-muted-foreground flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {task.dueDate}
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
