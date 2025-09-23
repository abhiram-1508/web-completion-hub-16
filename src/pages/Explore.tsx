import { MapPin, Mountain, Waves, Building2, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import culturalArt from "@/assets/cultural-heritage-art.jpg";
import ancientTemple from "@/assets/ancient-temple-art.jpg";

const Explore = () => {
  const regions = [
    {
      name: "North India",
      icon: Mountain,
      description: "Discover the majestic heritage of Northern India",
      gradient: "from-cultural-teal to-cultural-blue",
      image: ancientTemple,
      states: [
        {
          name: "Delhi",
          places: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"],
          route: "/explore/delhi"
        },
        {
          name: "Uttar Pradesh",
          places: ["Taj Mahal (Agra)", "Varanasi Ghats", "Fatehpur Sikri"],
          route: "/explore/uttar-pradesh"
        },
        {
          name: "Himachal Pradesh",
          places: ["Shimla", "Manali", "Rohtang Pass", "Dharamshala"],
          route: "/explore/himachal-pradesh"
        }
      ]
    },
    {
      name: "South India",
      icon: TreePine,
      description: "Explore the rich cultural tapestry of Southern India",
      gradient: "from-cultural-gold to-cultural-amber",
      image: culturalArt,
      states: [
        {
          name: "Tamil Nadu",
          places: ["Meenakshi Temple (Madurai)", "Marina Beach (Chennai)", "Ooty"],
          route: "/explore/tamil-nadu"
        },
        {
          name: "Kerala",
          places: ["Backwaters (Alleppey)", "Munnar Tea Gardens", "Kochi"],
          route: "/explore/kerala"
        },
        {
          name: "Karnataka",
          places: ["Bangalore", "Mysore Palace", "Hampi Ruins"],
          route: "/explore/karnataka"
        }
      ]
    },
    {
      name: "East India",
      icon: Waves,
      description: "Experience the cultural heritage of Eastern India",
      gradient: "from-cultural-purple to-cultural-teal",
      image: culturalArt,
      states: [
        {
          name: "West Bengal",
          places: ["Kolkata", "Sundarbans", "Darjeeling", "Victoria Memorial"],
          route: "/explore/west-bengal"
        },
        {
          name: "Odisha",
          places: ["Konark Sun Temple", "Puri Beach", "Chilika Lake"],
          route: "/explore/odisha"
        },
        {
          name: "Bihar",
          places: ["Bodh Gaya (Mahabodhi Temple)", "Nalanda University ruins"],
          route: "/explore/bihar"
        }
      ]
    },
    {
      name: "West India",
      icon: Building2,
      description: "Journey through the vibrant heritage of Western India",
      gradient: "from-cultural-blue to-cultural-purple",
      image: ancientTemple,
      states: [
        {
          name: "Rajasthan",
          places: ["Jaipur (Amber Fort)", "Udaipur", "Jaisalmer Fort", "Ranthambore National Park"],
          route: "/explore/rajasthan"
        },
        {
          name: "Maharashtra",
          places: ["Mumbai (Gateway of India, Marine Drive)", "Ajanta and Ellora Caves", "Lonavala"],
          route: "/explore/maharashtra"
        },
        {
          name: "Gujarat",
          places: ["Gir National Park (Asiatic Lions)", "Rann of Kutch", "Somnath Temple"],
          route: "/explore/gujarat"
        }
      ]
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
              Explore <span className="gradient-text">India's Heritage</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover the incredible diversity of India's cultural heritage through immersive experiences across different regions
            </p>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {regions.map((region, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={region.image} 
                        alt={`${region.name} heritage`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${region.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <region.icon className="h-12 w-12 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold">{region.name}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {region.description}
                      </p>
                      
                      <div className="space-y-4">
                        {region.states.map((state, stateIndex) => (
                          <div key={stateIndex} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-2 flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-primary" />
                                {state.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {state.places.join(" • ")}
                              </p>
                            </div>
                            <Link to={state.route}>
                              <Button variant="outline" size="sm" className="ml-4">
                                Explore
                              </Button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cultural-teal via-cultural-blue to-cultural-purple rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  India's Cultural Diversity
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  From ancient temples to modern cities, experience the incredible journey 
                  through India's rich heritage and vibrant traditions.
                </p>
                
                <div className="grid md:grid-cols-4 gap-8 pt-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-white/80">States to Explore</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">40+</div>
                    <div className="text-white/80">Famous Places</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-white/80">Major Regions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-white/80">Years of Heritage</div>
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

export default Explore;