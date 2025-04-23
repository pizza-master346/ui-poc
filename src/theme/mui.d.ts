declare module "@mui" {
  declare module "@mui/material/styles" {
    interface Palette {
      blue: Palette["primary"];
    }

    interface PaletteOptions {
      blue?: PaletteOptions["primary"];
    }

    interface PaletteColor {
      [25]?: string;
      [950]?: string;
    }

    interface Color {
      [25]?: string;
      [950]?: string;
    }

    interface TypographyVariants {
      fontWeightSemibold: number;

      textXl: React.CSSProperties;
      textLg: React.CSSProperties;
      textMd: React.CSSProperties;
      textSm: React.CSSProperties;
      textXs: React.CSSProperties;

      display2Xl: React.CSSProperties;
      displayXl: React.CSSProperties;
      displayLg: React.CSSProperties;
      displayMd: React.CSSProperties;
      displaySm: React.CSSProperties;
      displayXs: React.CSSProperties;
    }

    // allow configuration using `createTheme()`
    interface TypographyVariantsOptions {
      fontWeightSemibold?: Property.FontWeight;

      textXl?: React.CSSProperties;
      textLg?: React.CSSProperties;
      textMd?: React.CSSProperties;
      textSm?: React.CSSProperties;
      textXs?: React.CSSProperties;

      display2Xl?: React.CSSProperties;
      displayXl?: React.CSSProperties;
      displayLg?: React.CSSProperties;
      displayMd?: React.CSSProperties;
      displaySm?: React.CSSProperties;
      displayXs?: React.CSSProperties;
    }
  }

  // Update the Typography's variant prop options
  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      textXl: true;
      textLg: true;
      textMd: true;
      textSm: true;
      textXs: true;

      display2Xl: true;
      displayXl: true;
      displayLg: true;
      displayMd: true;
      displaySm: true;
      displayXs: true;

      // remove default variants

      h1: false;
      h2: false;
      h3: false;
      h4: false;
      h5: false;
      h6: false;

      body1: false;
      body2: false;

      subtitle1: false;
      subtitle2: false;

      button: false;
      caption: false;
      overline: false;
    }
  }
}
