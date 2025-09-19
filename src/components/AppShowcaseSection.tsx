import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, Users, Shield, Clock } from "lucide-react";
import appFeaturesImage from "@/assets/app-features.jpg";

const AppShowcaseSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-800 to-slate-900">
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 shadow-soft">
                <Smartphone className="w-4 h-4" />
                App Showcase
              </div>
              <h2 className="text-4xl font-bold text-white">
                Experience the Future of
                <span className="text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text"> Mental Healthcare</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Our intuitive mobile app puts comprehensive mental health services at your fingertips. 
                From booking appointments to tracking your progress, everything is designed for ease of use and reliability.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-soft">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Easy Booking</p>
                  <p className="text-sm text-white/80">Quick appointments</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-soft">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Secure Sessions</p>
                  <p className="text-sm text-white/80">HIPAA compliant</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-soft">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">24/7 Available</p>
                  <p className="text-sm text-white/80">Always accessible</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-soft">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Top Rated</p>
                  <p className="text-sm text-white/80">4.9/5 rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;