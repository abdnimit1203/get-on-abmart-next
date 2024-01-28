import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-[url(https://i.ibb.co/FsgF6rQ/Copy-of-TL.png)] text-base-100 ">
      <nav>
        <h6 className="footer-title">About the Store</h6>
        <a className="link link-hover">Got questions? call us</a>
        <a className="link link-hover text-2xl font-bold text-primary pb-2">+880 217 6160 9974</a>
        <a className="link link-hover">House No: 123 Road No: 21, Sector:11, 1230 </a>
        <a className="link link-hover">customer.support@emali.com</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter Sign Up</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-base-100 leading-relaxed pb-2">Join 10000+ subscribers and get new discount coupon on every Staturday. Updates information on Sales and Offers.</span>
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="Your email address.."
              className="input input-bordered join-item text-neutral"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
      </div>
      <div className="p-3 bg-slate-900 text-base-100 text-center">
        <p> &copy; <span className="text-primary">GetOn - ABMart</span> all rights reserved. Made by - <Link href={"https://github.com/abdnimit1203"} className="text-sm font-semibold text-primary" target="_blank">ABD NIMIT</Link></p>
      </div>
      
    </footer>
  );
};

export default Footer;
