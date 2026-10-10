import { Archivo, JetBrains_Mono } from "next/font/google";

// Both are variable fonts, so in-between weights like 650 and 750 from the design work.
// Archivo's width axis isn't loaded: the design never uses font-stretch.
export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
