import { heroui } from "@heroui/theme";

export default heroui({
  defaultTheme: "dark", // puedes dejarlo dark por default si quieres luxe
  themes: {
    light: {
      colors: {
        // Ivory Editorial (light)
        background: "#FAF7F2",
        foreground: "#181A1F",
        divider: "rgba(24,26,31,0.10)",

        content1: "#FFFFFF",
        content2: "#F3EEE6",
        content3: "#EFE8DE",
        content4: "#E8E1D6",

        // Brand (Flamingo Rose)
        primary: {
          50: "#FFE8F1",
          100: "#FFCFE0",
          200: "#FF9FC2",
          300: "#FF6FA4",
          400: "#F05490",
          500: "#E84C8B",
          600: "#C63A73",
          700: "#9C2B59",
          800: "#6F1E3F",
          900: "#3E1023",
          DEFAULT: "#E84C8B",
          foreground: "#FFFFFF",
        },

        // Optional: foco
        focus: "#E84C8B",
      },
    },

    dark: {
      colors: {
        // Midnight Luxe (dark)
        background: "#0B0F14",
        foreground: "#F4F1EC",
        divider: "rgba(244,241,236,0.10)",

        content1: "#111824",
        content2: "#141E2B",
        content3: "#172233",
        content4: "#1B2940",

        primary: {
          50: "#FFE8F1",
          100: "#FFCFE0",
          200: "#FF9FC2",
          300: "#FF6FA4",
          400: "#FF5AA3",
          500: "#FF5AA3",
          600: "#E84C8B",
          700: "#C63A73",
          800: "#9C2B59",
          900: "#6F1E3F",
          DEFAULT: "#FF5AA3",
          foreground: "#0B0F14",
        },

        focus: "#FF5AA3",
      },
    },
  },
});