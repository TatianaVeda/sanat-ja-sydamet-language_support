import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Sparkles, Heart, Settings2 } from "lucide-react";
import daisyLogo from "@/assets/daisy-logo.png";

type AgeBand = "0-2" | "3-4" | "5-6" | "7+";
type LangContext = "one-home-lang" | "two-home-langs" | "finnish-only-home";

const ageOptions: { id: AgeBand; label: string; hint: string }[] = [
  { id: "0-2", label: "0–2 yrs", hint: "Baby & toddler" },
  { id: "3-4", label: "3–4 yrs", hint: "Little explorer" },
  { id: "5-6", label: "5–6 yrs", hint: "Pre-school" },
  { id: "7+", label: "7+ yrs", hint: "School age" },
];

const langOptions: { id: LangContext; label: string }[] = [
  { id: "one-home-lang", label: "One home language + Finnish" },
  { id: "two-home-langs", label: "Two home languages + Finnish" },
  { id: "finnish-only-home", label: "Finnish at home only" },
];

type Mood = {
  emoji: string;
  label: string;
  tipByAge: Record<AgeBand, string>;
};

const moods: Mood[] = [
  {
    emoji: "😊",
    label: "Happy & playful",
    tipByAge: {
      "0-2": "Mirror their smiles and sounds. Peek-a-boo and gentle tickles build connection more than any toy.",
      "3-4": "Channel the joy into pretend play — a tea party or animal parade in your home language.",
      "5-6": "Great moment for a small challenge: a treasure hunt with clues, or teaching them one new word in each language.",
      "7+": "Ride the wave — invite them to share a story from school or teach you something they know.",
    },
  },
  {
    emoji: "😐",
    label: "Quiet, a bit off",
    tipByAge: {
      "0-2": "Wear them close, hum a familiar song. Babies read your calm before your words.",
      "3-4": "Sit on the floor with their favorite toy and wait. Let them come to you — no questions yet.",
      "5-6": "Offer a side-by-side activity: drawing, Lego, playdough. Conversation flows easier without eye contact.",
      "7+": "Skip 'how was your day?' Try 'want to walk to the shop with me?' — talk happens in motion.",
    },
  },
  {
    emoji: "😢",
    label: "Cranky or teary",
    tipByAge: {
      "0-2": "Check the basics: hungry, tired, too hot? Then just hold and rock — words come second.",
      "3-4": "Name the feeling in your home language: 'You're sad. I'm here.' Don't try to fix it.",
      "5-6": "Offer a 'soft corner' — pillows, a blanket, dim light. Let them cry it out with you nearby.",
      "7+": "Validate first: 'That sounds really hard.' Solutions can wait until tomorrow.",
    },
  },
  {
    emoji: "😡",
    label: "Stormy & resistant",
    tipByAge: {
      "0-2": "Stay calm and low. Offer water, change scenery — a window, a different room.",
      "3-4": "Big body movement: jumping, stomping, ripping old paper. Release before reasoning.",
      "5-6": "Try a warm bath or cold water on the wrists. Co-regulate with slow breaths beside them.",
      "7+": "Give them space and a clear exit: 'I'll be in the kitchen when you're ready.' Don't chase the storm.",
    },
  },
  {
    emoji: "😴",
    label: "Tired & clingy",
    tipByAge: {
      "0-2": "Cancel everything non-essential. Carrier, dim room, early bedtime — sleep debt is real.",
      "3-4": "Quiet floor play, an audiobook in your home language, an extra snack. Skip outings today.",
      "5-6": "A 'pajama afternoon' is okay. Screen time without guilt — they're refilling.",
      "7+": "Pull back homework expectations. A nap, a long bath, lights out earlier than usual.",
    },
  },
];

type Situation = {
  emoji: string;
  title: string;
  whatHelpsByAge: Record<AgeBand, string[]>;
  langNote?: Partial<Record<LangContext, string>>;
  avoid: string;
};

