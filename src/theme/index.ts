import { customColors } from "./colors";
import {
  createTheme as createMantineTheme,
  Text,
  TextInput,
} from "@mantine/core";

import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";
import datePickerClasses from "./styles/datePicker.module.css";
import textClasses from "./styles/text.module.css";
import textInputClasses from "./styles/textInput.module.css";
import { DatePicker } from "@mantine/dates";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

type ExtendedCustomFontSize =
  | "display2Xl"
  | "displayXl"
  | "displayLg"
  | "displayMd"
  | "displaySm"
  | "displayXs"
  | "textXl"
  | "textLg"
  | "textMd"
  | "textSm"
  | "textXs";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }

  interface MantineThemeSizesOverride {
    fontSizes: Record<ExtendedCustomFontSize, string>;
    lineHeights: Record<ExtendedCustomFontSize, string>;
  }

  interface TextProps {
    variant?: ExtendedCustomFontSize;
    fontWight?: "regular" | "medium" | "semibold" | "bold";
  }
}

export const mantineTheme = createMantineTheme({
  fontFamily: "Manrope, sans-serif",
  colors: {
    primary: [
      customColors.brand["25"],
      customColors.brand["50"],
      customColors.brand["100"],
      customColors.brand["200"],
      customColors.brand["300"],
      customColors.brand["400"],
      customColors.brand["500"],
      customColors.brand["600"],
      customColors.brand["700"],
      customColors.brand["800"],
      customColors.brand["900"],
      customColors.brand["950"],
    ],
  },
  primaryColor: "primary",
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
      styles: {
        input: {
          borderRadius: 8,
        },
      },
      classNames: {
        root: textInputClasses.root,
      },
    }),
    Text: Text.extend({
      classNames: {
        root: textClasses.root,
      },
    }),
    DatePicker: DatePicker.extend({
      classNames: {
        day: datePickerClasses.day,
      },
    }),
  },
});
