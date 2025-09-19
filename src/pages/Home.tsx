import { Star, ShoppingCart, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroSpices from "@/assets/home.jpg";
import logo from "../assets/logo.jpg"
const Home = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Authentic Traditional Recipes",
      description: "Time-tested recipes passed down through generations"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Natural & Pure",
      description: "We use only the purest spices, made from real natural ingredients and free from chemicals or preservatives"
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
{/* Hero Section */}
<section className="relative h-[100vh] flex flex-col items-center justify-center">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroSpices})` }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>
  </div>

  <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
    <img
      src={logo}
      alt="Umredkar Masale Logo"
      className="w-24 h-24 rounded-full shadow-lg border-4 border-white mb-6"
    />
    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
      Umredkar Masale
    </h1>
    <p className="text-xl md:text-2xl mb-6 text-yellow-300 font-medium drop-shadow-md">
      खवैयांसाठी मांदीयाळी
    </p>
    <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-90 leading-relaxed">
      Discover the rich flavors of authentic Indian spice blends and chutneys, 
      crafted with traditional recipes and premium ingredients.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg" className="bg-red-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
        <Link to="/products">View Our Products</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="border-white text-primary  font-semibold px-8 py-3 rounded-xl">
        <Link to="/about">Learn Our Story</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-gradient-spice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4 leading-tight">
            Why Choose Umredkar Masale?
          </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="font-serif text-4xl font-bold text-primary mb-4 leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by families across India for authentic taste
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-warm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary leading-tight">
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
          <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">
            Ready to Experience Authentic Taste?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of satisfied customers who trust Umredkar Masale for their daily cooking
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