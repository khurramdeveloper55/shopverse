import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const info = [
    {
      icon: MapPin,
      title: "Address",
      content: "Copley, South Australia 5732, Australia.",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+ (02) 6171 3859\n+ (07) 4088 1324",
    },
    {
      icon: Clock,
      title: "Open",
      content: "Monday - Friday: 8am - 4pm\nSaturday - Sunday: 9am - 5pm",
    },
    {
      icon: Mail,
      title: "Emails",
      content: "example@example.com\nexample@example.com",
    },
  ];

  const faqs = [
    {
      question: "How long will shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders. You will receive a tracking number as soon as your order ships.",
    },
    {
      question: "How do I know if my order is confirmed?",
      answer:
        "Once you place an order, you will receive an order confirmation email with your order details. If you don't see it, please check your spam folder.",
    },
    {
      question: "Can I change my shipping address after my order is placed?",
      answer:
        "We can only change the shipping address if the order has not been processed yet. Please contact our support team immediately if you need to make a change.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900 open-sans">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-neutral-100 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className=" overflow-hidden aspect-square flex items-center justify-center"
        >
          <img
            src="/contact-page.webp"
            alt="Smartwatch"
            className="w-full h-full object-cover mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="space-y-6 md:px-0 px-6 md:pb-0 pb-12"
        >
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
            Timeless Elegance, Modern Charm
          </span>

          <h1 className="text-4xl! md:text-5xl font-display font-medium leading-tight mt-4">
            Indulge in Timeless Classics with a Modern Twist
          </h1>

          <p className="text-neutral-500 text-md open-sans leading-relaxed max-w-lg">
            Embrace the allure of timeless fashion with our collection of modern
            classics. From essential basics to statement pieces, redefine
            elegance with a contemporary touch.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              key={idx}
              className="flex items-start gap-4"
            >
              <div className="w-18 h-18 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-semibold text-2xl mb-2">
                  {item.title}
                </h4>
                <p className="text-md open-sans text-gray-500 whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-semibold mb-4">
            Got Any Questions?
          </h2>
          <p className="text-gray-500 mb-12 open-sans">
            Use the form below to get in touch with the sales team
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 open-sans">
              <input
                type="text"
                placeholder="Name *"
                className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-[#8B6E4E] transition-colors rounded-lg"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-[#8B6E4E] transition-colors rounded-lg"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number *"
              className="w-full bg-white border open-sans border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-[#8B6E4E] transition-colors rounded-lg"
            />
            <textarea
              placeholder="Message *"
              rows={6}
              className="w-full bg-white border open-sans border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-[#8B6E4E] transition-colors resize-none rounded-lg"
            ></textarea>

            <div className="pt-4">
              <button
                type="submit"
                className="relative isolate w-30 overflow-hidden flex mx-auto items-center px-[35px] py-3 border border-yellow-700 
    text-left text-yellow-700 uppercase tracking-wide font-semibold
    bg-transparent rounded-md transition duration-300
    hover:text-white

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200
    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0"
              >
                <span>SEND</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Store Location */}
      <section className=" bg-gray-200/50">
        <div>
          <div className="relative w-full h-[600px] overflow-hidden shadow-sm">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps?q=Copley,South+Australia+5732&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            />

            {/* Overlay Card */}
            <div className="absolute flex flex-col items-center top-16 md:left-20 left-0 bg-white p-10 w-full max-w-sm shadow-lg z-10">
              <h3 className="text-2xl font-display font-semibold! mb-6">
                Our store
              </h3>

              <div className="space-y-4 text-md open-sans text-gray-500 mb-8">
                <p>
                  Copley,
                  <br />
                  South Australia 5732
                </p>

                <p>
                  Mon - Fri, 10am - 9pm
                  <br />
                  Saturday, 11am - 9pm
                  <br />
                  Sunday, 11am - 5pm
                </p>
              </div>

              <Button className="flex! gap-1 items-center">
                <MapPin className="w-3 h-3" /> <span>GET DIRECTIONS</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-neutral-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">FAQs</h2>
            <p className="text-neutral-500 open-sans">
              Below are some of our common questions
            </p>
          </div>

          <div className="space-y-2  p-2 ">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-4 flex items-center justify-between text-left   transition-colors"
                >
                  <span className="font-display font-semibold text-2xl  transition-colors pr-8">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-gray-700 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-700 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-8 text-neutral-500 text-md text-left open-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
