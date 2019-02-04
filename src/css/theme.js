export const theme = {
  colors: {
    blue: '#0099ae',
    green: '#36c096',
    navyblue: '#2c3b66',
    red: '#fd4d59',
    purple: '#6d5e92',

    lightgrey: '#f5f5f7',
    grey: '#313132',
    darkgrey: '#0a0a0a',

    white: '#fff',
    black: '#000',
    transparent: 'transparent',

    semiTransparentBlack: '#00000090',
  },
  font(family, weight, style) {
    return `font-family: ${family}, sans-serif;
        ${weight ? `font-weight: ${weight};` : ``}
        ${style ? `font-style: ${style};` : ``}`
  },
  breakpoints: [
    {
      keyword: 'landscape',
      value: 480,
    },
    {
      keyword: 'tablet',
      value: 768,
    },
    {
      keyword: 'desktop-small',
      value: 900,
    },
    {
      keyword: 'desktop-large',
      value: 1200,
    },
    {
      keyword: 'super-large',
      value: 1650,
    },
  ],
  media(breakpointName, type = 'min') {
    // eslint-disable-next-line
    return theme.breakpoints.map((breakpoint, i) => {
      if (breakpointName === breakpoint.keyword)
        return `@media (${type}-width: ${theme.breakpoints[i].value -
          (type === 'min' ? 0 : 1)}px)`
    })
  },
  timingFunctions: {
    scale: 'cubic-bezier(.6,.05,.01,.99)',
  },
}
