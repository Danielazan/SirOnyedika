
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { getProducts, getCategories } from "../components/ShopPages/mockApi";
import CategoryFilter from "../components/ShopPages/CategoryFilter";
import ProductGrid from "../components/ShopPages/ProductGrid";



import { X } from "lucide-react";   // npm install lucide-react

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sub = searchParams.get("sub");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);   // Mobile drawer state

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

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== MOBILE HEADER + FILTER BUTTON ==================== */}
        <div className="flex items-center justify-between py-6 lg:hidden">
          <h1 className="text-3xl font-bold">Clothing</h1>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-full font-medium active:bg-orange-600"
          >
            Filters
          </button>
        </div>

        {/* Desktop Title */}
        <h1 className="hidden lg:block text-4xl font-bold text-gray-900 pt-10 pb-8">
          Clothing
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* ==================== DESKTOP SIDEBAR ==================== */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <CategoryFilter categories={categories} />
          </div>

          {/* ==================== PRODUCT GRID ==================== */}
          <div className="flex-1">
            {loading ? (
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full" />
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </div>

      {/* ==================== MOBILE FILTER DRAWER ==================== */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[60] rounded-t-3xl max-h-[85vh] overflow-auto lg:hidden"
            >
              <div className="sticky top-0 bg-white border-b flex items-center justify-between px-6 py-4 z-10">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="p-6">
                <CategoryFilter categories={categories} isMobile />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}