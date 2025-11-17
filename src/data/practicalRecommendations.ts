export interface PracticalActivity {
  title: string;
  description: string;
  howItHelps: string;
  environment: "home" | "daycare" | "both";
  category: "sensory" | "physical" | "creative" | "quiet" | "social" | "routine";
}

export const stressReliefActivities: PracticalActivity[] = [
  // Sensory activities
  {
    title: "Noise-Canceling Headphones",
    description: "Provide child with comfortable headphones to reduce overwhelming auditory stimulation",
    howItHelps: "Helps children who are sensitive to noise in busy daycare environments. Creates a calm bubble where they can regulate sensory input and reduce stress from constant background noise.",
    environment: "daycare",
    category: "sensory"
  },
  {
    title: "Sensory Bin Play",
    description: "Container filled with rice, beans, sand, or water with small toys to explore",
    howItHelps: "Tactile exploration calms the nervous system and provides focused, self-directed activity. The repetitive motions are soothing and help children process emotions through hands-on play.",
    environment: "both",
    category: "sensory"
  },
  {
    title: "Calm Down Corner",
    description: "Designated quiet space with soft pillows, weighted blanket, and calming toys",
    howItHelps: "Gives children a safe retreat when overwhelmed. Having a predictable place to self-regulate teaches emotional awareness and provides tools for managing big feelings independently.",
    environment: "both",
    category: "quiet"
  },
  
  // Physical activities
  {
    title: "Heavy Work Activities",
    description: "Pushing/pulling heavy objects, carrying books, wall pushes",
    howItHelps: "Proprioceptive input (deep pressure on muscles and joints) naturally calms the nervous system. These activities release tension and help children feel grounded and organized in their bodies.",
    environment: "both",
    category: "physical"
  },
  {
    title: "Animal Walks",
    description: "Bear crawls, frog jumps, crab walks, snake slithers",
    howItHelps: "Combines physical movement with imagination. The whole-body engagement helps release stress hormones while the playful nature makes it enjoyable rather than demanding.",
    environment: "both",
    category: "physical"
  },
  {
    title: "Yoga for Kids",
    description: "Simple poses with breathing exercises (tree pose, cat-cow, child's pose)",
    howItHelps: "Teaches body awareness and breath control, both essential for emotional regulation. The stretching releases physical tension while focused breathing activates the parasympathetic nervous system.",
    environment: "both",
    category: "physical"
  },

  // Creative activities
  {
    title: "Art Therapy Corner",
    description: "Free drawing, painting, clay modeling without instructions or judgment",
    howItHelps: "Non-verbal emotional expression. Children can process difficult feelings through colors and shapes when words aren't available. The creative process itself is meditative and stress-reducing.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Music and Movement",
    description: "Dancing freely to different types of music, using rhythm instruments",
    howItHelps: "Music regulates emotional states and movement releases stress hormones. Allows children to express feelings through their body and experience joy through rhythm and sound.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Storytelling with Puppets",
    description: "Using puppets or stuffed animals to act out stories or feelings",
    howItHelps: "Creates emotional distance that makes it safer to explore difficult feelings. Children can project their experiences onto characters and practice different outcomes in a low-risk way.",
    environment: "both",
    category: "creative"
  },

  // Quiet activities
  {
    title: "Breathing Buddies",
    description: "Child lies down with stuffed animal on belly, watches it rise and fall with breath",
    howItHelps: "Makes breathing visible and tangible. The focused attention on breath naturally slows heart rate and activates the calming parasympathetic nervous system. Visual feedback helps children understand their own regulation.",
    environment: "both",
    category: "quiet"
  },
  {
    title: "Guided Imagery",
    description: "Calm verbal journey to peaceful places (beach, forest, clouds)",
    howItHelps: "Engages imagination to create internal calm. Shifts focus from stressful external environment to soothing internal imagery, teaching children they have internal resources for peace.",
    environment: "both",
    category: "quiet"
  },
  {
    title: "Peaceful Reading Time",
    description: "Quiet corner with soft lighting, cushions, and picture books",
    howItHelps: "Provides predictable, low-demand activity. Stories offer emotional lessons and escapism. The quiet, solitary time allows nervous system to reset away from social demands.",
    environment: "both",
    category: "quiet"
  },

  // Social activities
  {
    title: "Small Group Play",
    description: "Intentional pairing with one or two calm peers for structured activity",
    howItHelps: "Reduces social overwhelm while maintaining connection. Smaller groups are less chaotic and allow for deeper, more regulated interaction. Teaches social skills in manageable doses.",
    environment: "daycare",
    category: "social"
  },
  {
    title: "Turn-Taking Games",
    description: "Simple games with clear rules and predictable structure",
    howItHelps: "Provides social interaction within safe boundaries. Predictable structure reduces anxiety while teaching patience and self-regulation. Success in simple games builds confidence.",
    environment: "both",
    category: "social"
  },

  // Routine activities
  {
    title: "Visual Schedule",
    description: "Picture-based daily routine chart the child can check",
    howItHelps: "Reduces anxiety about the unknown. Predictability is calming for stressed children. Seeing what comes next helps them feel in control and prepared for transitions.",
    environment: "both",
    category: "routine"
  },
  {
    title: "Transition Warnings",
    description: "5-minute and 2-minute warnings before activity changes, using timer or song",
    howItHelps: "Unexpected changes are major stressors. Warnings give children time to emotionally prepare for transitions, reducing meltdowns and building trust in the environment's predictability.",
    environment: "both",
    category: "routine"
  },
  {
    title: "Consistent Goodbye Ritual",
    description: "Same sequence every day at drop-off (hug, wave at window, special phrase)",
    howItHelps: "Separation anxiety is common in stressed children. Rituals create predictability and connection. The repetition builds trust that parent will return, reducing daily stress.",
    environment: "home",
    category: "routine"
  }
];

