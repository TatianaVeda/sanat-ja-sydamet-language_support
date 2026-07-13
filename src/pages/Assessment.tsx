import { useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    category: "language",
    question: "Does the child communicate effectively in their native language?",
    options: [
      { value: "3", label: "Yes, very well" },
      { value: "2", label: "Somewhat" },
      { value: "1", label: "No, struggles in all languages" },
    ],
  },
  {
    id: 2,
    category: "stress",
    question: "Have there been recent major life changes? (new sibling, moving, parental illness)",
    options: [
      { value: "3", label: "Yes, significant changes" },
      { value: "2", label: "Minor changes" },
      { value: "1", label: "No changes" },
    ],
  },
  {
    id: 3,
    category: "behavior",
    question: "Has the child's behavior or mood changed recently?",
    options: [
      { value: "3", label: "Yes, noticeably" },
      { value: "2", label: "Slightly" },
      { value: "1", label: "No change" },
    ],
  },
  {
    id: 4,
    category: "language",
    question: "How long has the child been exposed to Finnish?",
    options: [
      { value: "1", label: "Less than 6 months" },
      { value: "2", label: "6-12 months" },
      { value: "3", label: "More than 1 year" },
    ],
  },
  {
    id: 5,
    category: "stress",
    question: "Does the child show signs of anxiety or withdrawal?",
    options: [
      { value: "3", label: "Yes, frequently" },
      { value: "2", label: "Sometimes" },
      { value: "1", label: "Rarely or never" },
    ],
  },
  {
    id: 6,
    category: "language",
    question: "Does the child attempt to use Finnish even when struggling?",
    options: [
      { value: "3", label: "Yes, tries actively" },
      { value: "2", label: "Sometimes tries" },
      { value: "1", label: "Avoids using Finnish" },
    ],
  },
  {
    id: 7,
    category: "social",
    question: "How does the child interact with peers?",
    options: [
      { value: "3", label: "Actively engages" },
      { value: "2", label: "Selective interaction" },
      { value: "1", label: "Isolates or avoids others" },
    ],
  },
  {
    id: 8,
    category: "stress",
    question: "Does the child have difficulty sleeping or eating?",
    options: [
      { value: "3", label: "Yes, noticeable issues" },
      { value: "2", label: "Minor issues" },
      { value: "1", label: "No issues" },
    ],
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results and navigate
      navigate("/results", { state: { answers } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate("/");
    }
  };

  const canProceed = answers[questions[currentQuestion].id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            {questions[currentQuestion].question}
          </h3>

          <RadioGroup
            value={answers[questions[currentQuestion].id]}
            onValueChange={handleAnswer}
            className="space-y-4"
          >
            {questions[currentQuestion].options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-base"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!canProceed}>
            {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Assessment;
