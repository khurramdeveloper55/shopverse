import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import Button from "./Button";

export default function Craftsmanship() {
  const { categories } = useCategories();
  const catLink = categories?.map((cat) => cat.slug)[1];
  return (
    <section>
      <div className="container xl:mx-auto mx-8 flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2">
          <div className="relative pr-[15%]">
            <div className="relative pt-[120%] overflow-hidden">
              <img
                src="/about-image-1.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all"
              />
            </div>
          </div>

          <div className="absolute top-1/2 md:right-0 right-16 w-[40%] -translate-y-1/2 z-10">
            <div className="relative pt-[120%] overflow-hidden">
              <img
                src="/about-image-2.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-all"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white p-0 md:pl-12 text-left">
            <span className="block mb-3 primary-yellow text-[14px] font-semibold tracking-[3px] uppercase">
              The Art of Timekeeping
            </span>

            <h4 className="md:text-4xl text-3xl font-semibold mb-5 leading-tight text-neutral-950">
              Experience Craftsmanship <br /> in Motion
            </h4>

            <p className="text-neutral-500 open-sans leading-relaxed mb-12 xl:pr-0 pr-8">
              Watch how precision engineering meets timeless design.{" "}
              <br className="md:block hidden" />
              Our collection is more than just watches — it’s a statement of
              style and purpose.
            </p>

            <div className="mt-5">
              <Link to={`/collections/${catLink}`}>
                <Button>Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
