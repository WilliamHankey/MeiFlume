
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/2ba32958-2f41-485a-8c47-d8a7965f82cd.png" 
                alt="MeiFlume Logo" 
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-200 max-w-xs">
              We transform businesses through cutting-edge digital solutions and innovative strategies.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white hover:text-brand-teal transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#software" className="text-gray-200 hover:text-white transition-colors">Software Development</Link>
              </li>
              <li>
                <Link to="/services#web" className="text-gray-200 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services#design" className="text-gray-200 hover:text-white transition-colors">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services#brand" className="text-gray-200 hover:text-white transition-colors">Brand Strategy</Link>
              </li>
              <li>
                <Link to="/services#social" className="text-gray-200 hover:text-white transition-colors">Social Media Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-teal shrink-0 mt-1" />
                <span className="text-gray-200">
                  123 Tech Avenue, Digital District, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-teal shrink-0" />
                <a href="tel:+1234567890" className="text-gray-200 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-teal shrink-0" />
                <a href="mailto:info@meiflume.com" className="text-gray-200 hover:text-white transition-colors">
                  info@meiflume.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} MeiFlume. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
