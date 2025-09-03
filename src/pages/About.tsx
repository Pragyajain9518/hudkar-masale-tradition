import { Users, Leaf, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Natural & Pure",
      description: "We use only the purest spices, made from real natural ingredients and free from chemicals or preservatives."
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Made with Love",
      description: "Every product is crafted with care, inspired by Asha Umredkar's home-cooked flavors and perfected over generations."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-glow" />,
      title: "Quality Assured",
      description: "Rigorous checks ensure each batch meets the highest standards. Trusted by over 50 lakh+ homes by 2026."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Family Legacy",
      description: "Started by Prashant Umredkar with the support of his mother and friends, continuing the Umredkar family tradition."
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
              <strong className="text-primary font-serif text-xl">Umredkar Masale</strong> began from the
              passion, tradition, and perseverance of Smt. <strong>Asha Umredkar</strong>, who lovingly prepared snacks
              and chips at home, inspiring <strong>Mr. Prashant Umredkar</strong>'s deep love for food. In 1996, Prashant started a
              small mess service with his mother as chef, aiming to serve tastes just like home. With loyal support from friends
              like <strong>Mr. Indranil Naik</strong> and the drive to expand into catering, hotels, and finally spices,
              the business grew, keeping authenticity and family at its core.
            </p>

            <div className="bg-gradient-warm p-8 rounded-lg text-white mb-12 shadow-warm">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Mission</h2>
              <ul className="list-disc ml-8 opacity-90 text-lg leading-relaxed">
                <li>
                  Deliver <strong>100% natural</strong> masalas and gravies with no chemicals or preservatives.
                </li>
                <li>
                  Make cooking effortless – just add our masala, water, and favorite ingredients for a flavorful meal.
                </li>
                <li>
                  Carry forward the <strong className="text-primary">rich flavors of Nagpur and Maharashtra</strong> to households nationwide.
                </li>
                <li>
                  Reach <span className="font-bold">50 lakh+ homes by 2026</span>, sharing health, purity, and taste with trust.
                </li>
              </ul>
              <p className="mt-4">
                Our mission is to share emotions, traditions, and memories—served with every spoonful.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From mess → catering → canteen → hotel → spices, Umredkar Masale kept evolving.
              During the pandemic, with the support of <strong>Mrs. Sonali Umredkar</strong> and encouragement from
              <strong>Mr. Narendra Deshmukh</strong>, innovative preservative-free gravies and masalas were crafted, using only pure, natural
              ingredients and traditional methods.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Now, with renowned products like <strong >Saoji Masala</strong>, <strong className="text-accent">Pahadi Gravy</strong>,
              <strong>Kala Masala</strong>, <strong>Turmeric</strong>, and specialty chutneys, Umredkar Masale promises convenience,
              authenticity, and care in every home-cooked dish.
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
            Every product that carries the Umredkar Masale name is a promise—of authenticity,
            quality, and the genuine taste that has been perfected over generations. When you choose our spices,
            you're bringing home a piece of our family's legacy and the comfort of home-cooked flavor.
          </p>
          <div className="bg-card p-8 rounded-lg shadow-warm border border-border">
            <p className="font-serif text-xl text-primary italic">
              "Taste the tradition, feel the love, experience the authentic flavors of India."
            </p>
            <p className="text-muted-foreground mt-4">
              - The Umredkar Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
