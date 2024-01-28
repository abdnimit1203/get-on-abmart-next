import Image from "next/image";
import Link from "next/link";

const ProductCards = ({product}) => {

  return (
    <div className="card  bg-base-100 shadow-xl min-w-fit hover:scale-105 hover:shadow-blue-400 transition duration-300 cursor-pointer">
     
      <div className="card-body items-center text-center text-sm">
        
      <figure className="h-full ">
    <Image src={product?.images[0]} alt="product image" className="rounded-xl w-full h-auto" width={100} height={100} />
  </figure>
        <h2 className="font-bold">{product.title}</h2>
        <h2 className="">username : {product.username}</h2>
        <h2 className="">Email: {product.email}</h2>
        <p>{product.phone}</p>
        <div className="card-actions">
            <Link href={`/products/${product.id}`}>
            
          <button className="btn btn-primary">Buy Now</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
