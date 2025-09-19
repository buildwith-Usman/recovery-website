import { Button } from "@/components/ui/button";
import { Phone, PlayCircle, Shield, Clock, Users, Calendar, Smartphone, CreditCard, Video, Download, Apple, Pill } from "lucide-react";
import recoveryLogo from "@/assets/ic_recovery_logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center bg-gradient-subtle overflow-hidden py-12 lg:py-20 scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary rounded-full opacity-5 blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Recovery
                <span className="block text-transparent bg-gradient-hero bg-clip-text animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                  Your Complete Mental Health Platform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                Connect with licensed mental health professionals through our secure app. Book consultations, 
                get personalized treatment plans, and order prescribed medicines - all with secure payment processing.
              </p>
            </div>
          </div>

          {/* Hero Phone Mockup */}
          <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="relative z-10 transform hover:scale-105 transition-all duration-500 hover:rotate-1">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-strong hover:shadow-2xl transition-all duration-500">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative group">
                  {/* Status Bar */}
                  <div className="h-12 bg-slate-100 flex items-center justify-between px-6 transition-colors duration-300 group-hover:bg-slate-200">
                    <span className="text-xs font-medium text-slate-900">9:41</span>
                    <span className="text-xs font-medium text-slate-900">100%</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex flex-col items-center justify-start h-full px-6 pt-4 pb-8 text-center bg-gradient-to-br from-slate-50 to-white">
                    {/* Recovery Logo */}
                    <div className="w-20 h-20 bg-[#00424E] rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-xl">
                      <img src={recoveryLogo} alt="Recovery" className="w-14 h-14 object-contain" />
                    </div>
                    
                    {/* App Name */}
                    <h3 className="text-xl font-bold text-[#00424E] mb-1 hover:text-[#003238] transition-colors duration-300">Recovery</h3>
                    <p className="text-slate-600 mb-6 text-xs">Your Mental Health Companion</p>
                    
                    {/* Feature Pills */}
                    <div className="space-y-2 w-full">
                      <div className="bg-[#00424E]/10 rounded-full px-3 py-1.5 flex items-center gap-2 border border-[#00424E]/20 hover:bg-[#00424E]/20 hover:border-[#00424E]/40 transition-all duration-300 hover:scale-105">
                        <Video className="w-3 h-3 text-[#00424E] animate-pulse" />
                        <span className="text-xs text-[#00424E] font-medium">Video Consultations</span>
                      </div>
                      <div className="bg-[#00424E]/10 rounded-full px-3 py-1.5 flex items-center gap-2 border border-[#00424E]/20 hover:bg-[#00424E]/20 hover:border-[#00424E]/40 transition-all duration-300 hover:scale-105" style={{animationDelay: '0.5s'}}>
                        <Users className="w-3 h-3 text-[#00424E] animate-pulse" />
                        <span className="text-xs text-[#00424E] font-medium">Licensed Professionals</span>
                      </div>
                      <div className="bg-[#00424E]/10 rounded-full px-3 py-1.5 flex items-center gap-2 border border-[#00424E]/20 hover:bg-[#00424E]/20 hover:border-[#00424E]/40 transition-all duration-300 hover:scale-105" style={{animationDelay: '1s'}}>
                        <Pill className="w-3 h-3 text-[#00424E] animate-pulse" />
                        <span className="text-xs text-[#00424E] font-medium">Medicine Delivery</span>
                      </div>
                    </div>
                    
                    {/* Video Placeholder - Compact Version */}
                    <div className="mt-6 w-full h-28 relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group/video">
                      {/* Video Thumbnail Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00424E] to-[#003238] group-hover/video:from-[#003238] group-hover/video:to-[#002529] transition-all duration-500"></div>
                      
                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                        {/* Play Button */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-sm scale-125 animate-pulse"></div>
                          <button className="relative w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl">
                            <PlayCircle className="w-6 h-6 text-[#00424E] fill-current" />
                          </button>
                        </div>
                        
                        {/* Video Info - Compact */}
                        <div className="mt-2 text-center">
                          <p className="text-xs font-semibold group-hover/video:text-white/90 transition-colors duration-300">Watch Demo</p>
                        </div>
                      </div>
                      
                      {/* Corner Duration Badge */}
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded backdrop-blur-sm hover:bg-black/70 transition-colors duration-300">
                        2:30
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-3xl opacity-30 blur-xl animate-pulse hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-primary rounded-3xl opacity-30 blur-xl animate-pulse hover:opacity-50 transition-opacity duration-500" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-primary rounded-full opacity-20 blur-lg animate-pulse hover:opacity-40 transition-opacity duration-500" style={{animationDelay: '2s'}}></div>
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