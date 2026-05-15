import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Sparkles, Heart } from "lucide-react";
import daisyLogo from "@/assets/daisy-logo.png";

type Mood = {
  emoji: string;
  label: string;
  tip: string;
};

const moods: Mood[] = [
  {
    emoji: "😊",
    label: "Happy & playful",
    tip: "Great day to try something new together — a silly dance, a song in your language, or building a pillow fort.",
  },
  {
    emoji: "😐",
    label: "Quiet, a bit off",
    tip: "Slow down today. Cuddle on the couch, read a familiar book, and skip anything overstimulating.",
  },
  {
    emoji: "😢",
    label: "Cranky or teary",
    tip: "Big feelings need a small world. Dim the lights, offer water and a snack, and just be near them — no fixing needed.",
  },
  {
    emoji: "😡",
    label: "Stormy & resistant",
    tip: "Drop expectations for the day. Try water play, a warm bath, or jumping on the bed to release the energy safely.",
  },
  {
    emoji: "😴",
    label: "Tired & clingy",
    tip: "They're filling their cup. Carry them, cancel plans, and let screen time be okay today — rest is the work.",
  },
];

type Situation = {
  emoji: string;
  title: string;
  whatHelps: string[];
  avoid: string;
};

const situations: Situation[] = [
  {
    emoji: "👶",
    title: "When a new sibling arrived",
    whatHelps: [
      "15 minutes of one-on-one time, same time every day",
      "Let them help with small baby tasks (passing a diaper)",
      "Name the feeling: \"It's hard to share mom right now\"",
    ],
    avoid: "Phrases like \"you're the big one now\" — they're still little too.",
  },
  {
    emoji: "🏠",
    title: "When you've moved homes",
    whatHelps: [
      "Unpack their room first, with familiar smells and toys",
      "Walk the new neighborhood together — make a 'favorites' map",
      "Keep one bedtime ritual exactly the same",
    ],
    avoid: "Don't rush them to love the new place. Mourning the old one is normal.",
  },
  {
    emoji: "🏫",
    title: "When daycare feels hard",
    whatHelps: [
      "A tiny object from home in their pocket (a pebble, a felt heart)",
      "Short, predictable goodbye ritual — same words, same hug",
      "After pickup: snack first, questions later",
    ],
    avoid: "Long goodbyes and \"don't cry\" — let the tears out, then go.",
  },
  {
    emoji: "🌍",
    title: "When languages get tangled",
    whatHelps: [
      "Stay relaxed when they mix languages — it's a sign of progress",
      "Read in your home language daily, even just 5 minutes",
      "Celebrate any word in any language with a smile",
    ],
    avoid: "Correcting mid-sentence. Repeat back the right version naturally instead.",
  },
  {
    emoji: "😷",
    title: "When someone in the family is sick",
    whatHelps: [
      "Tell the truth in small words: \"Papa's body is resting\"",
      "Keep meals and bedtime steady — kids feel safe in routine",
      "Give them a job: drawing get-well cards, fluffing pillows",
    ],
    avoid: "Whispered conversations they can half-hear. Clarity calms.",
  },
  {
    emoji: "🌙",
    title: "When sleep falls apart",
    whatHelps: [
      "Add a quiet wind-down: warm bath, dim lights, slow story",
      "A nightlight and a 'dream catcher' (any soft toy works)",
      "Sit nearby until they drift — presence beats words",
    ],
    avoid: "Long lectures about staying in bed. Tomorrow's a new try.",
  },
];

const DailyCare = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

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

        {/* Header with mascot */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block mb-4 animate-fade-in">
            <img
              src={daisyLogo}
              alt="Daisy mascot"
              className="w-24 h-24 md:w-28 md:h-28 mx-auto hover-scale"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            Hi! I'm Daisy 🌼
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's check in on your little one today — then I'll give you one tiny thing to try.
          </p>
        </div>

        {/* Daily mood check-in */}
        <Card className="p-6 md:p-8 mb-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Today's mood check-in
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            How does your child feel right now? Tap one.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood)}
                className={`p-4 rounded-2xl border-2 transition-all hover-scale ${
                  selectedMood?.label === mood.label
                    ? "border-primary bg-primary/15 shadow-md"
                    : "border-border bg-background/60 hover:border-primary/40"
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="text-xs font-medium text-foreground">{mood.label}</div>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="p-5 bg-background/80 rounded-xl border-l-4 border-primary animate-fade-in shadow-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Daisy says:
                  </p>
                  <p className="text-base text-foreground">{selectedMood.tip}</p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* "When X happened" cards */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            When… 💭
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Pick what's going on in your family. Tiny scripts, no judgement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {situations.map((s) => (
            <Card
              key={s.title}
              className="p-5 bg-gradient-to-br from-background to-accent/20 border-2 border-primary/10 hover:border-primary/40 transition-all shadow-md hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{s.emoji}</span>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              </div>

              <Badge variant="secondary" className="mb-2 text-xs">
                Try this
              </Badge>
              <ul className="space-y-1.5 mb-4">
                {s.whatHelps.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary font-bold">✿</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Skip:</strong> {s.avoid}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">
            🌼 Come back tomorrow — Daisy will be here with a fresh check-in.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default DailyCare;
