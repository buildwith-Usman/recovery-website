import { Button } from "@/components/ui/button";
import { Download, PlayCircle, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-app-mockup.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-healing rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Shield className="w-4 h-4" />
                Trusted by 10,000+ patients
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Recovery
                <span className="block text-transparent bg-gradient-hero bg-clip-text">
                  Your Trusted Mental Health Companion
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with licensed psychiatrists and therapists. Book secure online consultations, 
                order prescribed medicines, and track your mental health journey—all from one trusted platform.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">24/7 Available</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-healing-light rounded-lg flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-healing" />
                </div>
                <span className="text-sm font-medium text-foreground">Secure & Private</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Licensed Doctors</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download on Play Store
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Licensed Healthcare Providers
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healing rounded-full"></div>
                HIPAA Compliant
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Recovery Mental Health App Interface"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-strong"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-healing rounded-2xl opacity-20 blur-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-2xl opacity-20 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;