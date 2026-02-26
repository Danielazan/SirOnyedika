import { useSearchParams } from "react-router-dom";

export default function CategoryFilter({ categories }) {
  const [, setSearchParams] = useSearchParams();

  const handleSelect = (categoryId, subId) => {
    setSearchParams({
      category: categoryId,
      sub: subId,
    });
  };

  return (
    <div className="w-64 space-y-10 bg-white rounded-2xl p-8 shadow-sm sticky top-6">
      {categories.map((cat) => (
        <div key={cat.id}>
          <h3 className="text-orange-500 font-semibold text-lg mb-4 tracking-wide">
            {cat.name}
          </h3>

          <div className="space-y-4 pl-1">
            {cat.subcategories.map((sub) => (
              <label
                key={sub.id}
                onClick={() => handleSelect(cat.id, sub.id)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md group-hover:border-orange-400 transition-colors" />
                <span className="text-gray-700 text-base">{sub.name}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
}