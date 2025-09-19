import { Heart, Target, Eye, Shield } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-healing-light px-4 py-2 rounded-full text-sm font-medium text-healing">
                <Heart className="w-4 h-4" />
                About Recovery
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Making Mental Health Care 
                <span className="text-transparent bg-gradient-healing bg-clip-text"> Accessible</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recovery bridges the gap between patients seeking mental health support and qualified healthcare providers. 
                Our platform ensures that quality mental health care is just a tap away, breaking down barriers of distance, 
                time, and stigma.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Making mental health services accessible to everyone, everywhere, at any time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-healing-light rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-healing" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A future where quality mental health care is available to all, without barriers or stigma.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Core Values</h3>
                  <p className="text-muted-foreground">
                    Privacy, trust, accessibility, and professional care guide everything we do.
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
                alt="Professional healthcare team"
                className="w-full rounded-3xl shadow-medium"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-healing rounded-3xl opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;