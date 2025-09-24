import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@cultureverse.com",
      description: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Innovation Drive, Tech City, TC 12345",
      description: "Our headquarters"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, San Francisco, CA 94107",
      phone: "+1 (555) 123-4567",
      email: "sf@cultureverse.com"
    },
    {
      city: "Mumbai",
      address: "456 Heritage Plaza, Bandra Kurla Complex, Mumbai 400051",
      phone: "+91 22 1234 5678",
      email: "mumbai@cultureverse.com"
    },
    {
      city: "London",
      address: "789 Cultural Center, Covent Garden, London WC2E 9DD",
      phone: "+44 20 1234 5678",
      email: "london@cultureverse.com"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Ready to revolutionize cultural heritage education? We'd love to hear from you. 
              Reach out to discuss partnerships, collaborations, or learn more about our platform.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <Input placeholder="Your organization (optional)" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What can we help you with?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      rows={5} 
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button size="lg" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Choose the best way to reach us. We're here to help!
                  </p>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <contact.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{contact.title}</h3>
                            <p className="text-primary mb-1">{contact.info}</p>
                            <p className="text-sm text-muted-foreground">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Business Hours */}
                <Card className="border-0 bg-gradient-to-r from-cultural-teal/10 to-cultural-blue/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-cultural-teal/20 rounded-lg">
                        <Clock className="h-6 w-6 text-cultural-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <div className="space-y-1 text-sm">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Global</span> Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                Find us in major cultural and technology hubs around the world
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-cultural-gold to-cultural-amber rounded-full mb-6">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p className="text-primary">{office.phone}</p>
                      <p className="text-primary">{office.email}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cultural-teal via-cultural-blue to-cultural-purple rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Start Your Cultural Journey?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join educational institutions, museums, and cultural organizations 
                  already transforming heritage education with Vibrant Past.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-cultural-blue hover:bg-white/90">
                  Start Exploring
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;