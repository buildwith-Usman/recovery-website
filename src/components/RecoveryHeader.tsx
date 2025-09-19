import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Download, Smartphone, X, Apple } from "lucide-react";
import icRecoveryLogo from "@/assets/ic_recovery_logo.png";

const RecoveryHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30 shadow-soft">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 group">
            <div className="flex items-center justify-center w-12 h-12 transition-transform group-hover:scale-105">
              <img 
                src={icRecoveryLogo} 
                alt="Recovery Mental Health Platform" 
                className="w-12 h-12 object-contain rounded-xl shadow-soft"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Recovery</h1>
              <p className="text-sm text-muted-foreground font-medium">Mental Health Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              className="px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#services" 
              className="px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#how-it-works" 
              className="px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="default" 
              size="default" 
              className="gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Smartphone className="w-4 h-4" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 hover:bg-primary/10 hover:scale-105 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>
      </div>
    </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/90 backdrop-blur-md border-b border-border/30 shadow-strong">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#contact" 
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border/30 space-y-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full gap-3 py-4 text-lg font-semibold shadow-medium"
                >
                  <Download className="w-5 h-5" />
                  Get on Google Play
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full gap-3 py-4 text-lg font-semibold shadow-medium bg-foreground text-background hover:bg-foreground/90"
                >
                  <Apple className="w-5 h-5" />
                  Download on App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecoveryHeader;