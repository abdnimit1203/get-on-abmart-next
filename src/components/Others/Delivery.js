import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";

const Delivery = () => {
    return (
        <div className="flex rounded-xl  bg-white  ">
            <div className="grid grid-cols-2 w-[50% flex-1 ">
                <div className="flex flex-col justify-center items-center  py-6 border-b-2 border-r-2">
                <TbTruckDelivery className="text-3xl mb-4 text-orange-400" />
                <h2 className="text-sm font-semibold uppercase">Fast delivery</h2>
                <p className="opacity-60">Across Bangladesh</p>
                </div>
                <div className="flex flex-col justify-center items-center  py-6 border-b-2 ">
                <TbTruckDelivery className="text-3xl mb-4 text-orange-400" />
                <h2 className="text-sm font-semibold uppercase">Safe Payment</h2>
                <p className="opacity-60">100% Secure Payment</p>
                </div>
                <div className="flex flex-col justify-center items-center border-r-2 py-6">
                <TbTruckDelivery className="text-3xl mb-4 text-orange-400" />
                <h2 className="text-sm font-semibold uppercase">Online discount</h2>
                <p className="opacity-60">On app purchase</p>
                </div>
                <div className="flex flex-col justify-center items-center  py-6">
                <TbTruckDelivery className="text-3xl mb-4 text-orange-400" />
                <h2 className="text-sm font-semibold uppercase">Help Center</h2>
                <p className="opacity-60">Dedicated 24/7 Support</p>
                </div>
            </div>
            <div className="flex-1 hidden md:block">
            <Image
          src="https://i.gifer.com/TwuB.gif"
          alt="delivery image gif"
          className=" object-contain w-full rounded-r-xl"
          width={200}
          height={200}
        />
            </div>
            
        </div>
    );
};

export default Delivery;