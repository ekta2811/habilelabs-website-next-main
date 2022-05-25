// ----------------------------------------------------------------------

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        h1: {
          padding: theme.spacing(2, 0, 0, 6),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0, 1.87, 0, 0),
          },
        },
        h3: {
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(9, 0, 0, 0),
          },
        },
        subtitle1: {
          padding: theme.spacing(1.8, 0, 6.25, 0),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1, 1.8, 6.25, 1.8),
          },
        },
        subtitle2: {
          padding: theme.spacing(6, 0, 0, 6),
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(4.25, 0, 0, 0),
          },
        },
      },
    },
  }
}
