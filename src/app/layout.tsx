import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HypeDeveloper",
  description:
    "Este é o site pessoal de LucasHypee, onde você encontrará diversas opiniões e reflexões sobre programação, tecnologia e outros assuntos relacionados. Este é um espaço para compartilhar minhas experiências e conhecimentos, e estimular discussões e trocas de ideias com outros entusiastas da área. Fique à vontade para explorar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
