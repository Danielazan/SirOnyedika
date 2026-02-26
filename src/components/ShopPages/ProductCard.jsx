import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className="bg-white rounded-xl p-4 hover:shadow-lg transition"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="rounded-lg h-60 object-cover w-full"
      />

      <h3 className="mt-4 font-medium">{product.name}</h3>
      <p className="text-orange-500 font-semibold">
        ${product.price}
      </p>
    </Link>
  );
}