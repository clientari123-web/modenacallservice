import Hero from "@/app/components/hero";
import Pricelist from "@/app/components/pricelist";
import Form from "@/app/components/form";
import Testi from "@/app/components/testi";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Gallery from "@/app/components/galeri";

export default function Home() {
  return (
    <main className="w-full bg-white pt-28">
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-30">
        <Link
          href="https://wa.me/628132022495?"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.893-11.893 11.893-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.653zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </Link>
      </div>

      <Hero />

      <div id="tentang"></div>

      <section className="w-full p-6 md:p-16 bg-base-200">
        <h1 className="text-center pb-8 text-2xl md:text-3xl font-extrabold">
          Apa Itu Modena Call Service?
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start max-w-6xl mx-auto">
          {/* TEKS */}
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              Modena Call Service
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-base-content/80">
              Modena Call Service adalah layanan resmi untuk
              <strong>
                {" "}
                perbaikan, perawatan, dan penggantian suku cadang
              </strong>
              peralatan dapur Modena, khususnya kompor gas, yang dilakukan
              langsung di rumah pelanggan.
              <br />
              <br />
              Didukung oleh{" "}
              <strong>teknisi berpengalaman dan bersertifikat</strong>, kami
              berkomitmen memberikan pelayanan cepat, aman, dan bergaransi.
              Dengan sistem pemesanan yang mudah, Anda tidak perlu repot membawa
              peralatan ke service center — kami yang datang ke rumah Anda.
            </p>
          </div>

          {/* GAMBAR */}
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <Image
              width={600}
              height={400}
              alt="Teknisi Home Service Modena"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1629157319200-afcddf84000f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlcnZpY2UlMjBzdG92ZXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </div>
      </section>

      <Pricelist />
      <Gallery />

      <div className="w-full bg-black p-20 justify-center grid">
        <h1 className="text-center pb-10 text-3xl font-bold mb-4 text-white">
          Pemesanan Home Service Modena
        </h1>
        <Form />
      </div>

      <Testi />
      <Footer />
    </main>
  );
}
