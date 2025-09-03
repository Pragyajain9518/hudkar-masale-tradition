import { Users, Leaf, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Natural & Pure",
      description: "We use only the purest spices without any artificial additives or preservatives"
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Made with Love",
      description: "Every product is crafted with care, following traditional family recipes"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-glow" />,
      title: "Quality Assured",
      description: "Rigorous quality checks ensure every batch meets our high standards"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Family Legacy",
      description: "Three generations of spice expertise passed down through our family"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-spice pattern-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A journey of three generations preserving the authentic taste of traditional Indian spices
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong className="text-primary font-serif text-xl">Umredakar Masale</strong> was born from a passion for preserving the authentic flavors that have been cherished in Indian kitchens for centuries. Our journey began three generations ago when our great-grandmother started blending spices in her small kitchen, creating magical flavors that brought families together around the dining table.
            </p>

            <div className="bg-gradient-warm p-8 rounded-lg text-white mb-12 shadow-warm">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To bring the authentic taste of traditional Indian spices to every home, preserving age-old recipes while maintaining the highest quality standards. We believe that great food starts with great spices, and great spices come from the heart.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              What started as a family tradition has now grown into <strong className="text-primary">Umredakar Masale</strong> - a brand trusted by thousands of families across India. We source our spices directly from farmers who share our commitment to quality, ensuring that every grain of spice that goes into our blends is of the finest quality.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our specialties include the famous <strong className="text-secondary">Saoji Gravy Masala</strong> from Nagpur's culinary heritage, the aromatic <strong className="text-accent">Pahadi Gravy Masala</strong> from the hills, and our signature chutneys - <strong className="text-primary-glow">Jawas Chutney</strong> and <strong className="text-secondary">Shengdana Chutney</strong> - that add the perfect finishing touch to any meal.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-spice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-warm hover:shadow-spice transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Our Commitment to You
          </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Every product that carries the Umredakar Masale name is a promise - a promise of authenticity, quality, and the genuine taste that has been perfected over generations. When you choose our spices, you're not just buying ingredients; you're bringing home a piece of our family's legacy.
            </p>
          <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
            <p className="font-serif text-xl text-primary italic">
              "Taste the tradition, feel the love, experience the authentic flavors of India."
            </p>
            <p className="text-muted-foreground mt-4">
              - The Hudakar Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;