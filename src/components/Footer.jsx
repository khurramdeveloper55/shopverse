import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* FOOTER GPT */}

      <footer className="border-t border-gray-100 pt-20 pb-10 bg-stone-200 text-neutral-500 text-base open-sans text-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo and About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-lg">
                  O
                </div>
                <span className="text-xl font-black tracking-widest uppercase">
                  Orolo
                </span>
              </div>
              <p className=" text-gray-500 leading-relaxed mb-6">
                Orolo Shopify is a dynamic and innovative online store offers
                watch products to customers worldwide.
              </p>
              <p className=" text-gray-500 mb-1">
                <span className="font-bold">T:</span> + (08) 9055 0269
              </p>
              <p className=" text-gray-500">
                <span className="font-bold">E:</span> example@example.com
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className=" tracking-widest text-lg font-semibold mb-4 text-black uppercase">
                Information
              </h4>
              <ul className="space-y-3  text-gray-500">
                <li>
                  <a href="#" className="hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Search
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="tracking-widest text-lg font-semibold mb-4 text-black uppercase">
                Support
              </h4>
              <ul className="space-y-3  text-gray-500">
                <li>
                  <a href="#" className="hover:underline">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="tracking-widest text-lg font-semibold mb-4 text-black uppercase">
                Subscribe For Updates
              </h4>
              <p className=" text-gray-500 mb-6 text-center lg:text-left">
                Sign up now and don't miss out on updates on Sale and Special
                offers again.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-md border border-gray-400 bg-transparent text-gray-400 placeholder-gray-500 focus:outline-none"
                />
                <a
                  className="
    relative z-10 isolate overflow-hidden inline-block px-[35px] py-3 border border-yellow-700
    text-left text-yellow-700 uppercase tracking-wide font-semibold
    bg-transparent rounded-md transition duration-300
    hover:text-white

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-yellow-700
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg] before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200
    before:[transition-timing-function:cubic-bezier(.17,.67,.83,.67)]

    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0
    cursor-pointer
  "
                >
                  Subscribe
                </a>
              </form>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center border-t border-dashed border-neutral-500">
            <p>
              Copyright &copy; 2025{" "}
              <a href="/" className="text-yellow-700 hover:underline">
                Orolo
              </a>
              . All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
