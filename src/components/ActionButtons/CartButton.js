import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  return (
    <div className="indicator">
      <div className="drawer drawer-end">
        <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="cart-drawer" className="drawer-button ">
            <span className="indicator-item  bg-primary text-neutral indicator-end rounded-full text-sm p-1 font-semibold ">
              10+
            </span>
            <AiOutlineShoppingCart className="text-3xl mr-1" />
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="cart-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu w-80 min-h-full bg-base-200 text-base-content">
            <h2 className="bg-neutral text-white text-xl text-center rounded-xl py-3 font-semibold ">
              Your Cart{" "}
              <AiOutlineShoppingCart className="text-3xl mr-1 inline " />
            </h2>

            <div className=" flex-1 text-center items-center justify-center relative">
              <p className=" absolute top-[50%] left-[25%] font-semibold">
                Opps! your cart is empty!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
