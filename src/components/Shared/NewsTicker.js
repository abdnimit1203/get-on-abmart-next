import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  return (
    <div className="bg-white py-3 px-3 rounded-full">
      <Marquee
      
      gradient={true}
      gradientColor="white"
      gradientWidth={20}
      >
        <p className="lg:text-base">
           On <span className="font-semibold">February 29th </span> we have a special sell from 6:00 PM to 11.59 PM. For mystery items check the sale page and grab it!!!   
        </p>
      </Marquee>
    </div>
  );
};

export default NewsTicker;
