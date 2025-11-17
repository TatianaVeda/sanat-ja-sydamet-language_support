import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Brain, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { multilingualSupportActivities } from "@/data/practicalRecommendations";

const MultilingualSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
            <Languages className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Supporting Multilingual Children</h1>
          <p className="text-muted-foreground">
            Reducing stress for children navigating multiple language environments
          </p>
        </div>

        <Card className="p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Understanding the Challenge</h2>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Children managing multiple languages at home (e.g., Farsi + Russian) while learning a new language 
            at daycare (Finnish) face unique challenges:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Cognitive load of organizing 3+ language systems simultaneously</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Cultural adaptation alongside linguistic adaptation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Potential feeling of identity loss if home languages aren't valued</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Communication barriers during high-stress moments (tiredness, frustration, fear)</span>
            </li>
          </ul>

          <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
            <p className="text-sm text-foreground">
              <strong>Key Principle:</strong> Never ask a child to choose between their languages. All languages 
              are valuable and support each other. Strong home language skills predict strong Finnish acquisition. 
              The goal is addition (Finnish+), not subtraction (Finnish instead of home languages).
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/20">
          <h3 className="text-xl font-semibold text-foreground mb-6">Practical Strategies</h3>
          
          <div className="space-y-4">
            {multilingualSupportActivities.map((activity, index) => (
              <div key={index} className="p-4 bg-background/80 rounded-lg border border-border/50">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-foreground">{activity.title}</h4>
                  <div className="flex gap-2 flex-shrink-0">
                    <Badge variant="outline" className="text-xs">
                      {activity.environment === "both" ? "Home & Daycare" : 
                       activity.environment === "home" ? "Home" : "Daycare"}
                    </Badge>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {activity.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <div className="p-3 bg-primary/5 rounded border-l-4 border-primary">
                  <p className="text-sm text-foreground">
                    <strong>How it helps:</strong> {activity.howItHelps}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button onClick={() => navigate("/")} size="lg" variant="outline">
            <Home className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultilingualSupport;
