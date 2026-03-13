import { BLOG_POSTS } from "../constants";
import { MessageSquare } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Diagonal Background Accent */}
      <div
        className="absolute top-0 left-0 w-full h-[60%] bg-[#EEF2F5] opacity-80 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
          backgroundImage: "radial-gradient(#d1dbe4 0.5px, transparent 0.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="primary-yellow text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            BEHIND OUR TIMEPIECES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">
            From the Watch Journal
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative cursor-pointer overflow-hidden aspect-16/10 md:aspect-video shadow-2xl"
            >
              {/* Image with Zoom Effect */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Dark Overlay with Gradient for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black"></div>

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white"></span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={12} /> {post.comments} Comments
                  </span>
                </div>

                <h4 className="text-3xl font-semibold text-left text-white leading-tight  transition-colors">
                  {post.title}
                </h4>
              </div>

              {/* Subtle Border Hover */}
              <div className="absolute inset-0 border-0px group-hover:border border-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
