import { Button } from "@/components/ui/button";
import { Calendar, Video, Pill, Activity, UserCheck, Stethoscope, DollarSign, Clock } from "lucide-react";
import icViewServices from "@/assets/ic_view_services.png";

const ServicesSection = () => {
  return (
        <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium text-primary-foreground">
            <Stethoscope className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Comprehensive Mental Health
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a patient seeking care or a healthcare provider looking to reach more patients, 
            Recovery has the tools and services you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* For Patients */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">For Patients</h3>
              <p className="text-muted-foreground">
                Get the mental health support you need, when you need it.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Book Appointments</h4>
                  <p className="text-muted-foreground">
                    Schedule consultations with licensed psychiatrists and therapists at your convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Secure Video Consultations</h4>
                  <p className="text-muted-foreground">
                    Connect with healthcare providers through secure, HIPAA-compliant video sessions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Medicine Ordering</h4>
                  <p className="text-muted-foreground">
                    Order prescribed medications directly through the app with convenient delivery tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Track Your Progress</h4>
                  <p className="text-muted-foreground">
                    Monitor your appointments, medication delivery, and overall mental health journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Image */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <img
              src={icViewServices}
              alt="Healthcare professionals providing mental health services"
              className="max-w-lg h-[600px] object-contain mx-auto mt-[120px]"
            />
          </div>

          {/* For Healthcare Providers */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">For Healthcare Providers</h3>
              <p className="text-muted-foreground">
                Expand your practice and reach patients who need your expertise.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Easy Registration</h4>
                  <p className="text-muted-foreground">
                    Register and get verified on our platform with a streamlined approval process.
                  </p>
                </div>
              </div>

                            <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Secure Therapy Sessions</h4>
                  <p className="text-muted-foreground">
                    Provide online therapy and consultations through our secure, professional platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Appointment Management</h4>
                  <p className="text-muted-foreground">
                    Efficiently manage your schedule and patient interactions through our intuitive dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">Earn Through Consultations</h4>
                  <p className="text-muted-foreground">
                    Receive secure payments directly to your account after successful consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;