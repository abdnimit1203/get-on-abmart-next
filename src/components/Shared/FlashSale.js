
import Countdown from "../Functional/Countdown";

const FlashSale = () => {
 
  return (
   

<div className="hero rounded-2xl " style={{backgroundImage: 'url(https://i.ibb.co/3SLdKS4/Untitled-design.png)'}}>
  <div className="hero-overlay bg-opacity-0  rounded-2xl"></div>
  <div className="hero-content text-center text-base-100  py-10 ">
    <div className="max-w-md space-y-6">
    <h2 className="text-4xl font-bold [text-shadow:_0_2px_3px_rgb(0_0_0_/_60%)]">% Flash Sale %</h2>
      
      <p className="bg-primary text-neutral rounded-full font-semibold p-1 px-2 text-sm md:px-4 ">Discount up to 50% in kimited products</p>
      <Countdown/>
            <button className="button-1 duration-200 transition hover:scale-105">About the Offers</button>
    </div>
  </div>
</div>

      

  );
};

export default FlashSale;
