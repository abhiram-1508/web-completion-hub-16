import { Sparkles, Brain, Languages, UserCheck, Cpu, Cloud, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Innovation = () => {
  const innovations = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Intelligent algorithms create personalized cultural journeys based on user preferences and learning patterns",
      gradient: "from-cultural-teal to-cultural-blue",
      features: [
        "Machine learning recommendation engine",
        "Adaptive content delivery",
        "Personal learning paths",
        "Behavioral analysis and optimization"
      ]
    },
    {
      icon: Languages,
      title: "Multilingual Swipe Cards",
      description: "Interactive cards featuring culture & heritage content in multiple languages for global accessibility",
      gradient: "from-cultural-gold to-cultural-amber",
      features: [
        "15+ supported languages",
        "Cultural context preservation",
        "Native speaker audio recordings",
        "Regional dialect variations"
      ]
    },
    {
      icon: UserCheck,
      title: "Adaptive Learning System",
      description: "Dynamic content adaptation that evolves with user engagement and cultural interests",
      gradient: "from-cultural-purple to-cultural-teal",
      features: [
        "Real-time difficulty adjustment",
        "Progress tracking and analytics",
        "Customized learning objectives",
        "Skill-based content recommendations"
      ]
    },
    {
      icon: Sparkles,
      title: "Immersive Technology Stack",
      description: "Seamless integration of AR/VR, AI, and gamification technologies in a unified platform",
      gradient: "from-cultural-blue to-cultural-purple",
      features: [
        "Cross-platform AR/VR support",
        "Real-time 3D rendering",
        "Spatial audio integration",
        "Haptic feedback systems"
      ]
    }
  ];

  const techStack = [
    {
      icon: Cpu,
      title: "Advanced AR/VR Engine",
      description: "Proprietary rendering engine optimized for cultural content visualization"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture supporting millions of concurrent users"
    },
    {
      icon: Shield,
      title: "Cultural Data Protection",
      description: "Advanced security measures to protect sensitive cultural heritage data"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast content delivery and interaction processing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovation & <span className="gradient-text">Uniqueness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Pioneering the future of cultural heritage preservation through cutting-edge technology
            </p>
          </div>
        </section>

        {/* Core Innovations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {innovations.map((innovation, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${innovation.gradient} rounded-lg flex-shrink-0`}>
                          <innovation.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {innovation.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {innovation.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {innovation.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technology <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built on a foundation of enterprise-grade technologies for reliability and scalability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center space-y-4 p-6 bg-card rounded-xl">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Unified Platform Visualization */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">Unified Technology Platform</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                {['AR/VR', 'Artificial Intelligence', 'Gamification', 'Multilingual Support', 'Cloud Computing', 'Mobile-First Design', 'Real-time Analytics', 'Cultural Data API'].map((tech, index) => (
                  <div key={index} className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Impact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cultural-teal via-cultural-blue to-cultural-purple rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Transforming Cultural Education
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Our innovative approach combines traditional cultural preservation with modern technology, 
                  creating an unprecedented learning experience for global audiences.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-white/80">Supported Languages</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-white/80">Cultural Sites</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="text-white/80">Learning Interactions</div>
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

export default Innovation;