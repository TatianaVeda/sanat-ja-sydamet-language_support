import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Brain, Languages, ExternalLink, Video, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { multilingualSupportActivities } from "@/data/practicalRecommendations";

const MultilingualSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
            <Languages className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Supporting Multilingual Children</h1>
          <p className="text-muted-foreground">
            Reducing stress for children navigating multiple language environments
          </p>
        </div>

        <Card className="p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Understanding the Challenge</h2>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Children managing multiple languages at home (e.g., Farsi + Russian) while learning a new language 
            at daycare (Finnish) face unique challenges:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Cognitive load of organizing 3+ language systems simultaneously</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Cultural adaptation alongside linguistic adaptation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Potential feeling of identity loss if home languages aren't valued</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold mt-1">•</span>
              <span>Communication barriers during high-stress moments (tiredness, frustration, fear)</span>
            </li>
          </ul>

          <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
            <p className="text-sm text-foreground">
              <strong>Key Principle:</strong> Never ask a child to choose between their languages. All languages 
              are valuable and support each other. Strong home language skills predict strong Finnish acquisition. 
              The goal is addition (Finnish+), not subtraction (Finnish instead of home languages).
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/20">
          <h3 className="text-xl font-semibold text-foreground mb-6">Practical Strategies</h3>
          
          <div className="space-y-4">
            {multilingualSupportActivities.map((activity, index) => (
              <div key={index} className="p-4 bg-background/80 rounded-lg border border-border/50">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-foreground">{activity.title}</h4>
                  <div className="flex gap-2 flex-shrink-0">
                    <Badge variant="outline" className="text-xs">
                      {activity.environment === "both" ? "Home & Daycare" : 
                       activity.environment === "home" ? "Home" : "Daycare"}
                    </Badge>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {activity.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <div className="p-3 bg-primary/5 rounded border-l-4 border-primary">
                  <p className="text-sm text-foreground">
                    <strong>How it helps:</strong> {activity.howItHelps}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Educational Resources */}
        <Card className="p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Educational Resources</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            Evidence-based articles, research, and videos about multilingual child development:
          </p>

          {/* Research Articles - English */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Badge variant="outline">English</Badge>
              Research & Articles
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.asha.org/public/speech/development/learning-two-languages/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Learning Two Languages (ASHA - American Speech-Language-Hearing Association)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Authoritative guide on bilingual language development and what to expect
                  </p>
                </div>
              </a>

              <a 
                href="https://www.naldic.org.uk/research-and-information/eal-research/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    EAL Research & Resources (NALDIC)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Research on English as an Additional Language and multilingual learners
                  </p>
                </div>
              </a>

              <a 
                href="https://www.bilingualmonkeys.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Bilingual Monkeys
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Practical advice and research-based strategies for raising bilingual children
                  </p>
                </div>
              </a>

              <a 
                href="https://www.multilingualparenting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Multilingual Parenting
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expert resources on raising children with multiple languages
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Research Articles - Finnish */}
          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Badge variant="outline">Finnish</Badge>
              Tutkimus ja Artikkelit
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.thl.fi/fi/web/lapset-nuoret-ja-perheet/peruspalvelut/varhaiskasvatuspalvelut/monikielisyys-varhaiskasvatuksessa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Monikielisyys varhaiskasvatuksessa (THL)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Terveyden ja hyvinvoinnin laitos: Ohjeita monikielisyyden tukemiseen
                  </p>
                </div>
              </a>

              <a 
                href="https://www.oph.fi/fi/koulutus-ja-tutkinnot/monikielisyys-ja-monikielinen-oppiminen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Monikielisyys ja monikielinen oppiminen (Opetushallitus)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Virallinen opetus ja tuki monikielisille lapsille
                  </p>
                </div>
              </a>

              <a 
                href="https://www.mannerheimliitto.fi/vanhemmille/monikielinen-perhe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Monikielinen perhe (MLL)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mannerheimin Lastensuojeluliitto: Tietoa monikielisille perheille
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Videos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Educational Videos
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.youtube.com/watch?v=Kqg8E-vcTmU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    The Benefits of a Bilingual Brain (TED-Ed)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Animated explanation of how multilingual brains work differently and the cognitive benefits
                  </p>
                </div>
              </a>

              <a 
                href="https://www.youtube.com/watch?v=MM_M4pjiVXY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Raising Bilingual Children (Dr. Erika Hoff)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Research-based insights on bilingual language development from a leading expert
                  </p>
                </div>
              </a>

              <a 
                href="https://www.youtube.com/watch?v=aIcCwwMdQyI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    How Language Shapes the Way We Think (Lera Boroditsky - TEDxSanDiego)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Understanding how multiple languages influence cognitive development and thinking patterns
                  </p>
                </div>
              </a>

              <a 
                href="https://www.youtube.com/watch?v=ZXmMq67FGG0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Bilingualism and the Brain (University of Washington)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Scientific explanation of what happens in bilingual children&apos;s brains during language processing
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These resources are provided for educational 
              purposes. Always consult with qualified professionals for personalized advice about your child&apos;s 
              development.
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button onClick={() => navigate("/")} size="lg" variant="outline">
            <Home className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultilingualSupport;
