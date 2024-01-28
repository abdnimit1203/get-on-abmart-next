/* eslint-disable @next/next/no-img-element */

import Image from "next/image";



const loading = () => {
    return (
        <div className="flex min-h-screen  justify-center items-center">
           <Image src={"https://i.ibb.co/XLcjg8y/loader.png"} alt="loader"width={200} height={200} className="animate-spin"/>
        </div>
    );
};

export default loading;