const situations: Situation[] = [
  {
    emoji: "👶",
    title: "When a new sibling arrived",
    whatHelpsByAge: {
      "0-2": [
        "Keep their routine identical — same bed, same songs, same person doing bedtime",
        "Let them touch and 'help' the baby for 30 seconds, then redirect",
        "Extra physical contact: carry them too, even if it's hard",
      ],
      "3-4": [
        "15 minutes of one-on-one time, same time every day, phone away",
        "Let them help with tiny tasks (passing a diaper, picking a onesie)",
        "Name the feeling out loud: 'It's hard to share mom right now'",
      ],
      "5-6": [
        "Give them a 'big' role they choose — book reader, song picker, photo taker",
        "Plan one weekly outing just the two of you, no baby",
        "Let them have a private space the baby can't touch",
      ],
      "7+": [
        "Acknowledge the unfairness honestly: 'Yes, the baby gets more time right now'",
        "Invite them into adult-ish moments (cooking together, late chat after baby sleeps)",
        "Watch for them being 'too good' — that often hides big feelings",
      ],
    },
    avoid: "Phrases like 'you're the big one now' — they're still little too.",
  },
  {
    emoji: "🏠",
    title: "When you've moved homes",
    whatHelpsByAge: {
      "0-2": [
        "Unpack their sleep space first — same crib, same sheets, same lovey",
        "Keep nap and feed times exactly the same for the first 2 weeks",
        "Wear something with the old home's smell for a few days",
      ],
      "3-4": [
        "Unpack their room first, with familiar toys visible",
        "Walk the new neighborhood together — find a 'favorite tree'",
        "Keep one bedtime ritual exactly the same",
      ],
      "5-6": [
        "Let them choose one thing about the new room (poster, sheet color)",
        "Make a small photo book of the old home to keep",
        "Visit the new daycare/school before day one if you can",
      ],
      "7+": [
        "Help them stay in touch with old friends — set up one video call",
        "Be patient with grumpiness — moving grief lasts months, not days",
        "Give them a real say in setting up their space",
      ],
    },
    avoid: "Don't rush them to love the new place. Mourning the old one is normal.",
  },
  {
    emoji: "🏫",
    title: "When daycare feels hard",
    whatHelpsByAge: {
      "0-2": [
        "A worn shirt of yours in their cubby — smell is a powerful anchor",
        "A short, predictable goodbye: kiss, wave, leave. Don't sneak out.",
        "Reunion ritual: same song or phrase when you pick up",
      ],
      "3-4": [
        "A tiny object from home in their pocket (a pebble, a felt heart)",
        "Short, predictable goodbye ritual — same words, same hug",
        "After pickup: snack first, questions later",
      ],
      "5-6": [
        "Talk through the day order with a simple drawing the night before",
        "Pack a tiny note in their lunch in your home language",
        "Make pickup low-key — no big questions in the first 10 minutes",
      ],
      "7+": [
        "Ask one specific question: 'who did you sit with at lunch?'",
        "Notice patterns — same day each week harder? Talk to the teacher",
        "Protect after-school as quiet recovery time, not activity time",
      ],
    },
    langNote: {
      "one-home-lang":
        "If they're newly in Finnish daycare, expect a quiet phase of 2–6 months. That's normal — they're absorbing.",
      "two-home-langs":
        "Don't worry if they mix all three languages at pickup. The brain is sorting in the background.",
      "finnish-only-home":
        "Help them find a peer who speaks Finnish well at home — same-language friends ease the load.",
    },
    avoid: "Long goodbyes and 'don't cry' — let the tears out, then go.",
  },
  {
    emoji: "🌍",
    title: "When languages get tangled",
    whatHelpsByAge: {
      "0-2": [
        "Talk, sing, narrate in your home language constantly — quantity matters most now",
        "Don't worry about 'late' first words — bilingual babies often start a bit later",
        "Read board books in your home language daily, even just 2 minutes",
      ],
      "3-4": [
        "Stay relaxed when they mix languages — it's a sign of progress",
        "Read in your home language daily, even just 5 minutes",
        "Celebrate any word in any language with a smile",
      ],
      "5-6": [
        "Make your home language the 'cozy' language: snuggles, stories, songs",
        "If they answer in Finnish, repeat back warmly in your language — don't demand",
        "Connect with one family who speaks your home language — peers help most",
      ],
      "7+": [
        "Find content they love (shows, games, books) in your home language",
        "Ask them to teach you a Finnish word — flip the expert role sometimes",
        "Be honest: 'I want you to keep our language because…' Share your why",
      ],
    },
    langNote: {
      "one-home-lang":
        "Stick to one-parent-one-language or time-and-place — consistency matters more than rules.",
      "two-home-langs":
        "Three languages is a lot. Pick one 'strongest' moment a day per language and protect it.",
      "finnish-only-home":
        "Finnish at home + Finnish daycare = strong base. Add one second language gently through play, not pressure.",
    },
    avoid: "Correcting mid-sentence. Repeat back the right version naturally instead.",
  },
  {
    emoji: "😷",
    title: "When someone in the family is sick",
    whatHelpsByAge: {
      "0-2": [
        "Keep their primary caregiver the same if possible — even just for bedtime",
        "Maintain feed and nap times as anchors",
        "Extra holding — they sense stress through your body",
      ],
      "3-4": [
        "Tell the truth in small words: 'Papa's body is resting'",
        "Keep meals and bedtime steady — kids feel safe in routine",
        "Give them a job: drawing get-well cards, fluffing pillows",
      ],
      "5-6": [
        "Answer questions simply and honestly. 'I don't know' is okay.",
        "Let them visit (if safe) or send a voice message in their language",
        "Watch for tummy aches and clinginess — that's their worry talking",
      ],
      "7+": [
        "Share more — they sense what's hidden and imagine worse",
        "Keep one normal thing daily: a show, a meal, a walk",
        "Tell their teacher so school can hold them gently",
      ],
    },
    avoid: "Whispered conversations they can half-hear. Clarity calms.",
  },
  {
    emoji: "🌙",
    title: "When sleep falls apart",
    whatHelpsByAge: {
      "0-2": [
        "Check the basics: room cool, dark, white noise. Growth spurts and teeth disrupt sleep.",
        "Same bedtime sequence every night, even when traveling",
        "Don't start new habits at 3am you can't sustain — keep it simple",
      ],
      "3-4": [
        "Add a quiet wind-down: warm bath, dim lights, slow story",
        "A nightlight and a 'dream friend' (any soft toy works)",
        "Sit nearby until they drift — presence beats words",
      ],
      "5-6": [
        "Talk about the worry at dinner, not at bedtime — bedtime is for calm",
        "A 'worry jar' next to the bed — write or draw the worry, close the lid",
        "Predictable order: bath → book in your language → lights out at same time",
      ],
      "7+": [
        "No screens 60 minutes before bed — this one matters most at this age",
        "Let them read in bed with a soft light — it bridges to sleep",
        "If anxiety is the cause, address it in daytime — not under the covers",
      ],
    },
    avoid: "Long lectures about staying in bed. Tomorrow's a new try.",
  },
];

