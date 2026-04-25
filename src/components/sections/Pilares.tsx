"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pilares = [
  {
    titulo: "Acompañamiento",
    descripcion: "Hojas que crecen juntas, sosteniéndose en el proceso.",
    imagen: "/icons/acompanamiento.png",
    posicion: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", // Arriba
    delay: 0.1
  },
  {
    titulo: "Conciencia",
    descripcion: "Una mirada que ilumina: presencia, claridad y despertar.",
    imagen: "/icons/conciencia.png",
    posicion: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-left", // Derecha
    delay: 0.2
  },
  {
    titulo: "Transformación",
    descripcion: "Del capullo a la flor: un proceso de cambio y evolución natural.",
    imagen: "/icons/transformacion.png",
    posicion: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", // Abajo
    delay: 0.3
  },
  {
    titulo: "Equilibrio",
    descripcion: "Pilares que se ordenan y encuentran su centro en armonía.",
    imagen: "/icons/equilibrio.png",
    posicion: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-right", // Izquierda
    delay: 0.4
  }
];

export default function Pilares() {
  return (
    <section className="py-32 bg-brand-linen overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Contenedor del Círculo Principal */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-brand-terracotta/10 rounded-full flex items-center justify-center">
          
          {/* Centro: El nombre de la sección */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="z-20 text-center bg-brand-linen px-8 py-4"
          >
            <h2 className="font-playfair text-4xl md:text-6xl text-brand-terracotta tracking-tighter uppercase">
              Pilares
            </h2>
            <div className="w-12 h-0.5 bg-brand-olive mx-auto mt-2"></div>
          </motion.div>

          {/* Los Pilares orbitando */}
          {pilares.map((pilar, index) => (
            <motion.div
              key={pilar.titulo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: pilar.delay, duration: 1 }}
              className={`absolute ${pilar.posicion} flex flex-col items-center w-48 md:w-64`}
            >
              {/* Icono Circular */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 md:w-28 md:h-28 bg-brand-linen border border-brand-sand rounded-full p-4 shadow-sm mb-4 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={pilar.imagen} 
                    alt={pilar.titulo} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </motion.div>

              {/* Texto alrededor del icono */}
              <div className="px-2">
                <h3 className="font-playfair text-brand-terracotta text-lg md:text-xl font-bold uppercase tracking-widest mb-2">
                  {pilar.titulo}
                </h3>
                <p className="text-brand-olive/70 text-[10px] md:text-xs leading-relaxed font-inter max-w-[150px] mx-auto uppercase tracking-tighter">
                  {pilar.descripcion}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Círculo decorativo girando muy lento de fondo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-brand-olive/20 rounded-full"
          />
        </div>

      </div>
    </section>
  );
}