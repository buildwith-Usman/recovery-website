import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-healing rounded-lg">
                <Heart className="w-6 h-6 text-healing-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Recovery</h3>
                <p className="text-sm opacity-80">Mental Health Care</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
              Making mental health services accessible to everyone, everywhere, at any time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Online Consultations</li>
              <li>Mental Health Therapy</li>
              <li>Prescription Management</li>
              <li>Progress Tracking</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            Recovery © 2025 – All Rights Reserved. | Making mental health care accessible to everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;