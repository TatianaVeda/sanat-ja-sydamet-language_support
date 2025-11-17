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

export const multilingualSupportActivities: PracticalActivity[] = [
  {
    title: "Home Language Validation",
    description: "Welcome and celebrate all languages the child speaks. Display words in Farsi, Russian, and Finnish on classroom materials.",
    howItHelps: "Children feel their identity is valued when their home languages are respected. This emotional security reduces stress and creates a safe foundation for learning the new language. Seeing familiar scripts reassures them.",
    environment: "daycare",
    category: "routine"
  },
  {
    title: "Code-Switching Permission",
    description: "Allow child to use any language they know to communicate. Don't insist on Finnish-only.",
    howItHelps: "Forcing Finnish-only creates anxiety and shuts down communication. When children can use any language, they stay engaged and gradually incorporate more Finnish naturally as they feel safe.",
    environment: "daycare",
    category: "social"
  },
  {
    title: "Translation Partner System",
    description: "If possible, pair with another child who shares one of their home languages",
    howItHelps: "Having someone who understands them reduces isolation and stress dramatically. The peer becomes a bridge between home and daycare cultures, making the environment feel less foreign.",
    environment: "daycare",
    category: "social"
  },
  {
    title: "Parent Partnership Program",
    description: "Regular communication with parents in their preferred language about daily activities and routines",
    howItHelps: "When parents understand what happens at daycare, they can prepare their child at home. This continuity between home and daycare reduces anxiety about the unknown and builds trust.",
    environment: "both",
    category: "routine"
  },
  {
    title: "Language-Neutral Activities",
    description: "Art, music, building, sensory play that don't require verbal communication to participate",
    howItHelps: "Children can be successful and included immediately without language barriers. Success builds confidence. While engaged in these activities, language learning happens naturally through observation and play.",
    environment: "both",
    category: "creative"
  },
  {
    title: "Visual Daily Schedule with Photos",
    description: "Picture-based schedule showing the day's activities with actual photos of the daycare spaces and teachers",
    howItHelps: "Removes language barrier from understanding daily routine. Predictability reduces stress. Children can prepare mentally for transitions without relying on verbal explanations they might not understand.",
    environment: "daycare",
    category: "routine"
  },
  {
    title: "Multilingual Story Time",
    description: "Read same story in multiple languages across different days, or invite parents to read in home language",
    howItHelps: "Children see reading as a cross-cultural activity. Hearing familiar stories in Finnish helps them connect new words to known concepts. Parents feel welcomed to participate in daycare life.",
    environment: "daycare",
    category: "creative"
  },
  {
    title: "One Person, One Language Consistency",
    description: "Each adult in the child's life consistently uses the same language (e.g., mother-Farsi, father-Russian, teachers-Finnish)",
    howItHelps: "Clear language patterns help the child's brain organize different language systems. Consistency reduces confusion and helps them understand when to use which language.",
    environment: "both",
    category: "routine"
  },
  {
    title: "Cultural Items from Home",
    description: "Display cultural artifacts, music, foods from the child's background cultures",
    howItHelps: "Seeing their culture represented signals that they belong. This emotional acceptance is crucial for stress reduction. Children learn Finnish better when they don't feel they must abandon their identity to fit in.",
    environment: "daycare",
    category: "routine"
  },
  {
    title: "Simplified Finnish with Gestures",
    description: "Teachers use basic Finnish vocabulary with exaggerated gestures, slow speech, and lots of repetition",
    howItHelps: "Comprehensible input is key to language learning. When children understand through context clues, they feel competent. Success reduces stress and motivates continued learning.",
    environment: "daycare",
    category: "social"
  },
  {
    title: "Small Group Time",
    description: "Intentional small group activities (2-4 children) rather than always large group",
    howItHelps: "Large groups are linguistically and socially overwhelming for multilingual children. Small groups allow more processing time, more turns to speak, and lower pressure to perform in the new language.",
    environment: "daycare",
    category: "social"
  },
  {
    title: "Bilingual Books at Home",
    description: "Parents read books in home languages that connect to daycare themes",
    howItHelps: "Building concepts in home languages creates cognitive foundation for learning same concepts in Finnish. Strong home language skills predict strong second language acquisition.",
    environment: "home",
    category: "creative"
  },
  {
    title: "Consistent Key Phrases",
    description: "Teach parents the 10-15 key Finnish phrases used at daycare (wash hands, snack time, outside, etc.)",
    howItHelps: "When parents use same Finnish phrases at home, children learn essential vocabulary in low-stress environment. Hearing phrases before they're needed at daycare builds confidence.",
    environment: "home",
    category: "routine"
  },
  {
    title: "Extended Transition Period",
    description: "Shorter days or parent presence for first 2-4 weeks, gradually increasing time",
    howItHelps: "Multilingual immersion is doubly stressful. Gradual transition allows nervous system to adjust slowly. Parent presence provides secure base while child explores new language environment.",
    environment: "daycare",
    category: "routine"
  },
  {
    title: "Non-Verbal Communication Training",
    description: "Teach child basic gestures for essential needs (toilet, water, help, more, stop)",
    howItHelps: "Having ways to communicate basic needs without words prevents frustration and fear. Children can meet their needs while gradually learning Finnish words for same concepts.",
    environment: "both",
    category: "social"
  }
];

