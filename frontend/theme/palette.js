import { alpha } from "@mui/material/styles"

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
}
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
}

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
}

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
}

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
}

const palette = {
  grey: GREY,
  primary: {
    dark: "#020024",
    main: "#02174E",
    light: "#2EAEE9",
    contrastText: "#D6D6D6",
    contrastTextColor: "#D6D6D6CC",
    contrastTextLight: "#d6d6d680",
  },
  secondary: {
    dark: "#fff",
    main: "#061E62",
    light: "#37DCFF",
    contrastText: "#111",
    contrastTextLight: "#111111C9",
    tileTextColor: "#111111CC",
  },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  progressbar: {
    main: "#51C8FF",
  },
  borderColor: {
    dark: "#bdbdbd",
    main: "#D6D6D680",
  },
  backgroundColor: {
    default: "#02174E",
    main: "#2EAEE9",
  },
  textColor: {
    default: "#D6D6D6",
  },
  headingColor: {
    main: "#AEAEAE",
  },
  arrow: {
    main: "#37DCFF",
  },
  background: {
    default: "#fff",
    dialogBox: "#020024CC",
    borderColor: {
      dark: "#bdbdbd",
      main: "D6D6D680",
    },
  },
}

export default palette
