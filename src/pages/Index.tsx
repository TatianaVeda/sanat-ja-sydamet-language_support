import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, Heart, BookOpen, Languages, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: Brain,
      title: "Child Assessment",
      description: "Take our assessment to understand whether your child needs language support or emotional support",
      action: () => navigate("/assessment"),
      buttonText: "Start Assessment",
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: BookOpen,
      title: "Practical Activities",
      description: "Browse evidence-based activities and exercises for stress relief and language development",
      action: () => navigate("/activities"),
      buttonText: "View Activities",
      gradient: "from-green-500/10 to-teal-500/10",
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Special strategies for children navigating multiple languages at home and daycare",
      action: () => navigate("/multilingual"),
      buttonText: "Learn More",
      gradient: "from-orange-500/10 to-pink-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 p-4 bg-primary/10 rounded-full mb-6">
            <Heart className="w-10 h-10 text-primary" />
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Tunne + Kieli = Sanat ja Sydämet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding what your child truly needs
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="p-8 mb-12 bg-accent/20">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">The Challenge</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              In early childhood education, children are often labeled as having "special needs" when they 
              struggle to communicate or engage. However, the root cause isn&apos;t always a developmental delay.
            </p>
            <p>
              Many children possess strong language skills and abilities in their native language, but face 
              temporary barriers when:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-3">
                <span className="text-primary font-semibold mt-1">•</span>
                <span>Experiencing stress from life changes (new sibling, relocation, family illness)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-semibold mt-1">•</span>
                <span>Navigating multiple languages at home and in daycare</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-semibold mt-1">•</span>
                <span>Adapting to a new cultural and linguistic environment</span>
              </li>
            </ul>
            <p className="font-semibold text-foreground mt-4">
              The question isn&apos;t always "Does this child need a speech therapist?" but rather 
              "Does this child need stress support first, or focused language help?"
            </p>
          </div>
        </Card>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className={`p-6 bg-gradient-to-br ${item.gradient} border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105`}
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex p-3 bg-background/60 rounded-lg mb-4 self-start">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>
                <Button 
                  onClick={item.action}
                  className="w-full group"
                  size="lg"
                >
                  {item.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Important:</strong> This tool provides guidance and is not 
            a substitute for professional assessment. Always consult qualified specialists 
            (psychologists, speech therapists, pediatricians) for comprehensive evaluation.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
