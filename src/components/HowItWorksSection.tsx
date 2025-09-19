import { Download, Calendar, Video, Pill, UserPlus, CheckCircle, Play } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-healing-light px-4 py-2 rounded-full text-sm font-medium text-healing">
            <Play className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Simple Steps to Better
            <span className="text-transparent bg-gradient-healing bg-clip-text"> Mental Health</span>
          </h2>
        </div>

        {/* Patient Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Patient Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Download className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  1
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Download the App</h4>
              <p className="text-muted-foreground">
                Get the Recovery app from the Play Store and create your secure account in minutes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Calendar className="w-10 h-10 text-healing-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  2
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Book & Consult</h4>
              <p className="text-muted-foreground">
                Choose from verified mental health professionals and book secure video consultations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Pill className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  3
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Order & Track</h4>
              <p className="text-muted-foreground">
                Order prescribed medications and track your delivery while monitoring your progress.
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Journey */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Healthcare Provider Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <UserPlus className="w-10 h-10 text-healing-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Register on App</h4>
              <p className="text-muted-foreground">
                Sign up as a healthcare provider and submit your professional credentials for verification.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Get Verified</h4>
              <p className="text-muted-foreground">
                Complete our verification process and get approved to start providing consultations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Video className="w-10 h-10 text-healing-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Start Consulting</h4>
              <p className="text-muted-foreground">
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