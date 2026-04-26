"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NosotrosPreview() {
  return (
    <section className="py-24 bg-brand-sand/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-terracotta mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-brand-olive/80 text-lg leading-relaxed font-inter mb-6">
              Somos un espacio de acompañamiento consciente donde guiamos procesos de 
              transformación personal desde un enfoque integral que une emoción, mente y energía.
            </p>
            <p className="text-brand-olive/80 text-lg leading-relaxed font-inter mb-10">
              Trabajamos a través de herramientas de coaching y prácticas holísticas para ofrecer 
              soporte, claridad y dirección en momentos de cambio.
            </p>
            
            <Link 
              href="/nosotros" 
              className="inline-block border-b border-brand-terracotta pb-1 text-brand-terracotta uppercase tracking-widest text-xs font-bold hover:text-brand-olive hover:border-brand-olive transition-colors"
            >
              Conocer más sobre Achka
            </Link>
          </motion.div>

          {/* Columna de Imagen y Frase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            
            <div className="relative h-[500px] w-full md:w-[80%] ml-auto rounded-t-full rounded-bl-full overflow-hidden shadow-2xl">
              <Image 
                src="/images/nosotros-preview.jpg" 
                alt="Conciencia y equilibrio"
                fill
                className="object-cover"
              />
            </div>

            {/* Tarjeta flotante con la frase de la pág 31 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="absolute bottom-10 left-0 bg-brand-linen p-8 shadow-xl max-w-[250px] border-l-4 border-brand-terracotta"
            >
              <h3 className="font-playfair text-xl text-brand-terracotta mb-2">TODO CAMBIA</h3>
              <p className="font-inter text-xs text-brand-olive leading-relaxed">
                "Incluso lo que incomoda hoy puede ser el inicio de algo nuevo en ti."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}