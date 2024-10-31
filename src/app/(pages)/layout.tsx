import { SideBar } from "@/components";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hack My Mind",
  description: "Aplicacion con Inteligencia Artificial para el Desarrollo Empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex h-screen">
      <SideBar /> {/* Sidebar en la parte izquierda */}
      <main className="flex-1 overflow-auto">{children}</main> {/* Contenido principal */}
    </body>
  </html>
  );
}