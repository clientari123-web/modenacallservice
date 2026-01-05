import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10">
      <Link
        href="#pemesanan"
        className="p-3 w-full justify-center flex bg-white shadow-sm"
      >
        <h1 className="font-semibold text-black">
          Sentuh disini untuk order pemesanan !
        </h1>
      </Link>
      <div className="navbar md:px-30 max-md:px-10 bg-black text-white shadow-sm">
        <div className="navbar-start">
          <Image
            width={90}
            alt="logo"
            height={70}
            className="max-md:w-16"
            src="https://img.ws.mms.shopee.co.id/82360a0334246ea7e27ff6f6d086981d"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#tentang">Tentang</Link>
            </li>
            <li>
              <Link href="#harga">Layanan</Link>
            </li>
            <li>
              <Link href="#testimoni">Testimoni</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost text-white border-0 shadow-none lg:hidden drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <Link
            href="https://wa.me/628132022495"
            className="btn bg-white shadow-none text-neutral-600 rounded-full max-lg:hidden"
          >
            Kontak Kami
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
