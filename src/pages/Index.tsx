import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, BookOpen, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
   {
  icon: Smartphone,
  title: "AR/VR Virtual Tours",
  description: "Explore monuments and museums in immersive detail",
  link: "/features"
},

    {
      icon: BookOpen,
      title: "Multilingual Stories",
      description: "Experience cultural tales in your preferred language",
      link: "/features"
    },
    {
      icon: Trophy,
      title: "Interactive Learning",
      description: "Gamified quizzes and cultural knowledge challenges",
      link: "/features"
    },
    {
      icon: Sparkles,
      title: "AI Innovation",
      description: "Personalized cultural journeys powered by AI",
      link: "/explore"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Feature Highlights */}
        <section className="py-20 cultural-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Cultural Heritage Like <span className="gradient-text">Never Before</span>
              </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  Revolutionary platform combining AR, AI, and gamification for immersive cultural experiences
</p>

            </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {highlights.map((highlight, index) => {
    const Icon = highlight.icon; // assign component to capitalized variable
    return (
      <Link key={index} to={highlight.link} className="group">
        <div className="feature-card text-center">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {highlight.title}
          </h3>
          <p className="text-muted-foreground">{highlight.description}</p>
        </div>
      </Link>
    );
  })}
</div>


            <div className="text-center">
              <Link to="/features">
                <Button size="lg" className="group">
                  Explore All Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cultural-teal via-cultural-blue to-cultural-purple p-12 md:p-20">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
              </div>
              
              <div className="relative z-10 text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold text-white">
                    Ready to Explore
                    <span className="block">Cultural Heritage?</span>
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Join thousands of cultural enthusiasts discovering their heritage through immersive experiences.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="group bg-white text-cultural-blue hover:bg-white/90">
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Web-Based Platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Free to Explore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">15+ Languages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
