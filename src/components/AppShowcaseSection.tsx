import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, Users, Shield, Clock } from "lucide-react";
import appFeaturesImage from "@/assets/app-features.jpg";

const AppShowcaseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Features Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={appFeaturesImage}
                alt="Recovery App Features Showcase"
                className="w-full rounded-3xl shadow-strong"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-primary rounded-3xl opacity-10 -z-10"></div>
            <div className="absolute top-4 left-4 w-24 h-24 bg-healing rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Smartphone className="w-4 h-4" />
                App Showcase
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Experience the Future of
                <span className="text-transparent bg-gradient-primary bg-clip-text"> Mental Healthcare</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our intuitive mobile app puts comprehensive mental health services at your fingertips. 
                From booking appointments to tracking your progress, everything is designed for ease of use and reliability.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Easy Booking</p>
                  <p className="text-sm text-muted-foreground">Quick appointments</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-healing-light rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-healing" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Secure Sessions</p>
                  <p className="text-sm text-muted-foreground">HIPAA compliant</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">24/7 Available</p>
                  <p className="text-sm text-muted-foreground">Always accessible</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-trust/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-trust" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Top Rated</p>
                  <p className="text-sm text-muted-foreground">4.9/5 rating</p>
                </div>
              </div>
            </div>

            {/* App Store Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Active Patients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Verified Doctors</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">App Store Rating</p>
              </div>
            </div>

            {/* Download CTA */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full gap-2">
                <Download className="w-5 h-5" />
                Download Recovery App
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Available on Google Play Store • Free to download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;