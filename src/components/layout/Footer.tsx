import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-terracotta text-brand-linen pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-brand-sand/20 pb-12 mb-8">
        
        {/* Columna 1: Marca */}
        <div>
          {/* Usa el logotipo en versión clara si lo tienes, o el monograma */}
          <h2 className="font-playfair text-3xl mb-4">achka</h2>
          <p className="font-inter text-sm text-brand-sand/80 max-w-xs">
            Acompañamiento profesional y consciente en momentos de transición.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="flex flex-col gap-3 font-inter text-sm">
          <h3 className="font-bold tracking-widest uppercase text-xs mb-2 text-brand-sand">Explorar</h3>
          <Link href="/" className="hover:text-brand-sage transition-colors">Inicio</Link>
          <Link href="/nosotros" className="hover:text-brand-sage transition-colors">Quiénes Somos</Link>
          <Link href="/servicios" className="hover:text-brand-sage transition-colors">Servicios</Link>
          <Link href="/contacto" className="hover:text-brand-sage transition-colors">Contacto</Link>
        </div>

        {/* Columna 3: Contacto */}
        <div className="flex flex-col gap-3 font-inter text-sm">
          <h3 className="font-bold tracking-widest uppercase text-xs mb-2 text-brand-sand">Contacto</h3>
          <p className="text-brand-sand/80">hola@achkaholistica.com</p>
          <p className="text-brand-sand/80">WA (+51) 933 818 876</p>
          <div className="flex gap-4 mt-4">
            {/* Aquí irían los iconos de redes sociales */}
            <span className="w-8 h-8 rounded-full border border-brand-sand flex items-center justify-center hover:bg-brand-sand hover:text-brand-terracotta cursor-pointer transition-colors">IG</span>
            <span className="w-8 h-8 rounded-full border border-brand-sand flex items-center justify-center hover:bg-brand-sand hover:text-brand-terracotta cursor-pointer transition-colors">FB</span>
          </div>
        </div>

      </div>
      
      <div className="text-center font-inter text-xs text-brand-sand/50">
        © {new Date().getFullYear()} Achka Holística. Todos los derechos reservados.
      </div>
    </footer>
  );
}