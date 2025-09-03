import { Star, ShoppingCart, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroSpices from "@/assets/hero-spices.jpg";
import logo from "../assets/logo.jpg"
const Home = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Authentic Traditional Recipes",
      description: "Time-tested recipes passed down through generations"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Made with Love",
      description: "Each blend is crafted with care and attention to detail"
    },
    {
      icon: <Star className="h-8 w-8 text-primary-glow" />,
      title: "Premium Quality Spices",
      description: "Sourced from the finest spice gardens across India"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The Saoji masala brings back memories of my grandmother's cooking. Absolutely authentic!"
    },
    {
      name: "Rajesh Patel", 
      text: "Best quality spices I've ever used. The aroma and taste are unmatched."
    },
    {
      name: "Meera Singh",
      text: "Pahadi masala has transformed my everyday cooking. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pattern-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroSpices})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* <img 
                    src={logo} 
                    alt={"Umredakar Masale Logo"}
                    style={{width:"100px",height:"100px", borderRadius:"55%", marginBottom:"20px", alignItems:"center"}}
                    // className="w-full h-64 object-cover"
                  /> */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-spice-float text-primary">
            Umredakar Masale
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Authentic Taste of Tradition
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Discover the rich flavors of authentic Indian spice blends and chutneys, 
            crafted with traditional recipes and premium ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground font-semibold px-8 py-3">
              <Link to="/products">
                View Our Products
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-primary hover:bg-white/10 font-semibold px-8 py-3">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-spice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Why Choose Umredakar Masale?
          </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that authentic ingredients and traditional methods make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-warm hover:shadow-spice transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
            Trusted by families across India for authentic taste
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-warm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience Authentic Taste?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Umredakar Masale for their daily cooking
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
            <Link to="/products">
              View Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;