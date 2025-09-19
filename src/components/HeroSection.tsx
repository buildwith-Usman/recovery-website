import { Button } from "@/components/ui/button";
import { Phone, PlayCircle, Shield, Clock, Users, Calendar, Smartphone, CreditCard, Video, Download, Apple, Pill } from "lucide-react";
import heroImage from "@/assets/hero-app-mockup.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center bg-gradient-subtle overflow-hidden py-12 lg:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary rounded-full opacity-5 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Recovery
                <span className="block text-transparent bg-gradient-hero bg-clip-text">
                  Your Complete Mental Health Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with licensed mental health professionals through our secure app. Book consultations, 
                get personalized treatment plans, and order prescribed medicines - all with secure payment processing.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 w-full max-w-md">
              <img
                src={heroImage}
                alt="Recovery Center - Peaceful Treatment Environment"
                className="w-full h-auto rounded-3xl shadow-strong hover:shadow-glow transition-shadow duration-500"
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent opacity-40"></div>
            </div>
            {/* Enhanced floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-3xl opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-primary rounded-3xl opacity-30 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-primary rounded-full opacity-20 blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Features Grid - Shows in full row across entire width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-3 rounded-full mb-3">
              <Video className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Video Consultation</h3>
            <p className="text-sm text-muted-foreground">Connect with licensed professionals through our secure video platform</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-3 rounded-full mb-3">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Medicine Ordering</h3>
            <p className="text-sm text-muted-foreground">Order prescriptions directly through the app with pharmacy integration</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-3 rounded-full mb-3">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-sm text-muted-foreground">Safe and encrypted payment processing for all services</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary p-3 rounded-full mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Licensed Professionals</h3>
            <p className="text-sm text-muted-foreground">Verified mental health experts with proper credentials and certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;