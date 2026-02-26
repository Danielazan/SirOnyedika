
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProducts, getCategories } from "../components/ShopPages/mockApi";
import CategoryFilter from "../components/ShopPages/CategoryFilter";
import ProductGrid from "../components/ShopPages/ProductGrid";


export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sub = searchParams.get("sub");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const cats = await getCategories();
      const prods = await getProducts({ category, sub });
      setCategories(cats);
      setProducts(prods);
      setLoading(false);
    }
    fetchData();
  }, [category, sub]);

  // Sequential stagger animation
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.22, delayChildren: 0.3 },
    },
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== PAGE TITLE ==================== */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 pt-10 pb-8"
        >
          Clothing
        </motion.h1>

        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-10 lg:gap-12"
        >
          {/* ==================== LEFT SIDEBAR – CATEGORY FILTER ==================== */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            className="lg:w-80 flex-shrink-0"
          >
            <CategoryFilter categories={categories} />
          </motion.div>

          {/* ==================== MAIN CONTENT – GROUPED PRODUCTS + PAGINATION + TRUST ==================== */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="flex-1"
          >
            {loading ? (
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full" />
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}