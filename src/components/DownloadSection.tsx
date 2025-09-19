import { Download, Smartphone } from "lucide-react";
import icRecoveryLogo from "@/assets/ic_recovery_logo.png";

const DownloadSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Download
                <span className="block text-transparent bg-gradient-primary bg-clip-text">Recovery App</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Take control of your mental health journey with our comprehensive mobile app.
                <span className="block">Available on all platforms.</span>
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-3xl"></div>
              
              {/* Phone Container */}
              <div className="relative z-10 w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* App Content */}
                  <div className="flex flex-col items-center justify-center h-full bg-white p-8 text-center">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg overflow-hidden">
                      <img 
                        src={icRecoveryLogo} 
                        alt="Recovery App Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Recovery</h3>
                    <p className="text-sm text-muted-foreground mb-4">Mental Health Platform</p>
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs text-muted-foreground">Your Mental Wellness Journey Starts Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;