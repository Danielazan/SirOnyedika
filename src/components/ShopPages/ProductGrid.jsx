
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  // Group products by category (matches design)
  const grouped = products.reduce((acc, product) => {
    const cat = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  const staggerSection = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.4 },
    }),
  };

  return (
    <div className="space-y-16">
      {Object.entries(grouped).map(([category, items], index) => (
        <motion.div
          key={category}
          custom={index}
          variants={staggerSection}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      ))}

      {/* ==================== PAGINATION ==================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center items-center gap-2 mt-12"
      >
        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900">←</button>
        {[1, 2, 3, 10].map((num, i) => (
          <button
            key={i}
            className={`w-9 h-9 rounded-lg text-sm font-medium ${
              num === 1
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
        <span className="text-gray-400 px-2">…</span>
        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900">→</button>
      </motion.div>

      {/* ==================== TRUST BAR ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100"
      >
        {[
          { icon: "🚚", title: "Free Shipping", desc: "Free shipping for order above $185" },
          { icon: "🎟️", title: "Members Discount", desc: "Discount for elite members" },
          { icon: "💳", title: "Flexible Payment", desc: "Secured payment options" },
          { icon: "🛟", title: "Swift Support", desc: "24/7 customer support" },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}