import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "We are passionate about preserving cultural heritage for future generations through innovative digital solutions."
    },
    {
      icon: Users,
      title: "Inclusive Access",
      description: "Making cultural heritage accessible to everyone, regardless of location, language, or background."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Promoting cultural understanding and appreciation across diverse communities worldwide."
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "15+",
      title: "Languages Supported",
      description: "Multilingual platform serving diverse global audiences"
    },
    {
      icon: Users,
      number: "500K+",
      title: "Users Engaged",
      description: "Cultural enthusiasts exploring heritage through our platform"
    },
    {
      icon: Globe,
      number: "50+",
      title: "Cultural Sites",
      description: "Monuments, museums, and heritage locations digitized"
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Cultural Heritage Expert",
      description: "20+ years experience in archaeological preservation and digital humanities"
    },
    {
      name: "Raj Patel",
      role: "AR/VR Technology Lead",
      description: "Former Google engineer specializing in immersive technology applications"
    },
    {
      name: "Maya Chen",
      role: "AI & Machine Learning Director",
      description: "PhD in Computer Science with expertise in cultural data analysis"
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
              About <span className="gradient-text">CultureVerse</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We are revolutionizing how people experience and connect with cultural heritage 
              through cutting-edge AR/VR technology and personalized learning experiences.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cultural-teal/20 rounded-lg">
                    <Target className="h-8 w-8 text-cultural-teal" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the gap between traditional cultural preservation and modern technology, 
                  creating immersive experiences that make cultural heritage accessible, engaging, 
                  and meaningful for people of all ages and backgrounds around the world.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Objectives:</h3>
                  <ul className="space-y-3">
                    {[
                      "Preserve cultural heritage through digital innovation",
                      "Make education fun and interactive for youth",
                      "Promote global cultural understanding",
                      "Support multilingual accessibility"
                    ].map((objective, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cultural-teal rounded-full"></div>
                        <span className="text-foreground/80">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cultural-purple/20 rounded-lg">
                    <Eye className="h-8 w-8 text-cultural-purple" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where cultural heritage transcends physical boundaries, where anyone 
                  can explore ancient monuments, participate in traditional festivals, and learn 
                  from cultural stories regardless of their geographical location or language.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Future Goals:</h3>
                  <ul className="space-y-3">
                    {[
                      "Expand to 100+ cultural heritage sites globally",
                      "Develop AI-powered cultural guides",
                      "Create virtual cultural exchange programs",
                      "Build the world's largest digital heritage archive"
                    ].map((goal, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cultural-purple rounded-full"></div>
                        <span className="text-foreground/80">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our mission to revolutionize cultural heritage education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-lg text-muted-foreground">
                Making a difference in cultural preservation and education worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex p-4 bg-gradient-to-r from-cultural-teal to-cultural-blue rounded-full">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text">{achievement.number}</div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Experts in technology, culture, and education working together
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cultural-gold to-cultural-amber rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-cultural-teal font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
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

export default About;