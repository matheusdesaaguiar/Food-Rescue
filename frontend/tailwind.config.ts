import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aqui definimos a nossa paleta de cores customizada
      colors: {
        'background': 'rgb(239, 227, 194)', // Nosso bege/creme
        'text-dark': 'rgb(18, 53, 36)',      // Nosso verde escuro para textos
        'primary': 'rgb(62, 123, 39)',       // Verde principal para botões e destaques
        'accent': 'rgb(133, 169, 71)',      // Verde mais claro para acentos visuais
      },
      fontFamily: {
        // Vamos usar uma fonte mais moderna. Poppins é uma ótima escolha.
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;