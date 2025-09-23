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
      bestTime: "October to March"
    },
    {
      name: "Udaipur",
      description: "City of Lakes known for beautiful palaces and romantic ambiance",
      significance: "Venice of the East and Mewar dynasty heritage",
      visitTime: "2-3 days",
      bestTime: "September to March"
    },
    {
      name: "Jaisalmer Fort",
      description: "Golden sandstone fort rising from the Thar Desert",
      significance: "Living fort and UNESCO World Heritage Site",
      visitTime: "2 days",
      bestTime: "October to February"
    },
    {
      name: "Ranthambore National Park",
      description: "Former royal hunting ground, now famous tiger reserve",
      significance: "Tiger conservation and wildlife sanctuary",
      visitTime: "2-3 days",
      bestTime: "October to April"
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
                  src={ancientTemple} 
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
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{place.name}</h3>
                    <p className="text-muted-foreground mb-4">{place.description}</p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <span className="font-semibold text-primary">Significance: </span>
                      <span>{place.significance}</span>
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