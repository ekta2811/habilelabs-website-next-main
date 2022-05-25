function pxToRem(value) {
  return `${value / 16}rem`
}
function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media screen and (max-width: 480px) and (min-width: 50px)": {
      fontSize: pxToRem(sm),
    },
    "@media screen and (max-width: 768px) and (min-width: 480px)": {
      fontSize: pxToRem(md),
    },
    "@media screen and (max-width: 1200px) and (min-width: 769px)": {
      fontSize: pxToRem(lg),
    },
  }
}
function responsivelineHeight({ sm, md, lg }) {
  return {
    "@media (max-width: 480px) and (min-width: 50px)": {
      lineHeight: pxToRem(sm),
    },
    "@media (max-width: 768px) and (min-width: 480px)": {
      lineHeight: pxToRem(md),
    },
    "@media (max-width: 1200px) and (min-width: 768px)": {
      lineHeight: pxToRem(lg),
    },
  }
}


const typography = {
  fontFamily: "'Montserrat', sans-serif",
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    lineHeight: pxToRem(67),
    fontSize: pxToRem(55),
    ...responsivelineHeight({ sm: 34, md: 50, lg: 67 }),
    ...responsiveFontSizes({ sm: 25, md: 35, lg: 55 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: pxToRem(37),
    fontSize: pxToRem(30),
    ...responsivelineHeight({ sm: 19, md: 21, lg: 37 }),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 30 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: pxToRem(67),
    fontSize: pxToRem(55),
    ...responsivelineHeight({ sm: 30, md: 50, lg: 67 }),
    ...responsiveFontSizes({ sm: 25, md: 35, lg: 55 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: "37px",
    fontSize: pxToRem(27),
    ...responsiveFontSizes({ sm: 18, md: 21, lg: 24 }),
    ...responsivelineHeight({ sm: 24, md: 31, lg: 37 }),
  },
  h5: {
    fontWeight: 450,
    lineHeight: pxToRem(22),
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 16, md: 17, lg: 18 }),
    ...responsivelineHeight({ sm: 19, md: 20, lg: 22 }),
  },
  h6: {
    fontWeight: 400,
    lineHeight: pxToRem(37),
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
    ...responsivelineHeight({ sm: 28, md: 33, lg: 37 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: pxToRem(19),
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 16 }),
    ...responsivelineHeight({ sm: 15, md: 17, lg: 19 }),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: pxToRem(19),
    fontSize: pxToRem(16),
    letterSpacing: 0.48,
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 16 }),
    ...responsivelineHeight({ sm: 18, md: 18, lg: 19 }),
  },
  body1: {
    fontWeight: 300,
    lineHeight: pxToRem(19),
    fontSize: pxToRem(16),
    letterSpacing: "0.48px",
    ...responsiveFontSizes({ sm: 13, md: 15, lg: 16 }),
    ...responsivelineHeight({ sm: 18, md: 18, lg: 19 }),
  },
  body2: {
    lineHeight: pxToRem(18),
    fontSize: pxToRem(14),
    letterSpacing: "0.64px",
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 }),
    ...responsivelineHeight({ sm: 15, md: 17, lg: 19 }),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
    textTransform: "capitalize",
  },
}
export default typography
