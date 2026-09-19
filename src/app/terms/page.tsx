import type { Metadata } from "next";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Privacy",
  description: "Terms and Conditions, Disclaimer and Privacy Policy for D.F.T Limited.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 py-8 first:border-t-0 first:pt-0">
      <h3 className="font-display text-[15px] font-semibold text-white">{title}</h3>
      <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-[var(--slate-300)]">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <p className="font-mono text-[13px] text-[var(--slate-300)]">Legal</p>
      <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Terms &amp; Conditions</h1>
      <p className="mt-4 text-sm text-[var(--slate-300)]">
        Terms and Conditions for {site.legalName} — Effective Date: {site.termsEffectiveDate}
      </p>
      <p className="mt-6 text-[15px] leading-relaxed text-[var(--slate-300)]">
        Welcome to D.F.T Limited! By accessing or using our services, you agree to comply with
        and be bound by the following Terms and Conditions. Please read these terms carefully
        before using our services. If you do not agree with any part of these terms, you must
        not use our services.
      </p>

      <div className="mt-10">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing our website, enrolling in our courses, or utilizing our services, you
            acknowledge that you have read, understood, and agree to be bound by these Terms and
            Conditions, as well as our Disclaimer.
          </p>
        </Section>
        <Section title="2. Services Offered">
          <p>D.F.T Limited provides a range of services, including but not limited to:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Trading tutorials and education</li>
            <li>Personalized financial consulting</li>
            <li>Basic website development</li>
            <li>AI integration for business operations</li>
            <li>Forex account management</li>
            <li>FX signal provision</li>
          </ul>
        </Section>
        <Section title="3. Use of Services">
          <p>
            Our services are intended for individuals and businesses seeking to enhance their
            knowledge and capabilities in trading, financial management, and web development. By
            using our services, you agree to use them responsibly and comply with applicable
            laws and regulations.
          </p>
        </Section>
        <Section title="4. Limitations of Liability">
          <p>
            We provide our services on an &ldquo;as is&rdquo; basis, without any warranties or
            guarantees. While we strive to provide accurate and up-to-date information, we do not
            guarantee the accuracy or completeness of any content on our website or services.
          </p>
        </Section>
        <Section title="5. Changes to Terms">
          <p>
            We reserve the right to update or modify these Terms and Conditions at any time. Any
            changes will be posted on this page with an updated effective date. Your continued
            use of our services after such changes will constitute your acceptance of the new
            terms.
          </p>
        </Section>
        <Section title="6. Contact Information">
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please
            contact us at:
          </p>
          <p className="text-white/85">
            D.F.T Limited
            <br />
            {site.address}
            <br />
            {site.email}
            <br />
            {site.phone}
          </p>
        </Section>
      </div>

      <div className="mt-16 border-t border-white/10 pt-10">
        <p className="font-mono text-[13px] text-[var(--slate-300)]">Disclaimer</p>
        <h2 className="mt-3 font-serif text-3xl text-white">Important legal notice</h2>

        <div className="mt-8">
          <Section title="Our services">
            <p>
              We offer high-quality educational resources, personalized tutoring, and expert
              financial consulting. Our mission is to equip you with the knowledge and skills
              necessary to navigate the complex world of finance and technology. It is important
              to recognize that the financial markets carry risks that cannot be ignored.
            </p>
          </Section>
          <Section title="Risk disclosure">
            <p>
              Trading in financial markets, including Forex and other investment vehicles,
              involves significant risk. The potential for profit comes with the possibility of
              loss. Market conditions can change rapidly due to economic indicators, geopolitical
              events, and market sentiment.
            </p>
          </Section>
          <Section title="Responsibility for losses">
            <p>
              Any losses incurred during trading activities or account management are the sole
              responsibility of the individual trader or client. D.F.T Limited does not guarantee
              profits and cannot be held liable for financial losses resulting from your trading
              decisions or account management.
            </p>
          </Section>
          <Section title="Risk management">
            <p>
              We strongly encourage all clients and students to practice sound risk-management
              strategies — setting appropriate stop-loss levels, diversifying your portfolio, and
              only trading with funds you can afford to lose.
            </p>
          </Section>
          <Section title="No guarantee of results">
            <p>
              The financial markets are inherently unpredictable, and past performance is not
              indicative of future results. We recommend seeking independent financial advice if
              you are unsure about your investment decisions.
            </p>
          </Section>
          <Section title="Acknowledgment of risks">
            <p>
              By using our services, you acknowledge and accept the risks associated with trading
              and investment activities. We’re here to help you grow your potential and build
              wealth, but understanding the risks is essential to your success.
            </p>
          </Section>
        </div>
      </div>

      <div id="privacy" className="mt-16 scroll-mt-24 border-t border-white/10 pt-10">
        <p className="font-mono text-[13px] text-[var(--slate-300)]">Privacy</p>
        <h2 className="mt-3 font-serif text-3xl text-white">Privacy Policy</h2>
        <div className="mt-8">
          <Section title="Information we collect">
            <p>
              When you use our contact form, we collect the details you provide — your name,
              email address, phone number (if given), and the content of your message.
            </p>
          </Section>
          <Section title="How we use it">
            <p>
              We use this information solely to respond to your enquiry and provide the services
              you request. We apply strict data-protection practices to keep your information
              secure, and we do not sell your personal information to third parties.
            </p>
          </Section>
          <Section title="Questions">
            <p>
              If you have questions about how your information is handled, contact us at{" "}
              {site.email}.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
