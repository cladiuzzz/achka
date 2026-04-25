"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-linen pt-20">
      {/* Pattern de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image src="/patterns/patterns-01.jpg" alt="" fill className="object-cover" priority />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-olive uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Acompañamiento Consciente
          </span>
          <h1 className="font-playfair text-6xl md:text-[5.5rem] text-brand-terracotta leading-[0.95] tracking-tighter">
            Tu proceso <br />
            <span className="italic font-normal">necesita espacio.</span>
          </h1>
          <p className="text-brand-olive/80 mt-10 text-lg max-w-md leading-relaxed font-inter">
            Un espacio sagrado para guiar procesos de transformación personal desde un enfoque integral de mente, cuerpo y energía.
          </p>
          <div className="mt-12 flex items-center gap-8">
            <button className="bg-brand-terracotta text-brand-linen px-10 py-5 rounded-full hover:bg-brand-olive transition-all duration-700 uppercase text-[10px] tracking-[0.2em] font-bold shadow-xl hover:-translate-y-1">
              Agendar Sesión
            </button>
            <Link href="/servicios" className="text-brand-terracotta uppercase text-[10px] tracking-[0.2em] font-bold border-b border-brand-terracotta/30 hover:border-brand-terracotta transition-all">
              Ver Servicios
            </Link>
          </div>
        </motion.div>

        {/* Imagen Sensorial con máscara de media luna */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[650px] w-full"
        >
          <div className="absolute inset-0 rounded-t-full overflow-hidden shadow-2xl">
            <Image 
              src="/images/hero-sensorial.jpg" // Asegúrate de que exista este archivo
              alt="Experiencia Achka"
              fill
              className="object-cover transition-transform duration-[10s] hover:scale-110"
            />
          </div>
          {/* Isotipo decorativo */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-30">
             <Image src="/logos/Isotipo/PNG/Logos_Mesa de trabajo 1 copia 35.png" alt="" fill className="object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}