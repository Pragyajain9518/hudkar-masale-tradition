import { Star, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import saojiMasala from "@/assets/saoji-masala.jpg";
import pahadiMasala from "@/assets/pahadi-masala.jpg";
import jawasChutney from "@/assets/jawas-chutney.jpg";
import shengdanaChutney from "@/assets/shengdana-chutney.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Saoji Gravy Masala",
      description: "Authentic Nagpuri Saoji masala blend with the perfect balance of spices. Creates rich, flavorful curries that bring the taste of traditional Maharashtrian cuisine to your home.",
      image: saojiMasala,
      // price: "₹180",
      // originalPrice: "₹220",
      // weight: "200g",
      rating: 4.8,
      reviews: 156,
      badge: "Best Seller",
      ingredients: ["Red Chili", "Coriander", "Cumin", "Turmeric", "Garam Masala"]
    },
    {
      id: 2,
      name: "Pahadi Gravy Masala",
      description: "Mountain-fresh spice blend inspired by hill station flavors. Perfect for creating aromatic curries with a unique taste that captures the essence of the Himalayas.",
      image: pahadiMasala,
      // price: "₹160",
      // originalPrice: "₹200",
      // weight: "200g",
      rating: 4.7,
      reviews: 98,
      badge: "Premium",
      ingredients: ["Bay Leaves", "Black Cardamom", "Cinnamon", "Cloves", "Nutmeg"]
    },
    {
      id: 3,
      name: "Jawas Chutney",
      description: "Fresh mint and coriander chutney that adds a burst of flavor to any meal. Made with traditional recipes using the finest herbs and natural ingredients.",
      image: jawasChutney,
      price: "₹120",
      originalPrice: "₹150",
      weight: "250g",
      rating: 4.9,
      reviews: 203,
      badge: "Fresh",
      ingredients: ["Fresh Mint", "Coriander", "Green Chili", "Ginger", "Lemon"]
    },
    {
      id: 4,
      name: "Shengdana Chutney",
      description: "Creamy peanut chutney with authentic Maharashtrian flavors. Rich in taste and nutrition, perfect as a side dish or spread for snacks and meals.",
      image: shengdanaChutney,
      price: "₹140",
      originalPrice: "₹170",
      weight: "300g",
      rating: 4.6,
      reviews: 87,
      badge: "Traditional",
      ingredients: ["Roasted Peanuts", "Jaggery", "Tamarind", "Red Chili", "Salt"]
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Best Seller": return "default";
      case "Premium": return "secondary";
      case "Fresh": return "outline";
      case "Traditional": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-spice pattern-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our carefully crafted collection of authentic Indian spice blends and chutneys
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-warm hover:shadow-spice transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge 
                    className="absolute top-4 left-4" 
                    variant={getBadgeVariant(product.badge)}
                  >
                    {product.badge}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Leaf className="h-4 w-4 mr-2 text-accent" />
                      Key Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-2xl text-primary">
                        {product.price}
                      </span>
                      <span className="text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {product.weight}
                      </Badge>
                    </div>
                  </div> */}

                  {/* <Button className="w-full bg-gradient-warm hover:opacity-90 text-white font-semibold shadow-warm">
                    View Details
                  </Button> */}
                  
                  {/* <p className="text-center text-sm text-muted-foreground mt-3">
                    Contact us for availability
                  </p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-spice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Quality Promise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every product is carefully crafted using traditional methods and premium ingredients. 
            We maintain strict quality standards to ensure you get the authentic taste you deserve.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Leaf className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">100% Natural</h3>
              <p className="text-muted-foreground">No artificial colors or preservatives</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Star className="h-8 w-8 text-primary-glow mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Sourced from the finest spice gardens</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Fresh Packaging</h3>
              <p className="text-muted-foreground">Sealed for maximum freshness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;