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
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full mb-6 shadow-lg">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" />
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary via-accent-foreground to-secondary bg-clip-text text-transparent">
            Tunne + Kieli = Sanat ja Sydämet
          </h1>
          <p className="text-lg md:text-xl font-semibold text-primary max-w-3xl mx-auto mb-2">
            Understand what your child truly needs
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Does your child need help learning language, or help feeling calm and safe first?
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="p-6 md:p-8 mb-8 md:mb-12 bg-gradient-to-br from-accent/30 to-secondary/20 border-primary/20 shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">The Challenge</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              In early childhood education, children are often labeled as having "special needs" when they struggle to
              communicate or engage. However, the root cause isn&apos;t always a developmental delay.
            </p>
            <p>
              Many children possess strong language skills and abilities in their native language, but face temporary
              barriers when:
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
              The question isn&apos;t always "Does this child need a speech therapist?" but rather "Does this child need
              stress support first, or focused language help?"
            </p>
          </div>
        </Card>

        {/* Menu Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className={`p-5 md:p-6 bg-gradient-to-br ${item.gradient} border-2 border-transparent hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex p-3 bg-gradient-to-br from-background/80 to-background/60 rounded-xl mb-4 self-start shadow-md">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow">{item.description}</p>
                <Button onClick={item.action} className="w-full group shadow-lg" size="lg">
                  {item.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-4 md:p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30 shadow-lg">
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            <strong className="text-primary">Important:</strong> This tool provides guidance and is not a substitute
            for professional assessment. Always consult qualified specialists (psychologists, speech therapists,
            pediatricians) for comprehensive evaluation.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