export const languageSupportActivities: PracticalActivity[] = [
  {
    title: "Picture-Based Communication",
    description: "Use visual aids, photos, and illustrated cards to support understanding",
    howItHelps: "Reduces frustration by providing alternative communication pathway. Visual supports bridge language gaps and help children connect concepts to words in their new language.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Songs and Rhymes",
    description: "Repetitive songs with actions in Finnish, sung daily",
    howItHelps: "Music and rhythm enhance memory and make language learning enjoyable. Repetition builds vocabulary naturally. Actions connect words to meaning kinesthetically.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Labeled Environment",
    description: "Pictures with Finnish words on objects around the room",
    howItHelps: "Creates constant, low-pressure exposure to written and spoken Finnish. Children absorb vocabulary naturally in context, connecting words to objects they use daily.",
    environment: "both",
    category: "routine"
  },
  {
    title: "Gesture-Supported Speech",
    description: "Adults use exaggerated gestures and facial expressions when speaking",
    howItHelps: "Non-verbal communication fills in gaps in verbal understanding. Children can follow along through context clues while gradually acquiring the language itself.",
    environment: "both",
    category: "social"
  },
  {
    title: "Buddy System",
    description: "Pair with Finnish-speaking peer for parallel play and gentle modeling",
    howItHelps: "Peer models are powerful and non-threatening. Children learn language naturally through play. The social motivation to connect drives language acquisition.",
    environment: "daycare",
    category: "social"
  }
];

export const balancedActivities: PracticalActivity[] = [
  {
    title: "Play-Based Language Learning",
    description: "Low-pressure language exposure through fun games and activities",
    howItHelps: "Combines stress reduction through play with gentle language input. When children feel safe and joyful, their brains are more receptive to learning new language patterns.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Emotion Check-Ins",
    description: "Regular feelings check using emotion cards or charts",
    howItHelps: "Teaches emotional vocabulary in both languages while validating feelings. Helps adults notice stress levels before they escalate, allowing for timely support.",
    environment: "both",
    category: "social"
  },
  {
    title: "Comfort Item from Home",
    description: "Allow special toy or blanket from home during stressful times",
    howItHelps: "Provides emotional anchor connecting home and daycare. Reduces stress which improves capacity to learn. The familiar object offers security during language challenges.",
    environment: "daycare",
    category: "quiet"
  }
];
