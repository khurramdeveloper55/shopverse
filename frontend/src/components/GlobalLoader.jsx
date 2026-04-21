import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const { isLoading, message } = useSelector((state) => state.loading);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-md"
        >
          <div className="bg-white rounded-2xl px-10 py-8 flex flex-col items-center shadow-2xl">
            <div className="w-14 h-14 border-4 border-gray-200 border-t-yellow-600 rounded-full animate-spin mb-6" />
            <p className="text-gray-700 font-medium text-lg">
              {message || "Please wait..."}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
