module.exports = {
  email: 'premstroke95@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Prem95',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/premstrk/',
    },
  ],

  navLinks: [
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },

    {
      name: 'Projects',
      url: '/#projects',
    },

    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#20c1b',
    mediumBlue: '#00008B'
  },

  srConfig: (delay = 40, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
