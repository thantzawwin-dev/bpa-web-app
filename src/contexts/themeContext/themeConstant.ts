export type Props = {
  light: SubProps;
  dark: SubProps;
}

export type SubProps = {
  foreground: string;
  background: string;
}

export const THEME: Props = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}
