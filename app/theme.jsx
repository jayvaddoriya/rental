"use client";

import { ActionIcon, Button, TextInput, createTheme, rem } from "@mantine/core";
import classes from "./default.module.css";

export const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(28),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  components: {
    TextInput: TextInput.extend({
      classNames: {
        root: classes.input_root,
        wrapper: classes.input_wrapper,
        input: classes.input,
      },
    }),
    ActionIcon: ActionIcon.extend({
      classNames: {
        root: classes.action_button_root,
        icon: classes.icon,
      },
    }),
    Button: Button.extend({
      classNames: {
        root: classes.button_root,
      },
    }),
  },
});