const DailyCare = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState<AgeBand>("3-4");
  const [lang, setLang] = useState<LangContext>("one-home-lang");
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const currentMoodTip = useMemo(
    () => (selectedMood ? selectedMood.tipByAge[age] : null),
    [selectedMood, age],
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
            Tell me a little about your child — I'll tailor today's tips.
          </p>
        </div>

        {/* Personalization */}
        <Card className="p-5 md:p-6 mb-8 bg-background/70 border-2 border-primary/15 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Settings2 className="w-5 h-5 text-primary" />
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              About your child
            </h2>
          </div>

          <div className="mb-5">
            <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Age
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {ageOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAge(opt.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-all hover-scale ${
                    age === opt.id
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border bg-background hover:border-primary/40"
                  }`}
                >
                  <div className="font-semibold text-sm text-foreground">{opt.label}</div>
                  <div className="text-xs text-muted-foreground">{opt.hint}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Languages at home
            </p>
            <div className="flex flex-wrap gap-2">
              {langOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setLang(opt.id)}
                  className={`px-4 py-2 rounded-full border-2 text-sm transition-all hover-scale ${
                    lang === opt.id
                      ? "border-primary bg-primary/10 text-foreground font-medium"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

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

          {selectedMood && currentMoodTip && (
            <div className="p-5 bg-background/80 rounded-xl border-l-4 border-primary animate-fade-in shadow-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Daisy says (for {age} yrs):
                  </p>
                  <p className="text-base text-foreground">{currentMoodTip}</p>
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
            Tips below are tuned to <strong className="text-foreground">{age} yrs</strong> ·{" "}
            <strong className="text-foreground">
              {langOptions.find((l) => l.id === lang)?.label}
            </strong>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {situations.map((s) => {
            const tips = s.whatHelpsByAge[age];
            const langTip = s.langNote?.[lang];
            return (
              <Card
                key={s.title}
                className="p-5 bg-gradient-to-br from-background to-accent/20 border-2 border-primary/10 hover:border-primary/40 transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{s.emoji}</span>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                </div>

                <Badge variant="secondary" className="mb-2 text-xs">
                  Try this · {age} yrs
                </Badge>
                <ul className="space-y-1.5 mb-4">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span className="text-primary font-bold">✿</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                {langTip && (
                  <div className="p-3 mb-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-foreground">
                      <strong className="text-primary">For your language setup:</strong>{" "}
                      {langTip}
                    </p>
                  </div>
                )}

                <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Skip:</strong> {s.avoid}
                  </p>
                </div>
              </Card>
            );
          })}
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
