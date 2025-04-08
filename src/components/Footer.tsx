import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Send, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/MeiFlumeDarkLogo.png" 
                alt="MeiFlume Logo" 
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-200 max-w-xs">
              We transform businesses through cutting-edge digital solutions and innovative strategies.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/meiflumedev/" 
                className="text-white hover:text-brand-teal transition-colors duration-300 hover:scale-110" 
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/meiflume" 
                className="text-white hover:text-brand-teal transition-colors duration-300 hover:scale-110" 
                aria-label="Connect with us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@MeiFlume" 
                className="text-white hover:text-brand-teal transition-colors duration-300 hover:scale-110" 
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors duration-300">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#software" className="text-gray-200 hover:text-white transition-colors duration-300">Software Development</Link>
              </li>
              <li>
                <Link to="/services#web" className="text-gray-200 hover:text-white transition-colors duration-300">Web Development</Link>
              </li>
              <li>
                <Link to="/services#design" className="text-gray-200 hover:text-white transition-colors duration-300">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services#brand" className="text-gray-200 hover:text-white transition-colors duration-300">Brand Strategy</Link>
              </li>
              <li>
                <Link to="/services#social" className="text-gray-200 hover:text-white transition-colors duration-300">Social Media Services</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-200 mb-4">Subscribe to our newsletter for the latest insights and updates.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-teal"
                  aria-label="Email address for newsletter"
                />
                <Button type="submit" size="icon" className="bg-brand-teal hover:bg-brand-teal/90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-brand-teal shrink-0 mt-1" />
                  <span className="text-gray-200">
                    1st Floor, Block B, North Park, Black River Park, 2 Fir Street, Observatory, Cape Town, 7925
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-brand-teal shrink-0" />
                  <a 
                    href="tel:+27720302071" 
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                    aria-label="Call us at +27 (72) 030-2071"
                  >
                    +27 (72) 030-2071
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-brand-teal shrink-0" />
                  <a 
                    href="mailto:info@meiflume.com" 
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                    aria-label="Email us at info@meiflume.com"
                  >
                    info@meiflume.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} MeiFlume. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Read our Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Read our Terms of Service"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Read our Cookie Policy"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
