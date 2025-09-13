import { Star, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import saojiMasala from "@/assets/saoji-masala.jpg";
import pahadiMasala from "@/assets/pahadi-masala.jpg";
import jawasChutney from "@/assets/javas.jpg";
import shengdanaChutney from "@/assets/dana.jpg";
import ghatalaChutney from "@/assets/ghatala.jpg";
import kalaMasala from "@/assets/kala.jpg";
import haldi from "@/assets/haldi.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Saoji Gravy Masala",
      description:
        "Authentic Nagpuri Saoji masala blend with the perfect balance of spices. Creates rich, flavorful curries that bring the taste of traditional Maharashtrian cuisine to your home.",
      image: saojiMasala,
      rating: 4.8,
      badge: "Best Seller",
      ingredients: [
        "Onion",
        "Ginger Garlic Paste",
        "Spices",
        "Secret Masala",
      ],
    },
    {
      id: 2,
      name: "Pahadi Gravy Masala",
      description:
        "Mountain-fresh spice blend inspired by banjara tradition. Perfect for creating aromatic curries with a unique taste.",
      image: pahadiMasala,
      rating: 4.7,
      badge: "Premium",
      ingredients: [
        "Green Chilli",
        "Pudina Leaves",
        "Onion",
        "Ginger Garlic Paste",
        "Spices",
      ],
    },
    {
      id: 3,
      name: "Jawas Chutney",
      description:
        "Nutty, spicy chutney made from roasted flaxseeds (jawas), a local favorite for adding zing to meals.",
      image: jawasChutney,
      price: "₹120",
      originalPrice: "₹150",
      weight: "250g",
      rating: 4.9,
      badge: "Fresh",
      ingredients: [
        "Javas Seeds",
        "Jeera",
        "Chilli Powder",
        "Spices",
      ],
    },
    {
      id: 4,
      name: "Shengdana Chutney",
      description:
        "Creamy peanut chutney with authentic Maharashtrian flavors. Rich in taste and nutrition, perfect as a side dish and meals.",
      image: shengdanaChutney,
      price: "₹140",
      originalPrice: "₹170",
      weight: "300g",
      rating: 4.6,
      badge: "Traditional",
      ingredients: [
        "Shengdana",
        "Jeera",
        "Chilli Powder",
        "Spices",
      ],
    },
    {
      id: 7,
      name: "Ghatala Chutney",
      description:
        "A tongue-tingling chutney with green chilli, tomato, onion, shengdana and spices – perfect for spice lovers.",
      image: ghatalaChutney,
      rating: 4.6,
      badge: "Signature",
      ingredients: [
        "Green Chilli",
        "Tomato",
        "Onion",
        "Shengdana",
        "Spices",
      ],
    },

    {
      id: 6,
      name: "Haldi(turmeric powder)",
      description:
        "Pure, vibrant turmeric powder for health, color and flavor. Sourced from the finest roots and ground traditionally.",
      image: haldi,
      rating: 4.7,
      badge: "Essential",
      // Do NOT list key ingredients per your instruction.
      ingredients: [],
    },
   
    {
      id: 5,
      name: "Kala Masala (Garam Masala)",
      description:
        "Exclusive family recipe traditional black masala (garam masala) for adding depth and bold flavor to a wide variety of dishes.",
      image: kalaMasala,
      rating: 4.8,
      badge: "Classic",
      // Do NOT list key ingredients per your instruction.
      ingredients: [],
    },
  ];

  const getBadgeVariant = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "default";
      case "Premium":
        return "secondary";
      case "Fresh":
        return "default";
      case "Traditional":
        return "secondary";
      default:
        return "default";
    }
  };

  const saoji = products.find((p) => p.id === 1);
  const otherProducts = products.filter((p) => p.id !== 1);

  return (
    <div className="min-h-screen">
           <div className="max-w-4xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
             Our Products
           </h1>
           <p className="text-xl text-muted-foreground leading-relaxed">
             Discover our carefully crafted collection of authentic Indian spice blends and chutneys
           </p>
           </div>
 
      <section className="py-20 bg-gradient-spice pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative order-1 md:order-none">
              <img
                src={saoji?.image}
                alt={saoji?.name}
                className="w-full h-72 md:h-96 object-cover rounded-lg shadow-warm"
              />
              {saoji?.badge && (
                <Badge className="absolute top-4 left-4" variant={getBadgeVariant(saoji.badge)}>
                  {saoji.badge}
                </Badge>
              )}
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                {saoji?.name}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Star className="h-4 w-4 fill-secondary text-yellow-500" />
                <span className="text-sm font-medium">{saoji?.rating}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {saoji?.description}
              </p>
              {saoji && saoji.ingredients.length > 0 && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center justify-center md:justify-start">
                    <Leaf className="h-4 w-4 mr-2 text-accent" />
                    Key Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {saoji.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid (except Saoji) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12">
            {otherProducts.map((product) => (
              <div key={product.id} className="w-full md:w-[48%]">
                <Card className="overflow-hidden shadow-warm hover:shadow-spice transition-all duration-300 hover:scale-105">
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
                        <Star className="h-4 w-4 fill-secondary   text-yellow-500" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {product.ingredients.length > 0 && (
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
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-10 bg-gradient-spice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Quality Promise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every product is carefully crafted using traditional methods and premium ingredients. We maintain strict quality standards to ensure you get the authentic taste you deserve.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Leaf className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">100% Natural</h3>
              <p className="text-muted-foreground">No artificial colors or preservatives</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Star className="h-8 w-8 text-primary-glow mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Sourced from the finest spice gardens</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
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
