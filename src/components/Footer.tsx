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
              Web development, software development and web app development for businesses across Paarl, Cape Town and the Winelands.
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
              <a 
                href="https://wa.me/27720302071" 
                className="text-white hover:text-brand-teal transition-colors duration-300 hover:scale-110" 
                aria-label="Chat with us on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
                <Link to="/services/software" className="text-gray-200 hover:text-white transition-colors duration-300">Software Development</Link>
              </li>
              <li>
                <Link to="/services/web" className="text-gray-200 hover:text-white transition-colors duration-300">Web Development</Link>
              </li>
              <li>
                <Link to="/services/design" className="text-gray-200 hover:text-white transition-colors duration-300">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services/brand" className="text-gray-200 hover:text-white transition-colors duration-300">Brand Strategy</Link>
              </li>
              <li>
                <Link to="/services/social" className="text-gray-200 hover:text-white transition-colors duration-300">Social Media Services</Link>
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
                    Paarl, Western Cape, 7646, South Africa
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
                  <svg className="h-5 w-5 text-brand-teal shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a 
                    href="https://wa.me/27720302071" 
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                    aria-label="Chat with us on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
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
