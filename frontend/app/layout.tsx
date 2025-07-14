import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Pesos da fonte Poppins
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: "Titulo | Resgate de Alimentos",
  description: "Conectando doadores a quem precisa, combatendo o desperdício de alimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}