import { MessageSquare } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: "1",
      title: "How to Choose the Perfect Watch for Any Occasion",
      date: "April 11, 2025",
      comments: 0,
      image: "/blog2.webp",
    },
    {
      id: "2",
      title: "Smartwatch vs Traditional Watch: Which One Suits You?",
      date: "April 11, 2025",
      comments: 0,
      image: "/blog3.jpg",
    },
  ];
  return (
    <section className="py-20 relative overflow-hidden bg-white">
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
        <div className="text-center mb-8">
          <span className="primary-yellow text-[14px] font-semibold uppercase tracking-[0.3em]  block">
            BEHIND OUR TIMEPIECES
          </span>
          <h3>From the Watch Journal</h3>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
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
