export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`relative isolate overflow-hidden inline-block px-[35px] py-3 border border-[#a8741a] 
    text-left text-[#a8741a] uppercase tracking-wide font-semibold
    bg-transparent rounded-md transition duration-300
    hover:text-white

    before:content-[''] before:absolute before:block before:-z-10
    before:bg-[#a8741a]
    before:w-[120%] before:h-[110%]
    before:top-0 before:left-0
    before:origin-bottom-left
    before:rotate-[4deg]
    before:translate-y-[108%] before:-translate-x-4
    before:transition-transform before:duration-200
    hover:before:rotate-0 hover:before:translate-y-0 hover:before:translate-x-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
