import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
            
        </div>
    );
};

export default layout;