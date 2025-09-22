import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Youtube, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Recipes", path: "/recipes" },
    { name: "Contact", path: "/contact" },
  ];

  const products = [
    "Saoji Gravy",
    "Pahadi Gravy", 
    "Javas Chutney",
    "Shengdana Chutney",
    "Ghatala Chutney",
    "Kala Masala",
    "Haldi(Turmeric powder)",   
  ];

  const socialLinks = [
    { icon: <Youtube className="h-8 w-8" />, url: "#", name: "Youtube" },
    { icon: <Instagram className="h-7 w-7" />, url: "#", name: "Instagram" },
    { icon: <MessageCircle className="h-7 w-7" />, url: "#", name: "WhatsApp" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Umredkar Masale
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Authentic Taste of Tradition. Bringing you the finest Indian spice blends and chutneys crafted with love and traditional recipes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-[50px]">
  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
  <ul className="space-y-1.5">
    {quickLinks.map((link) => (
      <li key={link.path}>
        <Link 
          to={link.path} 
          className="text-primary-foreground/80 hover:text-secondary transition-colors"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-1.5">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    to="/products" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm leading-relaxed">
                  <p>Umredkar Masale T-point hingna road, near metro pillar no. 132,</p>
                  <p>Nagpur, Maharashtra 440036</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 9923333866</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">umredkarmasale@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Umredakar Masale. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;