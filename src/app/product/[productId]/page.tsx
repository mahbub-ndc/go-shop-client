/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleProduct from "@/components/SingleProduct";

interface IParams {
  productId?: string;
}

const ProductDetailPage = async ({ params }: { params: IParams }) => {
  // console.log(params.productId);
  const res = await fetch(
    `https://go-shop-backend.vercel.app/api/products/${params.productId}`
  );
  const product = await res.json();

  //console.log(product);

  return <SingleProduct key={product._id} product={product}></SingleProduct>;
};

export default ProductDetailPage;
