
import { Link } from "react-router-dom";
import { App } from "@/components/app";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-lg font-bold gradient-text">DoIT AI</Link>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        <App />
      </div>
    </div>
  );
};

export default Index;
