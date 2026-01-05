import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* CTA AREA */}
      <div className="w-full flex justify-center items-center py-16 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 bg-black rounded-xl px-6 md:px-16 py-10 w-full max-w-4xl">
          <p className="text-white text-center md:text-left text-lg md:text-xl font-bold">
            Jangkauan Area : Surabaya, Jakarta dan Sekitarnya.
          </p>
          <Link
            href="https://wa.me/628132022495?"
            className="btn bg-white text-black font-bold border-0 shadow-none px-6 py-3 rounded-full text-sm md:text-base"
          >
            Ayo Sekarang!
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-10">
        <aside className="space-y-2">
          <p className="text-white font-semibold">
            © {new Date().getFullYear()} Modena Call Service
          </p>

          <p className="text-sm text-gray-400 text-center">
            Alamat: Jl. Mayjen Sungkono No.11 Dukuh Pakis, Kec. Dukuh Pakis,
            Surabaya Barat, Jawa Timur
          </p>

          <p className="text-sm text-gray-400">Indonesia</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
