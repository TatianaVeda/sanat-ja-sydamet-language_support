import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
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
      <p className="text-base text-muted-foreground mb-6">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <Card key={index} className="p-4 bg-gradient-to-br from-accent/40 to-secondary/20 border-2 border-primary/10 hover:border-primary/30 transition-all shadow-md hover:shadow-lg flex flex-col">
            <div className="flex justify-between items-start gap-2 mb-3">
              <h4 className="font-semibold text-lg text-foreground flex-grow">{activity.title}</h4>
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              <Badge variant="outline" className="text-xs bg-background/60">
                {activity.environment === "both" ? "Home & Daycare" : 
                 activity.environment === "home" ? "Home" : "Daycare"}
              </Badge>
              <Badge variant="secondary" className="text-xs capitalize">
                {activity.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 flex-grow">{activity.description}</p>
            <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary shadow-sm">
              <p className="text-sm text-foreground">
                <strong className="text-primary">How it helps:</strong> {activity.howItHelps}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/")}
          className="mb-4 border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10"
        >
          <Home className="w-5 h-5" />
        </Button>

        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full mb-4 shadow-lg">
            <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Practical Activities & Exercises</h1>
          <p className="text-sm md:text-base text-muted-foreground">Evidence-based activities for supporting children's development</p>
        </div>

        <Card className="p-4 md:p-8 shadow-xl border-primary/20">
          <Tabs defaultValue="stress" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4 md:mb-6 bg-accent/50">
              <TabsTrigger value="stress" className="text-xs md:text-sm">Stress Relief</TabsTrigger>
              <TabsTrigger value="language" className="text-xs md:text-sm">Language Support</TabsTrigger>
              <TabsTrigger value="balanced" className="text-xs md:text-sm">Balanced Support</TabsTrigger>
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
        <Footer />
      </div>
    </div>
  );
};

export default Activities;
