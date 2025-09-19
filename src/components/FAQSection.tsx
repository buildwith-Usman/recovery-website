import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Shield, Video, Pill, Clock, Smartphone, CreditCard, AlertTriangle, Users, Download } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      id: 1,
      question: "What is Recovery?",
      answer: "Recovery is a mental health platform where you can connect with licensed psychiatrists and therapists via secure video calls, get matched to the right professional through our smart form-based system, and conveniently order psychiatric medicines through our in-app pharmacy.",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      id: 2,
      question: "How does the matching system work?",
      answer: "When you sign up, you'll complete a short confidential form about your needs, preferences, and goals. Our system then recommends the best-suited therapist for you.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      question: "Are the psychiatrists and therapists qualified?",
      answer: "Yes. All professionals on Recovery are licensed and verified mental health practitioners with credentials in psychiatry, psychology, or counseling.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 4,
      question: "How do video therapy sessions work?",
      answer: "You can schedule and join secure video calls with your chosen therapist or psychiatrist directly through the app. Sessions are encrypted and private.",
      icon: <Video className="w-5 h-5" />
    },
    {
      id: 5,
      question: "Can psychiatrists prescribe medicines through Recovery?",
      answer: "Yes. Psychiatrists on Recovery can provide digital prescriptions after your consultation. These can be directly ordered through our in-app pharmacy.",
      icon: <Pill className="w-5 h-5" />
    },
    {
      id: 6,
      question: "How does the in-app pharmacy work?",
      answer: "Once prescribed, you can order your medicines within the app. Our pharmacy handles packaging and delivery to your doorstep discreetly.",
      icon: <Pill className="w-5 h-5" />
    },
    {
      id: 7,
      question: "Is Recovery safe and private?",
      answer: "Absolutely. All video calls are encrypted, personal health information is kept confidential, and prescriptions are shared securely. Your privacy is our top priority.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 8,
      question: "How much does it cost?",
      answer: "Recovery offers pay-per-session and subscription options. Prices depend on the type of consultation (therapy vs. psychiatry). Medication costs vary depending on your prescription.",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 9,
      question: "Can I cancel or reschedule an appointment?",
      answer: "Please check our cancellation policy for timing and refund details.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 10,
      question: "Can Recovery help in an emergency?",
      answer: "Recovery is not for emergency situations. If you or someone you know is in crisis, please call your local emergency number immediately or visit the nearest emergency room.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: 11,
      question: "Which devices support Recovery?",
      answer: "Recovery works on iOS and Android. You just need a stable internet connection for video sessions.",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      id: 12,
      question: "How do I get started?",
      answer: "Download Recovery, sign up, fill in the matching form, and book your first session—it's that simple!",
      icon: <Download className="w-5 h-5" />
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#00424E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#00424E]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00424E]/10 px-6 py-3 rounded-full text-sm font-medium text-[#00424E] border border-[#00424E]/20">
            <MessageCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to Know
            <span className="text-[#00424E] block">About Recovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our mental health platform, from getting started 
            to understanding our services and ensuring your privacy.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors rounded-2xl"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-[#00424E]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="text-[#00424E]">
                        {faq.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-[#00424E]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      {faq.id === 10 && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-red-800 font-semibold text-sm">Emergency Contacts:</p>
                              <p className="text-red-700 text-sm mt-1">
                                Emergency Services: <span className="font-bold">911</span><br />
                                Crisis Helpline: <span className="font-bold">988</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#00424E]/5 rounded-3xl p-8 lg:p-12 border border-[#00424E]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our support team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00424E] text-white font-semibold rounded-xl hover:bg-[#003238] transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="mailto:support@recovery.health"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00424E] text-[#00424E] font-semibold rounded-xl hover:bg-[#00424E] hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;