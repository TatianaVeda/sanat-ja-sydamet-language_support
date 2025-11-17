import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Home, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface AssessmentResult {
  primaryNeed: "language" | "emotional" | "balanced";
  languageScore: number;
  stressScore: number;
  recommendations: string[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const answers = location.state?.answers;
    if (!answers) {
      navigate("/");
      return;
    }

    // Calculate scores based on question categories
    let languageScore = 0;
    let stressScore = 0;
    let languageCount = 0;
    let stressCount = 0;

    // Questions 1, 4, 6 are language-focused
    [1, 4, 6].forEach(id => {
      if (answers[id]) {
        languageScore += parseInt(answers[id]);
        languageCount++;
      }
    });

    // Questions 2, 5, 8 are stress-focused
    [2, 5, 8].forEach(id => {
      if (answers[id]) {
        stressScore += parseInt(answers[id]);
        stressCount++;
      }
    });

    const avgLanguageScore = languageScore / languageCount;
    const avgStressScore = stressScore / stressCount;

    let primaryNeed: "language" | "emotional" | "balanced";
    let recommendations: string[] = [];

    if (avgStressScore >= 2.5 && avgLanguageScore < 2) {
      primaryNeed = "emotional";
      recommendations = [
        "Priority: Emotional and stress support",
        "Create a calm, predictable environment",
        "Consider counseling or play therapy",
        "Focus on emotional regulation activities",
        "Language learning can resume once stress is reduced",
        "Maintain communication in the child's native language for comfort",
      ];
    } else if (avgLanguageScore < 2 && avgStressScore < 2) {
      primaryNeed = "language";
      recommendations = [
        "Priority: Structured language support",
        "Engage with a speech therapist or language specialist",
        "Create consistent language exposure opportunities",
        "Use visual aids and gestures to support comprehension",
        "Celebrate small language achievements",
        "Be patient - language acquisition takes time",
      ];
    } else {
      primaryNeed = "balanced";
      recommendations = [
        "The child may benefit from both emotional and language support",
        "Address stress factors while maintaining language exposure",
        "Gentle, play-based language activities work best",
        "Monitor for changes in behavior or progress",
        "Coordinate between emotional support and language education",
        "Regular reassessment recommended in 4-6 weeks",
      ];
    }

    setResult({
      primaryNeed,
      languageScore: avgLanguageScore,
      stressScore: avgStressScore,
      recommendations,
    });
  }, [location.state, navigate]);

  if (!result) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Assessment Results</h1>
          <p className="text-muted-foreground">Based on your responses</p>
        </div>

        {/* Primary Need Card */}
        <Card className="p-8 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
              {result.primaryNeed === "emotional" ? (
                <Heart className="w-12 h-12 text-primary" />
              ) : result.primaryNeed === "language" ? (
                <Brain className="w-12 h-12 text-primary" />
              ) : (
                <AlertCircle className="w-12 h-12 text-primary" />
              )}
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              {result.primaryNeed === "emotional" && "Emotional Support Priority"}
              {result.primaryNeed === "language" && "Language Support Priority"}
              {result.primaryNeed === "balanced" && "Balanced Support Needed"}
            </h2>
            <p className="text-muted-foreground">
              {result.primaryNeed === "emotional" &&
                "The child appears to be experiencing stress that may be affecting their ability to learn and communicate."}
              {result.primaryNeed === "language" &&
                "The child would benefit most from targeted language support and intervention."}
              {result.primaryNeed === "balanced" &&
                "The child shows signs of needing both emotional and language support."}
            </p>
          </div>

          {/* Score Visualization */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Language Factor</span>
              </div>
              <div className="w-full bg-background rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: `${(result.languageScore / 3) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Score: {result.languageScore.toFixed(1)} / 3.0
              </p>
            </div>

            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Stress Factor</span>
              </div>
              <div className="w-full bg-background rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: `${(result.stressScore / 3) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Score: {result.stressScore.toFixed(1)} / 3.0
              </p>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Recommendations</h3>
          <ul className="space-y-3">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary font-semibold mt-1">•</span>
                <span className="text-muted-foreground flex-1">{rec}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> This assessment is a guide 
              and not a professional diagnosis. Always consult with qualified specialists 
              (psychologists, speech therapists, pediatricians) for a comprehensive evaluation.
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button onClick={() => navigate("/")} size="lg">
            <Home className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
