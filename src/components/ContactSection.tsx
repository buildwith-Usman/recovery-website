import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Heart, Shield, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00424E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00424E]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Let's Start Your
            <span className="text-[#00424E] block">Recovery Journey Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform mental healthcare? Whether you're a patient, healthcare provider, or partner, 
            we're here to support your journey towards better mental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-[#00424E] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For Patients</h3>
            <p className="text-gray-600 mb-4">Get support with appointments, billing, or using the Recovery app.</p>
            <div className="space-y-2">
              <p className="text-[#00424E] font-semibold">support@recovery.health</p>
              <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-[#00424E] rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For Healthcare Providers</h3>
            <p className="text-gray-600 mb-4">Join our network or get platform assistance and training.</p>
            <div className="space-y-2">
              <p className="text-[#00424E] font-semibold">providers@recovery.health</p>
              <p className="text-sm text-gray-500">Mon-Fri, 8 AM - 8 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-[#00424E] rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Business Partnerships</h3>
            <p className="text-gray-600 mb-4">Explore partnerships, integrations, and business opportunities.</p>
            <div className="space-y-2">
              <p className="text-[#00424E] font-semibold">business@recovery.health</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Main Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours during business days.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="h-12 border-2 border-gray-200 focus:border-[#00424E] rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="h-12 border-2 border-gray-200 focus:border-[#00424E] rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 border-2 border-gray-200 focus:border-[#00424E] rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full h-12 border-2 border-gray-200 focus:border-[#00424E] rounded-xl px-3 bg-white">
                  <option>General Question</option>
                  <option>Patient Support</option>
                  <option>Provider Onboarding</option>
                  <option>Business Partnership</option>
                  <option>Technical Support</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you on your recovery journey..."
                  rows={5}
                  className="border-2 border-gray-200 focus:border-[#00424E] rounded-xl"
                />
              </div>

              <Button 
                className="w-full h-14 bg-[#00424E] hover:bg-[#003238] text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & CTA */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-900 mb-2">Crisis Support</h4>
                  <p className="text-red-800 mb-3">
                    If you're experiencing a mental health emergency, please contact emergency services immediately.
                  </p>
                  <div className="space-y-1">
                    <p className="text-red-900 font-semibold">Emergency: 911</p>
                    <p className="text-red-900 font-semibold">Crisis Helpline: 988</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#00424E]/5 rounded-2xl p-6 border border-[#00424E]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00424E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Support Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-gray-900 font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-gray-900 font-semibold">Emergency Only</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <span className="text-[#00424E] font-semibold">24/7 Crisis Support Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Our Journey</h4>
              <p className="text-gray-600 mb-4">Stay updated with Recovery's latest features and mental health resources.</p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-[#00424E]/20 hover:bg-[#00424E] hover:text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-[#00424E]/20 hover:bg-[#00424E] hover:text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="border-[#00424E]/20 hover:bg-[#00424E] hover:text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;