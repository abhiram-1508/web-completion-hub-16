import { MapPin, Camera, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ancientTemple from "@/assets/ancient-temple-art.jpg";

const Rajasthan = () => {
  const famousPlaces = [
    {
      name: "Jaipur (Amber Fort)",
      description: "Pink City with magnificent Amber Fort showcasing Rajput architecture",
      significance: "UNESCO World Heritage Site and royal Rajput heritage",
      visitTime: "2-3 days",
      bestTime: "October to March",
  image: "/src/assets/Jaipur (Amber Fort).png"
    },
    {
      name: "Udaipur",
      description: "City of Lakes known for beautiful palaces and romantic ambiance",
      significance: "Venice of the East and Mewar dynasty heritage",
      visitTime: "2-3 days",
      bestTime: "September to March",
  image: "/src/assets/Udaipur.png"
    },
    {
      name: "Jaisalmer Fort",
      description: "Golden sandstone fort rising from the Thar Desert",
      significance: "Living fort and UNESCO World Heritage Site",
      visitTime: "2 days",
      bestTime: "October to February",
  image: "/src/assets/Jaisalmer Fort.png"
    },
    {
      name: "Ranthambore National Park",
      description: "Former royal hunting ground, now famous tiger reserve",
      significance: "Tiger conservation and wildlife sanctuary",
      visitTime: "2-3 days",
      bestTime: "October to April",
  image: "/src/assets/Ranthambore National Park.png"
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
                  <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                    Explore
                  </Link>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground font-medium">Rajasthan</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">Rajasthan</span>
                  <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">
                    Land of Maharajas
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover the royal heritage of Rajasthan with magnificent forts, palaces, and desert landscapes.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/src/assets/rajasthan.png"
                  alt="Rajasthan Heritage"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {famousPlaces.map((place, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{place.name}</h3>
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <img
                        src={place.image}
                        alt={place.name + ' image'}
                        className="w-full h-40 object-cover rounded-xl mb-4"
                      />
                      <p className="text-muted-foreground leading-relaxed">{place.description}</p>
                      <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                        <div>
                          <span className="font-semibold text-primary">Significance: </span>
                          <span className="text-foreground/80">{place.significance}</span>
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

export default Rajasthan;