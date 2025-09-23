import { Smartphone, BookOpen, Trophy, Globe, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import arToursImage from "@/assets/ar-tours.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import gamificationImage from "@/assets/gamification.jpg";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
<<<<<<< HEAD
      title: "AR Virtual Tours",
      description: "Explore monuments, festivals, and museums interactively from anywhere in the world using cutting-edge augmented reality technology.",
=======
      title: "AR/VR Virtual Tours",
      description: "Explore monuments, festivals, and museums interactively from anywhere in the world using cutting-edge augmented and virtual reality technology.",
>>>>>>> 63891759c5c0ec28bf1d45e341bf8eb3894b48a6
      image: arToursImage,
      color: "cultural-teal",
      details: [
        "360° immersive monument exploration",
        "Real-time interactive cultural information",
        "Virtual museum walkthroughs",
        "Festival and ceremony experiences"
      ]
    },
    {
      icon: BookOpen,
      title: "Multilingual Storytelling",
      description: "Experience folklore and cultural stories through interactive swipe cards in your preferred language, bringing ancient tales to life.",
      image: storytellingImage,
      color: "cultural-gold",
      details: [
        "Interactive story cards in 15+ languages",
        "Audio narration by cultural experts",
        "Traditional folklore and legends",
        "Historical context and significance"
      ]
    },
    {
      icon: Trophy,
      title: "Gamification Quizzes",
      description: "Learn through engaging quizzes and earn rewards while discovering the rich tapestry of cultural heritage around the world.",
      image: gamificationImage,
      color: "cultural-purple",
      details: [
        "Progressive difficulty levels",
        "Achievement badges and rewards",
        "Leaderboards and competitions",
        "Cultural knowledge certification"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Engaging for Youth",
      description: "Makes culture fun and accessible for the younger generation through modern technology"
    },
    {
      icon: Globe,
      title: "Global Cultural Promotion",
      description: "Promotes cultural heritage worldwide in multiple languages for global accessibility"
    },
    {
      icon: Zap,
      title: "Digital Preservation",
      description: "Preserves heritage digitally for future generations using advanced documentation techniques"
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
              Platform <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
<<<<<<< HEAD
              Discover how our revolutionary platform combines AR, AI, and gamification 
=======
              Discover how our revolutionary platform combines AR/VR, AI, and gamification 
>>>>>>> 63891759c5c0ec28bf1d45e341bf8eb3894b48a6
              to create unprecedented cultural experiences
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {features.map((feature, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-${feature.color}/20 rounded-lg`}>
                        <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                      </div>
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${feature.color} rounded-full`}></div>
                          <span className="text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="mt-6">
                      Learn More About This Feature
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How It Addresses the <span className="gradient-text">Problem</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bridging the gap between tradition and technology for meaningful cultural engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-6 p-8 bg-card rounded-xl">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;