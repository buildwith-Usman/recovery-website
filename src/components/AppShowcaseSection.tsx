import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, Users, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import pharmacyMarketplace from "@/assets/pharmacy-marketplace.png";
import patientDashboard from "@/assets/patient-dashboard.png";
import doctorProfileAbout from "@/assets/doctor-profile-about.png";
import paymentBookingScreen from "@/assets/payment-booking-screen.png";
import { useState, useEffect } from "react";

const AppShowcaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const appScreens = [
    {
      image: patientDashboard,
      title: "Patient Dashboard",
      description: "View upcoming sessions, browse therapists and psychiatrists, and manage your mental health journey."
    },
    {
      image: doctorProfileAbout,
      title: "Doctor Profiles",
      description: "Detailed profiles with ratings, reviews, and booking options for licensed mental health professionals."
    },
    {
      image: pharmacyMarketplace,
      title: "Pharmacy Marketplace",
      description: "Order prescribed medications with discounts and convenient delivery tracking."
    },
    {
      image: paymentBookingScreen,
      title: "Secure Payments",
      description: "Book consultations and pay securely with JazzCash, Easypaisa, or card payments."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Carousel */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-3xl"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-20"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-20"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              
              {/* App Screen Image */}
              <div className="relative z-10 w-80 h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800">
                <img
                  src={appScreens[currentSlide].image}
                  alt={appScreens[currentSlide].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Slide Indicators - Outside Device Frame */}
              <div className="flex justify-center gap-2 mt-6">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
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
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{appScreens[currentSlide].title}</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {appScreens[currentSlide].description}
                </p>
              </div>
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