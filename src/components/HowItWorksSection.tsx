import { Download, Calendar, Video, Pill, UserPlus, CheckCircle, Play, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
        <section id="how-it-works" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium text-primary-foreground">
            <Play className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Simple Steps to Better
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Mental Health</span>
          </h2>
        </div>

        {/* Patient Journey */}
        {/* Patient Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Patient Journey</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Download className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Download & Sign Up</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Get the Recovery app from the Play Store and Apple Store and create your secure account in minutes.
              </p>
            </div>

            {/* Arrow with background */}
            <div className="hidden md:flex animate-pulse">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shadow-soft hover:bg-primary/30 hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Calendar className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Book & Consult</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Choose from verified mental health professionals and book secure video consultations.
              </p>
            </div>

            {/* Arrow with background */}
            <div className="hidden md:flex animate-pulse" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shadow-soft hover:bg-primary/30 hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Pill className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Order & Track</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Order prescribed medications and track your delivery while monitoring your progress.
              </p>
            </div>
          </div>
        </div>        {/* Doctor Journey */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Healthcare Provider Journey</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <UserPlus className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Register on App</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Sign up as a healthcare provider and submit your professional credentials for verification.
              </p>
            </div>

            {/* Arrow with background */}
            <div className="hidden md:flex animate-pulse">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary/30 hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <CheckCircle className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Get Verified</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Complete our verification process and get approved to start providing consultations.
              </p>
            </div>

            {/* Arrow with background */}
            <div className="hidden md:flex animate-pulse" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary/30 hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-4 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Video className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Start Consulting</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Begin helping patients through secure online consultations and earn through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;