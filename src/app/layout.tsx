import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

// Configuración de la fuente de Títulos
const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/Títulos (Playfair Display)/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Títulos (Playfair Display)/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
});

// Configuración de la fuente de Cuerpo
const inter = localFont({
  src: "../../public/fonts/Cuerpo de texto (Inter)/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-inter`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}