import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  stressReliefActivities, 
  languageSupportActivities, 
  balancedActivities,
  type PracticalActivity 
} from "@/data/practicalRecommendations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Activities = () => {
  const navigate = useNavigate();

  const renderActivities = (activities: PracticalActivity[], title: string, description: string) => (
    <div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="p-4 bg-accent/30 rounded-lg border border-border/50">
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
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Practical Activities & Exercises</h1>
          <p className="text-muted-foreground">Evidence-based activities for supporting children's development</p>
        </div>

        <Card className="p-8">
          <Tabs defaultValue="stress" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="stress">Stress Relief</TabsTrigger>
              <TabsTrigger value="language">Language Support</TabsTrigger>
              <TabsTrigger value="balanced">Balanced Support</TabsTrigger>
            </TabsList>

            <TabsContent value="stress">
              {renderActivities(
                stressReliefActivities,
                "Stress Relief Activities",
                "Specific activities tailored for children experiencing emotional stress and requiring calming support:"
              )}
            </TabsContent>

            <TabsContent value="language">
              {renderActivities(
                languageSupportActivities,
                "Language Support Activities",
                "Activities designed to support language development and acquisition:"
              )}
            </TabsContent>

            <TabsContent value="balanced">
              {renderActivities(
                balancedActivities,
                "Balanced Support Activities",
                "Activities that address both emotional support and language learning:"
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These activities are research-based recommendations. 
              Always adapt them to the individual child's needs and consult with specialists when needed.
            </p>
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

export default Activities;
