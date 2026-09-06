import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Manrope } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({ variable: "--font-atkinson", subsets: ["latin"], weight: ["400", "700"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pulso-utopia.utopiadesenvolviment.chatgpt.site"),
  applicationName: "Pulso Utopia",
  title: "Pulso Utopia — Aplicativo de lembretes, medicamentos e organização da rotina",
  description: "Organize medicamentos, lembretes, agenda, tarefas e documentos em um só aplicativo. Pulso Utopia: mais tranquilidade para você, sua família e cuidadores. Teste grátis por 14 dias.",
  keywords: ["aplicativo de lembrete de remédio","organizar medicamentos","agenda de medicamentos","aplicativo para cuidadores","rotina de idosos","controle de medicamentos","lembrete de medicamentos","organização familiar","Pulso Utopia"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/pulso-icon.png", apple: "/pulso-icon.png" },
};

export const viewport = { themeColor: "#4b285d", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${atkinson.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
