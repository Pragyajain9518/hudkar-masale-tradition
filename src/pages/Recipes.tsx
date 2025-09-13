import { Clock, Users, ChefHat, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import saojiGravyImage from "@/assets/saojigravymasala.jpg";
import pahadiMasalaImage from "@/assets/pahadimasala.jpg";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Saoji Gravy",
      image: saojiGravyImage,
      description: "A quick and flavorful gravy using our authentic Umredkar Saoji Gravy Masala - perfect for any vegetables or meat",
      cookTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      product: "Umredkar Saoji Gravy Masala",
      ingredients: [
        "1 glass water",
        "Umredkar Saoji Gravy Masala",
        "Your choice of vegetables or non-veg (chicken/mutton)"
      ],
      instructions: [
        "Take 1 glass of water in a pan and add Umredkar Saoji Gravy Masala",
        "Stir it well until the oil separates from the masala",
        "Once ready, add your choice of vegetables or non-veg like chicken or mutton",
        "Let it cook for 25–30 minutes until the flavors blend beautifully",
        "The dish is ready to serve"
      ],
      tips: "No need to add extra salt or chili powder, as the masala already has the perfect blend of spices!"
    },
    {
      id: 2,
      title: "Pahadi Gravy",
      image: pahadiMasalaImage,
      description: "Authentic mountain-style gravy with our special Umredkar Pahadi Gravy Masala for rich, traditional flavors",
      cookTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      product: "Umredkar Pahadi Gravy Masala",
      ingredients: [
        "1 glass water",
        "Umredkar Pahadi Gravy Masala",
        "Your favorite vegetables or non-veg options"
      ],
      instructions: [
        "Pour 1 glass of water into a cooking vessel and mix in Umredkar Pahadi Gravy Masala",
        "Stir thoroughly until the oil separates, ensuring the masala is well-cooked",
        "Add your favorite vegetables or non-veg options to the gravy",
        "Cook it on medium flame for 25–30 minutes",
        "Enjoy the rich, flavorful Pahadi-style dish"
      ],
      tips: "There is no need to add additional salt or chili powder, as the masala provides the authentic taste!"
    }
  ];

  const tips = [
    {
      title: "Spice Storage Tips",
      content: "Store Umredakar Masale products in airtight containers away from direct sunlight to maintain freshness and potency."
    },
    {
      title: "Enhance Flavors",
      content: "Always cook masalas on medium heat for 2-3 minutes to release their aromatic oils before adding other ingredients."
    },
    {
      title: "Perfect Consistency",
      content: "For gravies, add warm water gradually to achieve the desired consistency without compromising the flavor."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-accent/10 text-accent";
      case "Medium": return "bg-secondary/10 text-secondary";
      case "Hard": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-spice pattern-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Recipes & Tips
          </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover delicious ways to use Umredakar Masale products in your everyday cooking
            </p>
        </div>
      </section>

      {/* Recipe Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="shadow-warm hover:shadow-spice transition-all duration-300 overflow-hidden">
                {/* Recipe Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {recipe.title}
                    </h3>
                    <Badge className={getDifficultyColor(recipe.difficulty)}>
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {recipe.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} servings
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="h-4 w-4 mr-1" />
                      Uses {recipe.product}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Ingredients:</h4>
                    <ul className="space-y-1 text-sm">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span className="text-muted-foreground">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Instructions:</h4>
                    <ol className="space-y-2 text-sm">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-gradient-spice p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Chef's Tip:
                    </h4>
                    <p className="text-sm text-muted-foreground italic">
                      {recipe.tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-20 bg-gradient-spice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                Cooking Tips from Our Kitchen
              </h2>
              <p className="text-lg text-muted-foreground">
                Master the art of cooking with these expert tips
              </p>
            </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3 text-primary">
                  Spice Storage Tips
                </h3>
                <p className="text-sm text-muted-foreground">
                  Store Umredakar Masale products in airtight containers away from direct sunlight to maintain freshness and potency.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3 text-primary">
                  Enhance Flavors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Always cook masalas on medium heat for 2-3 minutes to release their aromatic oils before adding other ingredients.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3 text-primary">
                  Perfect Consistency
                </h3>
                <p className="text-sm text-muted-foreground">
                  For gravies, add warm water gradually to achieve the desired consistency without compromising the flavor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Try These Recipes Today!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get all the ingredients you need from our premium product collection
          </p>
          <Button size="lg" className="bg-gradient-warm hover:opacity-90 text-white font-semibold px-8 py-3">
            <ChefHat className="mr-2 h-5 w-5" />
            View Our Products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Recipes;