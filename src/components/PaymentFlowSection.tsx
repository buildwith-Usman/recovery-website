import { CreditCard, Shield, DollarSign, BarChart3, Calendar, Pill } from "lucide-react";

const PaymentFlowSection = () => {
  return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium text-primary-foreground">
            <Shield className="w-4 h-4" />
            Payment Flow
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Transparent & Secure
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Payment Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We ensure complete transparency in our payment process, giving both patients and healthcare providers 
            peace of mind with every transaction.
          </p>
        </div>

        {/* Payment Flow Steps */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl border border-white/20 shadow-soft">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  1
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white">Book Consultation</h4>
              <p className="text-white/80 text-sm">
                Patient books consultation with doctor or orders prescribed medicines through the app.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl border border-white/20 shadow-soft">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  2
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white">Select Payment Method</h4>
              <p className="text-white/80 text-sm">
                Patient chooses from credit cards, debit cards, JazzCash, or Easypaisa on the booking/ordering page.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl border border-white/20 shadow-soft">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  3
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white">Secure Processing</h4>
              <p className="text-white/80 text-sm">
                Recovery platform securely processes the payment and deducts platform fees automatically.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl border border-white/20 shadow-soft">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  4
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white">Doctor Gets Paid</h4>
              <p className="text-white/80 text-sm">
                Verified doctors receive their earnings directly in their registered bank accounts after successful consultations.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl border border-white/20 shadow-soft">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  5
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white">Real-Time Tracking</h4>
              <p className="text-white/80 text-sm">
                Monitor all payments, refunds, and earnings in real-time through your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;