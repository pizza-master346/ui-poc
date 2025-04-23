import { createTheme } from "@mui/material";
import { primaryColors } from "./colors";

export const lightTheme = createTheme({
  palette: {
    primary: { ...primaryColors.brand, main: primaryColors.brand[600] },
    error: { ...primaryColors.error },
    warning: { ...primaryColors.warning },
    success: { ...primaryColors.success },
    blue: { ...primaryColors.blue },
    grey: { ...primaryColors.greyLight },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    display2Xl: {
      fontSize: "72px", // 4.5rem
      lineHeight: "90px", // 5.62rem
      letterSpacing: "-2%",
    },
    displayXl: {
      fontSize: "60px", // 3.75rem
      lineHeight: "72px", // 4.5rem
      letterSpacing: "-2%",
    },
    displayLg: {
      fontSize: "48px", // 3rem
      lineHeight: "60px", // 3.75rem
      letterSpacing: "-2%",
    },
    displayMd: {
      fontSize: "36px", // 2.25rem
      lineHeight: "44px", // 2.75rem
      letterSpacing: "-2%",
    },
    displaySm: {
      fontSize: "30px", // 1.875rem
      lineHeight: "38px", // 2.375rem
    },
    displayXs: {
      fontSize: "24px", // 1.5rem
      lineHeight: "32px", // 2rem
    },

    textXl: {
      fontSize: "20px", // 1.25rem
      lineHeight: "30px", // 1.875rem
    },
    textLg: {
      fontSize: "18px", // 1.125rem
      lineHeight: "28px", // 1.75rem
    },
    textMd: {
      fontSize: "16px", // 1rem
      lineHeight: "24px", // 1.5rem
    },
    textSm: {
      fontSize: "14px", // 0.875rem
      lineHeight: "20px", // 1.25rem
    },
    textXs: {
      fontSize: "12px", // 0.75rem
      lineHeight: "18px", // 1.125rem
    },
  },

  shape: {
    borderRadius: 8,
  },
  components: {},
});
