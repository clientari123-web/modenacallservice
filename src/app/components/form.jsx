"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    layanan: "",
    catatan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pesan = `
 *Order Home Service Modena* :
 
👤 Nama: ${formData.nama}
🏠 Alamat: ${formData.alamat}
💆‍♀️ Layanan: ${formData.layanan}
📝 Catatan: ${formData.catatan}
    `;

    const nomorTujuan = "628132022495";
    const encodedPesan = encodeURIComponent(pesan);
    const url = `https://wa.me/${nomorTujuan}?text=${encodedPesan}`;

    window.open(url, "_blank");
  };

  return (
    <form
      id="pemesanan"
      onSubmit={handleSubmit}
      className="md:grid md:grid-cols-2 md:mx-5 gap-4"
    >
      {[
        ["nama", "Nama Lengkap"],
        ["alamat", "Alamat Lengkap"],
        ["layanan", "Layanan"],
        ["catatan", "Catatan"],
      ].map(([name, label]) => (
        <fieldset key={name} className="fieldset">
          <legend className="fieldset-legend text-white">{label}</legend>
          <input
            type="text"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className="input w-80"
            placeholder="Type here"
          />
        </fieldset>
      ))}

      <button
        type="submit"
        className="btn bg-white text-black border-0 shadow-none mt-4 w-36 col-span-2 justify-self-start"
      >
        Kirim
      </button>
    </form>
  );
};

export default Form;
