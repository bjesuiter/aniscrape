import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetContainerQueries from "@twind/preset-container-queries";
import presetTypography from "@twind/preset-typography";
import * as colors from "twind/colors";

export default {
  ...defineConfig({
    presets: [
      presetAutoprefix(),
      presetTailwind() as Preset,
      presetContainerQueries(),
      presetTypography(),
    ],
    theme: {
      variants: {
        textColor: ["responsive", "hover", "focus", "visited", "target"],
      },
      extend: {
        colors: {
          primary: colors.pink,
          slate: colors.coolGray,
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
