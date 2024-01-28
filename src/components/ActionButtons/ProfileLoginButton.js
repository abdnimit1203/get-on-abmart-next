import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const ProfileLoginButton = () => {
  return (
    <div className=" menu menu-horizontal">

      <li>
        <details>
          <summary className=" bg-primary rounded-full text-neutral font-semibold hover:bg-primary"><FaRegUser className="text-3xl mr-1 inline " />
      <span className="hidden md:block">Login/ Account</span></summary>
          <ul className="p-2 z-10 text-neutral font-semibold">
            <li className="p-6 ">Hi, User Name</li>
            <Link href={'dashboard'}>
            <hr />
            <li className="p-6 hover:font-bold ">Dashboard</li>
            </Link>
          </ul>
        </details>
      </li>
    </div>
    
  );
};

export default ProfileLoginButton;
