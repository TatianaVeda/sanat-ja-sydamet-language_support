import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Brain, Heart, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Child Support Assessment Tool
          </h1>
          <p className="text-xl text-muted-foreground">
            Understanding what your child truly needs
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-card rounded-lg p-8 mb-8 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Children in multilingual environments are sometimes labeled as having special needs 
            when they struggle with language. However, the real issue might not be a lack of 
            language skills, but rather temporary stress from life changes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This tool helps educators and parents distinguish between:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Language Support Needs
              </h3>
              <p className="text-sm text-muted-foreground">
                Genuine language learning challenges requiring targeted intervention
              </p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Emotional Support Needs
              </h3>
              <p className="text-sm text-muted-foreground">
                Stress-related difficulties requiring emotional and therapeutic support
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/assessment")}
            className="text-lg px-8"
          >
            Start Assessment
            <ArrowRight className="ml-2" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Takes approximately 5-7 minutes to complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
