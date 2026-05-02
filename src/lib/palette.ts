/**
 * Paleta autoral Integração AJPDB
 * Bordeaux + Ouro Velho + Travertino
 * Identidade: Douglas Alexander Batista — abril/2026
 */

export const palette = {
  light: {
    bg:        "#f0e6d2", // travertino-100
    paper:     "#f8efd8", // travertino-50
    cream:     "#ead8a8", // travertino-200
    ink:       "#2e0a10", // burgundy-900
    inkSoft:   "#5a4528", // gold-900
    mist:      "#c8b896", // travertino-400
    mistSoft:  "#ddd0a8", // travertino-300
    gold:      "#b89968", // gold-500
    goldDark:  "#8b7349", // gold-700
    goldLight: "#d4b87a", // gold-300
    amber:     "#a08350", // gold-600
    emerald:   "#5a6b3e", // verde-oliva
    burgundy:  "#5e1a22", // burgundy-700 (PRINCIPAL)
    navy:      "#2e0a10", // alias para burgundy-900
    graphite:  "#3c2a18", // travertino-800
  },
  dark: {
    bg:        "#1a0d10",
    paper:     "#261418",
    cream:     "#2e0a10",
    ink:       "#e8d4a0",
    inkSoft:   "#b89968",
    mist:      "#3a1a20",
    mistSoft:  "#2a1318",
    gold:      "#c9a96b",
    goldDark:  "#a08350",
    goldLight: "#f0dfa8",
    amber:     "#c77b00",
    emerald:   "#6b7d4e",
    burgundy:  "#7a2030",
    navy:      "#5e1a22",
    graphite:  "#2c2018",
  },
};

export type ThemeColors = typeof palette.light;

export const groups = {
  op:  { label: "Operação",   accent: "#5e1a22" },
  ev:  { label: "Evolução",   accent: "#b89968" },
  int: { label: "Interativo", accent: "#a08350" },
  au:  { label: "Auditoria",  accent: "#3c2a18" },
};
