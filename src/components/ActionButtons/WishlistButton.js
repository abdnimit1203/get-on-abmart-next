import {FaHeart , FaRegHeart } from "react-icons/fa";

const WishlistButton = () => {
    return (
       
         <div className="indicator">
         <div className="drawer drawer-end">
           <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
           <div className="drawer-content">
             <label htmlFor="wishlist-drawer" className="drawer-button ">
               <span className="indicator-item  bg-primary text-neutral indicator-end rounded-full text-sm p-1 font-semibold ">
                 10+
               </span>
               <FaRegHeart className="text-3xl mr-1" />
             </label>
           </div>
           <div className="drawer-side z-10">
             <label
               htmlFor="wishlist-drawer"
               aria-label="close sidebar"
               className="drawer-overlay"
             ></label>
             <div className="menu w-80 min-h-full bg-base-200 text-base-content">
               <h2 className="bg-error text-white text-xl text-center rounded-xl py-3 font-semibold ">
                 Your wishlist{" "}
                 <FaRegHeart className="text-3xl mr-1 inline " />
               </h2>
   
               <div className=" flex-1 text-center items-center justify-center relative">
                 <p className=" absolute top-[50%] left-[25%] font-semibold">
                   Opps! your wishlist is empty!
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
    );
};

export default WishlistButton;