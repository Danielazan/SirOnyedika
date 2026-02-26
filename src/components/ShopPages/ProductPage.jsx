import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "./mockApi";
import ProductDetails from "./ProductDetails";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(productId);
      console.log("this is result from productPage")
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div className="p-10">Loadings...</div>;

  return <ProductDetails product={product} />;
}