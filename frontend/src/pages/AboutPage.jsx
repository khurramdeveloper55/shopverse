import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="grow">
      {/* Breadcrumbs */}
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-0.75 text-gray-400">/</li>

            <li className="inline-block px-0.75 text-gray-900 open-sans">
              About
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container-custom pb-12 max-w-300 mx-auto md:px-0 px-4">
        <div className="text-center mb-10">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
            Timeless
          </span>
          <h3>Elevating Style Through Watches and Beyond.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative aspect-4/3 overflow-hidden"
          >
            <img
              src="/about-page-1.webp"
              alt="Smartwatch on wrist"
              className="object-cover w-full h-full"
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
            className="space-y-8"
          >
            <span className="text-black text-[14px] uppercase tracking-[0.3em] font-semibold">
              A watch that looks exceptional and feels timeless too
            </span>
            <p className="text-2xl md:text-3xl font-semibold leading-snug mt-12">
              Introduce ShopVerse through a bold vision of timeless style and
              everyday elegance. Visitors should instantly understand our
              passion for premium watches, exceptional quality, and our
              commitment to helping every customer express confidence through
              sophisticated timepieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section 1 */}
      <section className="container-custom pb-12 pt-0 max-w-300 mx-auto  md:px-0 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              val: "2019",
              desc: "The year ShopVerse began its journey in premium watches.",
            },
            {
              val: "20K+",
              desc: "Satisfied customers who trust our style and quality.",
            },
            {
              val: "100+",
              desc: "Exclusive watch designs and collections available.",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-5xl font-semibold tracking-tighter">
                {stat.val}
              </h2>
              <p className="text-lg text-gray-500 max-w-50 mx-auto leading-6">
                {stat.desc}
              </p>
              <div className="flex justify-center pt-4"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-neutral-200 py-12 md:py-24">
        <div className="container-custom text-center max-w-3xl mx-auto md:px-0 px-4">
          <span className="text-stone-500 text-[14px] uppercase tracking-[0.3em] font-semibold">
            Our Values
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight mt-4 text-neutral-950">
            Established in 2019, ShopVerse was built with a passion for timeless
            craftsmanship and modern style, dedicated to helping customers find
            the perfect watch for every moment.
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight mt-4 text-neutral-950">
            Born from a love for precision design and elegant fashion, ShopVerse
            began with a simple vision: to bring premium watches that combine
            luxury, quality, and everyday confidence to watch enthusiasts
            everywhere.
          </h2>
          <div className="flex justify-center"></div>
        </div>
      </section>

      {/* Stats/Feature Section 2 */}
      <section className="container-custom py-12  max-w-300 mx-auto md:px-0 px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight">
              We’re setting new standards in modern watch fashion.
            </h2>
          </div>
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-semibold tracking-tighter">44%</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Customer satisfaction growth driven by quality, trust, and
              timeless craftsmanship.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className=" overflow-hidden">
            <img
              src="/about-page-2.jpg"
              alt="Futuristic watch interface"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Traffic Section */}
      <section className="container-custom pb-12 bg-orange-50">
        <div className="grid md:grid-cols-2 gap-16 items-center py-12 max-w-300 mx-auto md:px-0 px-4">
          <div className="md:w-[90%] overflow-hidden">
            <img
              src="/about-page-3.webp"
              alt="Close up watch"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight">
              Over 40% customer growth achieved
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              At ShopVerse, we believe every watch tells a story. Our commitment
              to quality, elegance, and customer trust helps people find
              timeless pieces that match their style and confidence.
            </p>
            <div className="pt-8">
              <p className="text-2xl font-semibold">Rikke Thomsen</p>
              <p className="text-md font-semibold tracking-widest uppercase text-neutral-950 mt-1">
                FOUNDER & CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finances Section */}
      <section className="container-custom py-12 mx-auto max-w-300 md:px-0 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
                SHOPVERSE
              </span>
              <h2 className="text-4xl font-semibold leading-tight">
                Timeless watches made for every style
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { val: "98%", label: "Customer satisfaction rate" },
                { val: "20K+", label: "Happy customers worldwide" },
                { val: "100+", label: "Premium watch collections" },
                { val: "55%", label: "Year-over-year growth" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-3xl font-semibold!">{item.val}</h3>
                  <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden bg-gray-50">
            <img
              src="/about-page-4.webp"
              alt="Minimalist watch"
              className="object-cover w-full h-full mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
