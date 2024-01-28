import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const layout = ({children}) => {
    return (
        <div >
            <Navbar/>
            <div className="px-[5%] min-h-screen">

            {children}
            </div>
            <Footer/>
            
        </div>
    );
};

export default layout;