export default function ProductDetails({ product }) {
  return (
    <div className="grid grid-cols-2 gap-16 p-10">
      {/* Left */}
      <div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-2xl"
        />
        <div className="flex gap-4 mt-4">
          {product.images.map(img => (
            <img
              key={img}
              src={img}
              className="w-20 h-20 rounded-lg border"
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        <h1 className="text-3xl font-semibold">
          {product.name}
        </h1>

        <p className="text-2xl text-orange-600 mt-4">
          ${product.price}
        </p>

        <p className="mt-6 text-gray-600">
          {product.description}
        </p>

        {/* Size selector */}
        <div className="flex gap-3 mt-6">
          {product.sizes.map(size => (
            <button
              key={size}
              className="border px-4 py-2 rounded hover:bg-orange-500 hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 border rounded-lg">
            BUY
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}