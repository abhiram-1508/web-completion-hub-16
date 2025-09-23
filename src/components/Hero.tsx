import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Experience
                <span className="gradient-text block">Cultural Heritage</span>
                Through AR
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Explore monuments, festivals, and museums interactively from anywhere. 
                Immerse yourself in multilingual storytelling and gamified cultural experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/features">
                <Button size="lg" className="group">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" size="lg" className="group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Explore States
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cultural-teal rounded-full"></div>
                <span>Web Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cultural-gold rounded-full"></div>
                <span>Multilingual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cultural-purple rounded-full"></div>
                <span>Interactive Experience</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="AR Cultural Heritage Experience" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cultural-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cultural-teal/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cultural-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cultural-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;