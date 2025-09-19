import { Heart, Target, Eye, Shield, Sparkles } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full opacity-30 blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 shadow-soft">
                <Heart className="w-4 h-4" />
                About Recovery
                <Sparkles className="w-4 h-4 ml-1 opacity-60" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Making Mental Health Care 
                <span className="text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text block mt-2"> Truly Accessible</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Recovery bridges the gap between patients seeking mental health support and qualified healthcare providers. 
                Our platform ensures that quality mental health care is just a tap away, breaking down barriers of distance, 
                time, and stigma.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid gap-6">
              <div className="flex gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-medium">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    Making mental health services accessible to everyone, everywhere, at any time through innovative technology and compassionate care.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-medium">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    A future where quality mental health care is available to all, without barriers, stigma, or geographical limitations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shadow-medium">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
                  <p className="text-white/80 leading-relaxed">
                    Privacy, trust, accessibility, and professional care guide everything we do in our mission to heal minds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={medicalTeamImage}
                alt="Professional healthcare team providing mental health support"
                className="w-full rounded-3xl shadow-strong hover:shadow-glow transition-shadow duration-500"
              />
              {/* Image overlay for enhanced depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 to-transparent opacity-50"></div>
            </div>
            {/* Enhanced floating elements */}
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-primary rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gradient-primary rounded-3xl opacity-20 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-0 w-28 h-28 bg-primary rounded-full opacity-15 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;