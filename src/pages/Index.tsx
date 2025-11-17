import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, Heart, BookOpen, Languages, ArrowRight, Flower } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import contentBg from "@/assets/content-bg.jpg";
import daisyLogo from "@/assets/daisy-logo.png";

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
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30 relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full mb-6 shadow-lg">
            <Flower className="w-10 h-10 text-secondary" strokeWidth={2.5} />
            <Heart className="w-10 h-10 text-primary animate-pulse" />
            <Brain className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Tunne + Kieli = Sanat ja Sydämet</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">Understand what your child truly needs</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Does your kid need help learning language, or help feeling calm and safe first?
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${item.gradient} border-2 border-transparent hover:border-primary/60 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-2xl relative overflow-hidden`}
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex p-3 bg-background/80 rounded-lg mb-4 self-start shadow-md">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>
                <Button onClick={item.action} className="w-full group" size="lg">
                  {item.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              {/* Decorative icon in bottom right corner */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <item.icon className="w-16 h-16 text-primary" />
              </div>
            </Card>
          ))}
        </div>

        {/* Educational Resources */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/10 shadow-lg relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
            style={{ backgroundImage: `url(${contentBg})` }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Educational Resources</h2>
            </div>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.asha.org/public/speech/development/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-background/60 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground mb-2">Speech & Language Development</h3>
              <p className="text-sm text-muted-foreground">ASHA resources on typical speech and language milestones</p>
            </a>
            <a 
              href="https://www.zerotothree.org/resource/early-childhood-mental-health/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-background/60 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground mb-2">Early Childhood Mental Health</h3>
              <p className="text-sm text-muted-foreground">Zero to Three resources on emotional development and stress</p>
            </a>
            <a 
              href="https://www.naeyc.org/resources/topics/dual-language-learners" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-background/60 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground mb-2">Multilingual Children</h3>
              <p className="text-sm text-muted-foreground">NAEYC guidance on supporting dual language learners</p>
            </a>
            <a 
              href="https://www.understood.org/en/articles/child-development-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-background/60 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground mb-2">Developmental Milestones</h3>
              <p className="text-sm text-muted-foreground">Track typical developmental progress by age</p>
            </a>
          </div>
          </div>
        </Card>

        {/* Problem Statement - The Challenge */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-accent/30 to-secondary/20 border-primary/20 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 text-foreground">The Challenge</h2>
          <div className="space-y-3 text-muted-foreground text-sm">
            <p>
              In early childhood education, children are often labeled as having "special needs" when they struggle to
              communicate or engage. However, the root cause isn&apos;t always a developmental delay.
            </p>
            <p>
              Many children possess strong language skills and abilities in their native language, but face temporary
              barriers when:
            </p>
            <ul className="space-y-1.5 ml-6">
              <li className="flex gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>Experiencing stress from life changes (new sibling, relocation, family illness)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>Navigating multiple languages at home and in daycare</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-semibold">•</span>
                <span>Adapting to a new cultural and linguistic environment</span>
              </li>
            </ul>
            <p className="font-semibold text-foreground">
              The question isn&apos;t always "Does this child need a speech therapist?" but rather "Does this child need
              stress support first, or focused language help?"
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="p-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 shadow-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Important:</strong> This tool provides guidance and is not a substitute
            for professional assessment. Always consult qualified specialists (psychologists, speech therapists,
            pediatricians) for comprehensive evaluation.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
