import { MapPin, Camera, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Maharastra = () => {
  const famousPlaces = [
    {
      name: "Ajanta and Ellora Caves",
      description: "UNESCO World Heritage rock-cut cave monuments with ancient Buddhist, Hindu, and Jain art.",
      significance: "Masterpieces of ancient Indian architecture and painting.",
      visitTime: "1-2 days",
      bestTime: "October to March",
  image: "/src/assets/Ajanta and Ellora Caves.png"
    },
    {
      name: "Mumbai (Gateway of India)",
      description: "Iconic arch monument built during the 20th century in Mumbai, facing the Arabian Sea.",
      significance: "Symbol of Mumbai and major tourist attraction.",
      visitTime: "1-2 hours",
      bestTime: "November to February",
  image: "/src/assets/Mumbai (Gateway of India).png"
    },
    {
      name: "Mumbai (Marine Drive)",
      description: "Picturesque promenade along the coast of Mumbai, known as the Queen's Necklace.",
      significance: "Popular for sunset views and cityscape.",
      visitTime: "1-2 hours",
      bestTime: "Evening",
  image: "/src/assets/Mumbai (Marine Drive).png"
    },
    {
      name: "Lonavala",
      description: "Hill station famous for its scenic beauty, caves, and waterfalls.",
      significance: "Popular weekend getaway from Mumbai and Pune.",
      visitTime: "1-2 days",
      bestTime: "Monsoon and winter",
  image: "/src/assets/Lonavala.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">Explore</Link>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground font-medium">Maharastra</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">Maharastra</span>
                  <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">Land of Caves & Bollywood</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">Explore the vibrant state of Maharastra, home to Mumbai, ancient caves, and scenic hill stations.</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-primary" /><span>West India</span></div>
                  <div className="flex items-center space-x-2"><Users className="h-4 w-4 text-primary" /><span>120+ Million Population</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4 text-primary" /><span>Rich Heritage</span></div>
                </div>
              </div>
              <div className="relative">
                <img src="/src/assets/maharastra.png" alt="Maharastra Heritage" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Famous <span className="gradient-text">Places</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Discover Maharastra's caves, coastlines, and hill stations</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {famousPlaces.map((place, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{place.name}</h3>
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <img src={place.image} alt={place.name + ' image'} className="w-full h-40 object-cover rounded-xl mb-4" />
                      <p className="text-muted-foreground leading-relaxed">{place.description}</p>
                      <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                        <div><span className="font-semibold text-primary">Significance: </span><span className="text-foreground/80">{place.significance}</span></div>
                        <div className="flex justify-between text-sm">
                          <div><span className="font-semibold text-primary">Visit Time: </span><span className="text-foreground/80">{place.visitTime}</span></div>
                          <div><span className="font-semibold text-primary">Best Time: </span><span className="text-foreground/80">{place.bestTime}</span></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Maharastra;
