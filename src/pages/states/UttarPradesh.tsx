import { MapPin, Camera, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ancientTemple from "@/assets/ancient-temple-art.jpg";

const UttarPradesh = () => {
  const famousPlaces = [
    {
      name: "Taj Mahal (Agra)",
      description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is a symbol of eternal love",
      significance: "UNESCO World Heritage Site and finest example of Mughal architecture",
      visitTime: "3-4 hours",
      bestTime: "Sunrise or sunset for magical lighting"
    },
    {
      name: "Varanasi Ghats",
      description: "Sacred ghats along the Ganges River, one of the oldest continuously inhabited cities in the world",
      significance: "Holiest city in Hinduism and center of spiritual learning",
      visitTime: "Full day",
      bestTime: "Early morning for Ganga Aarti ceremony"
    },
    {
      name: "Fatehpur Sikri",
      description: "Former Mughal capital built by Emperor Akbar, showcasing blend of Hindu and Islamic architecture",
      significance: "UNESCO World Heritage Site representing Mughal architectural excellence",
      visitTime: "2-3 hours",
      bestTime: "Morning to avoid afternoon heat"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                    Explore
                  </Link>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground font-medium">Uttar Pradesh</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">Uttar Pradesh</span>
                  <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">
                    Land of the Taj Mahal
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover India's most populous state, home to the iconic Taj Mahal, sacred Varanasi, 
                  and magnificent Mughal architectural heritage.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>North India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>200+ Million Population</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>3000+ Years of History</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={ancientTemple} 
                  alt="Uttar Pradesh Heritage"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Places */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Famous <span className="gradient-text">Places</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the magnificent heritage sites that define Uttar Pradesh's cultural legacy
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {famousPlaces.map((place, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {place.name}
                        </h3>
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {place.description}
                      </p>
                      
                      <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                        <div>
                          <span className="font-semibold text-primary">Significance: </span>
                          <span className="text-foreground/80">{place.significance}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div>
                            <span className="font-semibold text-primary">Visit Time: </span>
                            <span className="text-foreground/80">{place.visitTime}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-primary">Best Time: </span>
                            <span className="text-foreground/80">{place.bestTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Experience */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cultural-gold via-cultural-amber to-cultural-teal rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Experience Uttar Pradesh's Grandeur
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  From the world's most beautiful monument to the spiritual heart of India, discover the essence of this historic state.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link to="/explore">
                    <Button size="lg" variant="secondary" className="bg-white text-cultural-blue hover:bg-white/90">
                      Explore More States
                    </Button>
                  </Link>
                  <Link to="/features">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Virtual Experience
                    </Button>
                  </Link>
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

export default UttarPradesh;