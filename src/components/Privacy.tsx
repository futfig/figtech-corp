import { Nav } from './Nav'
import { Footer } from './Footer'

export function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: '#0B0C0F' }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#838896' }}>
          Effective date: April 17, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#C0C3CC' }}>
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Who we are</h2>
            <p>
              Orvka is operated by FigTech LLC ("we", "us", "our"). This Privacy Policy explains how
              we collect, use, and protect your information when you use the Orvka application and
              website (collectively, the "Service").
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information we collect</h2>

            <h3 className="font-semibold text-white mt-4 mb-2">Account information</h3>
            <p>
              When you create an account, we collect your email address and display name. If you sign
              in with Google or Facebook, we receive your name, email address, and profile picture
              from the provider. We do not receive or store your provider password.
            </p>

            <h3 className="font-semibold text-white mt-4 mb-2">Usage data</h3>
            <p>
              We collect information about how you interact with the Service, including predictions
              you make, leagues you join, and pages you visit. This helps us improve the product and
              deliver features like leaderboards and scoring.
            </p>

            <h3 className="font-semibold text-white mt-4 mb-2">Device and log data</h3>
            <p>
              We automatically collect standard log data such as your IP address, browser type,
              operating system, and referring URL. This data is used for security, diagnostics,
              and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide, operate, and maintain the Service</li>
              <li>Authenticate your identity and manage your account</li>
              <li>Calculate scores, rankings, and leaderboard positions</li>
              <li>Send transactional emails (account verification, password reset)</li>
              <li>Monitor and improve security, performance, and reliability</li>
              <li>Respond to your inquiries and support requests</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information. We do not use your data for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Authentication and third-party providers</h2>
            <p>
              We use Firebase Authentication (provided by Google) to manage sign-in. When you
              authenticate with Google or Facebook, your identity token is verified by our server.
              We store your email, display name, and a unique identifier — not your OAuth access
              tokens or provider passwords.
            </p>
            <p className="mt-2">
              Your use of Google and Facebook sign-in is also subject to their respective privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data storage and security</h2>
            <p>
              Your data is stored on Google Cloud Platform infrastructure in the United States. We
              use industry-standard security measures including encrypted connections (TLS),
              access controls, and regular security reviews to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data retention</h2>
            <p>
              We retain your account data for as long as your account is active. If you delete your
              account, we will remove your personal information within 30 days, except where
              retention is required by law or necessary to resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for optional data processing</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@orvka.com" className="text-gold hover:underline">
                hello@orvka.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Children's privacy</h2>
            <p>
              The Service is not directed to children under 13. We do not knowingly collect personal
              information from children under 13. If we become aware that a child under 13 has
              provided us with personal information, we will delete it.
            </p>
          </section>

          <section id="data-deletion">
            <h2 className="text-lg font-semibold text-white mb-3">9. How to delete your data</h2>
            <p>To delete your Orvka account and all associated data:</p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li>
                Email{' '}
                <a href="mailto:hello@orvka.com?subject=Delete%20my%20account" className="text-gold hover:underline">
                  hello@orvka.com
                </a>{' '}
                with the subject "Delete my account"
              </li>
              <li>Include the email address associated with your Orvka account</li>
              <li>We will delete your account and all associated data within 30 days</li>
            </ol>
            <p className="mt-3">
              This includes your profile information, predictions, league memberships, and any
              other data linked to your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the updated policy on this page and updating the effective date.
              Your continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:hello@orvka.com" className="text-gold hover:underline">
                hello@orvka.com
              </a>.
            </p>
            <p className="mt-2">
              FigTech LLC
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
