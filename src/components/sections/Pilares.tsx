"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const pilares = [
  {
    titulo: "Conciencia",
    descripcion: "Promovemos la observación interna y el autoconocimiento como punto de partida.",
    icono: "/icons/PNG/Iconos-20.png",
  },
  {
    titulo: "Acompañamiento",
    descripcion: "Creamos espacios seguros donde las emociones pueden expresarse sin juicio.",
    icono: "/icons/PNG/Iconos-19.png",
  },
  {
    titulo: "Transformación",
    descripcion: "Diseñada para generar un cambio interno profundo, resiliente y sostenible.",
    icono: "/icons/PNG/Iconos-22.png",
  },
  {
    titulo: "Equilibrio",
    descripcion: "Buscamos armonizar lo interno con lo externo para avanzar con estabilidad.",
    icono: "/icons/PNG/Iconos-21.png",
  },
];

export default function Pilares() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-playfair text-4xl text-brand-terracotta mb-16"
        >
          Pilares de la marca
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-12">
          {pilares.map((pilar, index) => (
            <motion.div
              key={pilar.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={pilar.icono} 
                  alt={pilar.titulo} 
                  fill 
                  className="object-contain"
                />
              </div>
              <h3 className="font-playfair text-xl text-brand-terracotta mb-4 uppercase tracking-widest">
                {pilar.titulo}
              </h3>
              <p className="text-brand-olive/70 text-sm leading-relaxed font-inter">
                {pilar.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}