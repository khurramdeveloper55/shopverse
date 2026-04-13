import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="grow">
      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-[3px] text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-[3px] text-gray-400">/</li>

            <li className="inline-block px-[3px] text-gray-900 open-sans">
              About
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container-custom pb-12 max-w-[1200px] mx-auto md:px-0 px-4">
        <div className="text-center mb-10">
          <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
            Passionate
          </span>
          <h3>Empowering Businesses Large and Small.</h3>
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
              A home that looks good and makes you feel good too
            </span>
            <p className="text-2xl md:text-3xl font-semibold leading-snug mt-12">
              Introduce your company with a broad vision statement. The viewer
              should come away with a strong sense of what your company stands
              for, and what it is trying to achieve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section 1 */}
      <section className="container-custom pb-12 pt-0 max-w-[1200px] mx-auto  md:px-0 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              val: "2011",
              desc: "A modest number to start off the metrics section.",
            },
            {
              val: "20k",
              desc: "That's a massive increase over previous performance.",
            },
            {
              val: "$100M",
              desc: "This is a larger number than the other two numbers.",
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
              <p className="text-lg text-gray-500 max-w-[200px] mx-auto leading-6">
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
            Established in 2017, by husband and wife team Rob and Frankie, Hutch
            specialises in helping you bring the perfect houseplants home.
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight mt-4 text-neutral-950">
            Born out of a passion for all things botanical and Frankie's love of
            planting up terrariums, Hutch began life as a short term pop up shop
            in Exeter's city centre. The aim was simple; create a jungle
            bursting with exotic foliage right in the centre of a bustling city.
          </h2>
          <div className="flex justify-center"></div>
        </div>
      </section>

      {/* Stats/Feature Section 2 */}
      <section className="container-custom py-12  max-w-[1200px] mx-auto md:px-0 px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight">
              We're leading development for modern teams.
            </h2>
          </div>
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-semibold tracking-tighter">44%</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum libero.
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
        <div className="grid md:grid-cols-2 gap-16 items-center py-12 max-w-[1200px] mx-auto md:px-0 px-4">
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
              Over 40% traffic improvements
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We are humans helping other humans succeed, and we believe that
              transparency is the key to forging lasting relationships.
            </p>
            <div className="pt-8">
              <p className="text-2xl font-semibold">Rikke Thomsen</p>
              <p className="text-md font-semibold tracking-widest uppercase text-neutral-950 mt-1">
                CEO & CTO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finances Section */}
      <section className="container-custom py-12 mx-auto max-w-[1200px] md:px-0 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="primary-yellow text-[14px] uppercase tracking-[0.3em] font-semibold">
                Commencer
              </span>
              <h2 className="text-4xl font-semibold leading-tight">
                Il n'a jamais été aussi facile de gérer ses finances
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { val: "98%", label: "Satisfaction des clients" },
                { val: "205M+", label: "Utilisateurs actifs mensuels" },
                { val: "100K+", label: "Nouveaux utilisateurs par semaine" },
                { val: "55%", label: "Croissance d'une année sur l'autre" },
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
