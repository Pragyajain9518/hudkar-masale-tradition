import { useState } from "react";
import { MapPin, Phone, Mail, Send, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@hudakarmasale.com", "orders@hudakarmasale.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["Umredakar Masale", "123 Spice Street, Nagpur", "Maharashtra 440001, India"],
      description: "Visit our production facility"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram", 
      url: "https://www.instagram.com/umredkar_saoji?igsh=cDN5cmdkeTY4and1",
      color: "hover:text-pink-600"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "WhatsApp",
      url: "https://wa.me/919673333866",
      color: "hover:text-green-600"
    }
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-spice pattern-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you. Get in touch with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-warm hover:shadow-spice transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-warm hover:opacity-90 text-white font-semibold py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Follow Us
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Stay updated with our latest products and recipes
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className={`transition-colors ${social.color}`}
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <span className="ml-2">{social.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

            

              <Card className="bg-gradient-warm text-white shadow-warm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Bulk Orders & Wholesale
                  </h3>
                  <p className="mb-4 opacity-90">
                    Interested in bulk orders for your restaurant or store? 
                    Contact us for special wholesale pricing.
                  </p>
                  <a href="mailto:Umredkarmasale@gmail.com" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="border-white/30 text-primary hover:bg-white/10">
    <Mail className="mr-2 h-4 w-4" />
    Get Wholesale Info
  </Button>
</a>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;