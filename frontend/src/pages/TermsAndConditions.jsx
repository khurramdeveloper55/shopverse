import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
              Terms & Conditions
            </li>
          </ul>
        </nav>
      </div>
      <section className="max-w-5xl mx-auto px-6 pb-16 pt-6 text-left text-gray-700 open-sans">
        <h1 className="text-4xl! font-semibold mb-8 text-black">
          Terms & Conditions
        </h1>

        <p className="mb-6 leading-8">
          Welcome to <strong>ShopVerse</strong>. These Terms and Conditions
          govern your use of our website and services. By accessing or
          purchasing from our website, you agree to comply with and be bound by
          these terms.
        </p>

        <p className="mb-10 text-sm text-gray-500">Last Updated: April 2026</p>

        <div className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              1. Acceptance of Terms
            </h2>
            <p className="leading-8">
              By accessing ShopVerse, browsing products, creating an account, or
              placing an order, you agree to these Terms & Conditions and our
              Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              2. Products & Availability
            </h2>
            <p className="leading-8">
              All products displayed on ShopVerse are subject to availability.
              We reserve the right to discontinue, modify, or limit quantities
              of any product at any time without notice.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              3. Pricing & Payments
            </h2>
            <p className="leading-8">
              All prices are listed in Pakistani Rupees (PKR) unless otherwise
              stated. Prices may change without prior notice.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Secure online payments</li>
              <li>Cash on Delivery (if available)</li>
              <li>Debit / Credit Cards</li>
              <li>Third-party payment gateways</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              4. Shipping & Delivery
            </h2>
            <p className="leading-8">
              Estimated delivery times are provided for convenience only.
              Delivery delays caused by couriers, weather, or unforeseen
              circumstances are not the responsibility of ShopVerse.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              5. Returns & Refunds
            </h2>
            <p className="leading-8">
              Customers may request returns or exchanges within 7 days of
              receiving the product, provided the item is unused and in its
              original packaging.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Item must be unused</li>
              <li>Original packaging required</li>
              <li>Proof of purchase required</li>
              <li>Refund processed after inspection</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              6. User Accounts
            </h2>
            <p className="leading-8">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              7. Intellectual Property
            </h2>
            <p className="leading-8">
              All content on ShopVerse including images, logos, text, designs,
              and code is the intellectual property of ShopVerse and may not be
              copied, distributed, or reused without permission.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              8. Limitation of Liability
            </h2>
            <p className="leading-8">
              ShopVerse shall not be liable for any indirect, incidental, or
              consequential damages resulting from use of our website, products,
              or services.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              9. Changes to Terms
            </h2>
            <p className="leading-8">
              We reserve the right to update or modify these Terms & Conditions
              at any time. Continued use of the website means acceptance of the
              updated terms.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              10. Contact Information
            </h2>
            <p className="leading-8">
              For any questions regarding these Terms & Conditions, please
              contact us at:
            </p>

            <p className="mt-4">Email: support@shopverse.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
