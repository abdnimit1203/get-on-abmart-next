import Image from "next/image";
import Link from "next/link";

const ProductCards = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-40  md:w-56 xl:w-64 2xl:w-72 hover:scale-105 hover:shadow-blue-400 transition duration-300 cursor-pointer">
      <div className="card-body items-center text-center sm:text-sm text-xs">
        <figure className="h-full ">
          <Image
            src={product?.images[0]}
            alt="product image"
            className="rounded-xl w-full h-auto"
            width={100}
            height={100}
          />
        </figure>
        <h2 className="font-bold">{product.title}</h2>

        <h2 className="">
          {" "}
          <p className="border-2 w-fit bg-green-600 text-white font-semibold text-xs p-1 px-2 rounded-xl mb-2">
            {" "}
            {product?.category}
          </p>
        </h2>

        <p className="font-semibold">Price: ${product?.price} </p>
        <div className="card-actions">
          <Link href={`/products/${product.id}`}>
            <button className="btn btn-primary btn-sm ">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
