"use client";

import React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      name: "Portofolio",
      owner: "Ahmad Habibi Arouf",
      description: "Website Portofolio",
      image: "/bie.png",
      link: "https://abieport.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Aisyah nirmala",
      description: "Website Portofolio",
      image: "/mal.png",
      link: "https://portofolio-nirmala.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Arman tri fajri",
      description: "Website Portofolio",
      image: "/jri.png",
      link: "https://portofolio-pink-three.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Alfat Ghifary",
      description: "Website Portofolio",
      image: "/pat.png",
      link: "https://portofolio-sederhana.netlify.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Adrian Adiputra",
      description: "Website Portofolio",
      image: "/dri.png",
      link: "https://myportfolioadrian.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYyFV6wNi_zWTondsiX3UJYQeOSHW9RFAG3bmGuK-qL-K8b9krHPSqHuio_aem_VnfAA6RkZ_pgXIv40FjUHQ",
    },
    {
      name: "Portofolio",
      owner: "Garuda putra ",
      description: "Website Portofolio",
      image: "/gar.png",
      link: "https://portfolio-garuda-putera-eko.vercel.app/",
    },
    {
      name: "Portofolio",
      owner: "Sami Athari Zahid",
      description: "Website Portofolio",
      image: "/sam.png",
      link: "https://portofolio-psi-umber.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAablKjeuhK6cCeawC1zWN1FPLA05cgwcSB4VoMIefGqLC70K1RP6In3lqDA_aem_mlz0SDu2TU1Dv1vn9Egj8g", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Antonius I Wayan",
      description: "Website Portofolio",
      image: "/an.png",
      link: "https://portofolio-eight-snowy.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Rezezi Axcel",
      description: "Website Portofolio",
      image: "/sel.png",
      link: "hhttps://portofolioaxcel.vercel.app/",// Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Ahmad Dhani",
      description: "Website Portofolio",
      image: "/dan.png",
      link: "https://protofolio-web-w8f3.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaaKmzDGYAQ9DCeczSiXG2-kVEaiGsdQxjLiZKGv4gmuTMU3ZTPV3tWEtf8_aem_UxERXumydGYI3dVX-gl_2Q",// Link ke Vercel
    },
  ];

  // Kelas 10 Projects with names only (no images)
  const kelas10Projects = [
    {
      name: "Portofolio",
      owner: "Huga",
      description: "Website Portofolio",
      image: "", // No image for Kelas 10
      link: "", // Link can be added later
    },
    {
      name: "Portofolio",
      owner: "Habibi",
      description: "Website Portofolio",
      image: "", // No image for Kelas 10
      link: "", // Link can be added later
    },
    {
      name: "Portofolio",
      owner: "Fathur",
      description: "Website Portofolio",
      image: "", // No image for Kelas 10
      link: "", // Link can be added later
    },
    {
      name: "Portofolio",
      owner: "Magfi",
      description: "Website Portofolio",
      image: "", // No image for Kelas 10
      link: "", // Link can be added later
    },
  ];

  const kelas11Projects = projectData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 space-y-16">
        <h1 className="text-5xl font-extrabold text-center text-blue-400">
          Proyek Siswa
        </h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Berikut adalah beberapa hasil proyek luar biasa yang telah dikerjakan oleh siswa kami. Klik tombol Lihat Proyek untuk melihat hasilnya langsung di Vercel!
        </p>

        {/* Kelas 10 Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">Kelas 10</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {kelas10Projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-2">{project.name}</h2>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-400">Pemilik: {project.owner}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                  >
                    Lihat Proyek
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator for Kelas 11 */}
        <div className="my-8 text-center">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Kelas 11</h2>
          <div className="border-t-4 border-blue-400 mx-auto w-1/2 mb-8"></div> {/* Divider line */}
        </div>

        {/* Kelas 11 Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {kelas11Projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">{project.name}</h2>
                <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400">Pemilik: {project.owner}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                  Lihat Proyek
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;