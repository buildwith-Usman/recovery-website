import { CreditCard, Shield, DollarSign, BarChart3, ArrowRight } from "lucide-react";

const PaymentFlowSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-trust/20 px-4 py-2 rounded-full text-sm font-medium text-trust">
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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <CreditCard className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  1
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Patients Pay Securely</h4>
              <p className="text-muted-foreground text-sm">
                Patients make secure payments through integrated gateways when booking appointments or ordering medicines.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-10 -right-4 z-10">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Shield className="w-10 h-10 text-healing-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  2
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Recovery Processes</h4>
              <p className="text-muted-foreground text-sm">
                Our platform manages transactions securely, deducts platform fees, and ensures safe handling of all payments.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-10 -right-4 z-10">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <DollarSign className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  3
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Doctors Get Paid</h4>
              <p className="text-muted-foreground text-sm">
                Verified doctors receive earnings directly in their registered bank accounts after successful consultations.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-10 -right-4 z-10">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <BarChart3 className="w-10 h-10 text-healing-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                  4
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Full Transparency</h4>
              <p className="text-muted-foreground text-sm">
                Both patients and doctors can track their complete payment history directly inside the app dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-card-foreground mb-2">Bank-Level Security</h4>
            <p className="text-muted-foreground text-sm">
              All transactions are protected with 256-bit SSL encryption and PCI DSS compliance.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <div className="w-12 h-12 bg-healing-light rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-healing" />
            </div>
            <h4 className="text-lg font-semibold text-card-foreground mb-2">Real-Time Tracking</h4>
            <p className="text-muted-foreground text-sm">
              Monitor all payments, refunds, and earnings in real-time through your dashboard.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-card-foreground mb-2">Multiple Payment Options</h4>
            <p className="text-muted-foreground text-sm">
              Support for all major credit cards, UPI, net banking, and digital wallets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;