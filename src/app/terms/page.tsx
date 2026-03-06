import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Landliya",
  description: "Landliya Terms of Service - Terms and conditions for using our platform",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Landliya's property platform, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by these terms, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              Landliya is a digital platform that connects property buyers, sellers, and renters in 
              Pondicherry. We provide property listings, search functionality, and communication tools 
              to facilitate property transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-2">As a user, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not post false, misleading, or fraudulent listings</li>
              <li>Not engage in any illegal activities on the platform</li>
              <li>Respect other users and their privacy</li>
              <li>Not spam or send unsolicited communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Property Listings</h2>
            <p className="text-muted-foreground mb-2">When posting a property, you warrant that:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You are the owner or authorized agent of the property</li>
              <li>All information provided is accurate and true</li>
              <li>You have the right to sell/rent the property</li>
              <li>You have proper ownership documents when required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on Landliya, including logos, text, graphics, and software, is the property 
              of Landliya and is protected by copyright and other intellectual property laws. You may 
              not copy, reproduce, or distribute any content without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Landliya provides the platform "as is" without any warranties. We do not guarantee the 
              accuracy of listings or the quality of properties. We are not liable for any disputes 
              between buyers, sellers, or renters. Users should verify all information independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend your account at any time for violations 
              of these terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these terms at any time. Continued use of the platform after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of India, 
              specifically the state of Tamil Nadu where Pondicherry is located.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at 
              <a href="mailto:info@landliya.com" className="text-primary hover:underline"> info@landliya.com</a>
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
