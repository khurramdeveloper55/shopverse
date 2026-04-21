import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-0.75 text-gray-400">/</li>

            <li className="inline-block px-0.75 text-gray-900 open-sans">
              Privacy Policy
            </li>
          </ul>
        </nav>
      </div>
      <section className="max-w-5xl mx-auto px-6 pb-16 pt-6 text-left text-gray-700 open-sans">
        <h1 className="text-4xl! font-semibold mb-8 text-black">
          Privacy Policy
        </h1>

        <p className="mb-6 leading-8">
          At <strong>ShopVerse</strong>, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, store, and protect your data when you use our
          website and services.
        </p>

        <p className="mb-10 text-sm text-gray-500">Last Updated: April 2026</p>

        {/* Section 1 */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              1. Information We Collect
            </h2>
            <p className="leading-8">
              We may collect personal information including your name, email
              address, phone number, shipping address, billing address, payment
              details, and order history when you create an account, place an
              order, or contact us.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Shipping & Billing Address</li>
              <li>Order History</li>
              <li>Payment Information</li>
              <li>IP Address & Browser Information</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              2. How We Use Your Information
            </h2>
            <p className="leading-8">
              Your information is used to process orders, improve your shopping
              experience, provide customer support, personalize content, and
              send updates regarding your purchases.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Process and deliver your orders</li>
              <li>Manage your account</li>
              <li>Respond to support requests</li>
              <li>Send promotional offers and updates</li>
              <li>Improve website performance</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              3. Payment Information
            </h2>
            <p className="leading-8">
              We do not store your complete debit or credit card details on our
              servers. All payment transactions are securely processed through
              trusted third-party payment providers such as Stripe, PayPal, or
              other secure gateways.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              4. Cookies & Tracking Technologies
            </h2>
            <p className="leading-8">
              ShopVerse uses cookies and similar technologies to enhance user
              experience, analyze traffic, remember cart items, and improve
              functionality.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Remember login sessions</li>
              <li>Store cart and wishlist items</li>
              <li>Analytics and traffic monitoring</li>
              <li>Personalized recommendations</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              5. Third-Party Services
            </h2>
            <p className="leading-8">
              We may use third-party services such as payment processors,
              analytics tools, delivery partners, and email services. These
              providers only receive the information necessary to perform their
              services.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              6. Data Security
            </h2>
            <p className="leading-8">
              We implement reasonable technical and organizational security
              measures to protect your data against unauthorized access, misuse,
              or disclosure.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              7. Your Rights
            </h2>
            <p className="leading-8">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request your data</li>
              <li>Update account information</li>
              <li>Delete your account</li>
              <li>Opt-out of marketing emails</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              8. Contact Us
            </h2>
            <p className="leading-8">
              If you have any questions regarding this Privacy Policy, please
              contact us:
            </p>
            <p className="mt-4">Email: support@shopverse.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
