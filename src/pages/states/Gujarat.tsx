import { MapPin, Camera, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Gujarat = () => {
  const famousPlaces = [
    {
      name: "Gir National Park (Asiatic Lions)",
      description: "The only place in the world where Asiatic lions are found in the wild.",
      significance: "Biodiversity hotspot and major wildlife destination.",
      visitTime: "1-2 days",
      bestTime: "December to March",
  image: "/src/assets/Gir National Park (Asiatic Lions).png"
    },
    {
      name: "Rann of Kutch",
      description: "Largest salt desert in the world, famous for the Rann Utsav festival.",
      significance: "Unique landscape and cultural experience.",
      visitTime: "1-2 days",
      bestTime: "November to February",
  image: "/src/assets/Rann of kutch.png"
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
                  <span className="text-foreground font-medium">Gujarat</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">Gujarat</span>
                  <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">Land of Lions & Salt Desert</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">Discover Gujarat's wildlife, salt desert, and vibrant culture.</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-primary" /><span>West India</span></div>
                  <div className="flex items-center space-x-2"><Users className="h-4 w-4 text-primary" /><span>60+ Million Population</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4 text-primary" /><span>Rich Heritage</span></div>
                </div>
              </div>
              <div className="relative">
                <img src="/src/assets/gujarat.png" alt="Gujarat Heritage" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Famous <span className="gradient-text">Places</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Explore Gujarat's wildlife and salt desert wonders</p>
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

export default Gujarat;
