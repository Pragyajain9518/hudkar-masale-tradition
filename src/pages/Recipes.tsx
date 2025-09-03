import { Clock, Users, ChefHat, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Authentic Saoji Chicken Curry",
      description: "A fiery and flavorful chicken curry from Nagpur using our signature Saoji Gravy Masala",
      cookTime: "45 min",
      servings: 4,
      difficulty: "Medium",
      product: "Saoji Gravy Masala",
      ingredients: [
        "500g chicken pieces",
        "2 tbsp Hudakar Saoji Gravy Masala",
        "1 large onion, sliced",
        "3-4 tomatoes, chopped",
        "1 tbsp ginger-garlic paste",
        "2 tbsp oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      instructions: [
        "Heat oil in a heavy-bottomed pan and sauté onions until golden brown",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add tomatoes and cook until they break down completely",
        "Add Hudakar Saoji Gravy Masala and cook for 3-4 minutes",
        "Add chicken pieces and cook on medium heat for 15 minutes",
        "Add water as needed and simmer until chicken is tender",
        "Garnish with fresh coriander and serve hot with rice or roti"
      ],
      tips: "For authentic flavor, let the masala cook well before adding chicken. The secret is in slow cooking!"
    },
    {
      id: 2,
      title: "Pahadi Style Mixed Vegetable Curry",
      description: "A hearty mountain-style vegetable curry using our aromatic Pahadi Gravy Masala",
      cookTime: "30 min",
      servings: 4,
      difficulty: "Easy",
      product: "Pahadi Gravy Masala",
      ingredients: [
        "2 cups mixed vegetables (potato, cauliflower, beans)",
        "2 tbsp Hudakar Pahadi Gravy Masala",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 tsp cumin seeds",
        "2 tbsp ghee",
        "1 cup water",
        "Salt to taste"
      ],
      instructions: [
        "Heat ghee in a pan and add cumin seeds",
        "Add chopped onions and sauté until translucent",
        "Add tomatoes and cook until soft",
        "Add Hudakar Pahadi Gravy Masala and mix well",
        "Add mixed vegetables and stir to coat with masala",
        "Add water, cover and cook until vegetables are tender",
        "Serve hot with steamed rice or chapati"
      ],
      tips: "Cut vegetables uniformly for even cooking. This curry tastes even better the next day!"
    },
    {
      id: 3,
      title: "Perfect Jawas Chutney Sandwich",
      description: "A quick and delicious sandwich spread using our fresh Jawas Chutney",
      cookTime: "10 min",
      servings: 2,
      difficulty: "Easy",
      product: "Jawas Chutney",
      ingredients: [
        "4 bread slices",
        "3 tbsp Hudakar Jawas Chutney",
        "1 cucumber, thinly sliced",
        "1 tomato, sliced",
        "1 onion, thinly sliced",
        "2 tbsp butter",
        "Chat masala to sprinkle"
      ],
      instructions: [
        "Lightly toast the bread slices",
        "Spread butter on one side of each slice",
        "Spread Hudakar Jawas Chutney generously",
        "Layer with cucumber, tomato, and onion slices",
        "Sprinkle chat masala for extra flavor",
        "Cut diagonally and serve immediately"
      ],
      tips: "For extra crunch, add lettuce leaves. This chutney also works great as a dip!"
    },
    {
      id: 4,
      title: "Traditional Shengdana Chutney Bhel",
      description: "Mumbai-style bhel puri elevated with our creamy Shengdana Chutney",
      cookTime: "15 min",
      servings: 3,
      difficulty: "Easy",
      product: "Shengdana Chutney",
      ingredients: [
        "2 cups puffed rice (murmura)",
        "3 tbsp Hudakar Shengdana Chutney",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1/2 cup sev",
        "Green chutney (optional)",
        "Tamarind chutney",
        "Fresh coriander, chopped"
      ],
      instructions: [
        "In a large mixing bowl, add puffed rice",
        "Add chopped onions and tomatoes",
        "Add Hudakar Shengdana Chutney and mix well",
        "Add other chutneys as per taste",
        "Mix everything thoroughly",
        "Top with sev and fresh coriander",
        "Serve immediately for the best crunch"
      ],
      tips: "Assemble just before serving to maintain the crunch. Adjust chutney quantity based on your taste preference!"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="shadow-warm hover:shadow-spice transition-all duration-300">
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
            {tips.map((tip, index) => (
              <Card key={index} className="text-center shadow-warm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-3 text-primary">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.content}
                  </p>
                </CardContent>
              </Card>
            ))}
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