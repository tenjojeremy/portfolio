module.exports = {
  fonts: ['montserrat', 'roboto'],
  variables: {
    primary: 'Montserrat',
    secondary: 'Roboto',
  },
  types: `
  .typography-title {
    font-family:  var(--font-primary);
    font-weight: bolder;
    text-shadow: rgba(181, 255, 252, 0.19) 0px 0px 9px;
    font-size: 40px;
  }
  @media (min-width: 500px) {
  .typography-title {
    font-size: 66px;
    }
  }
  .typography-subtitle {
    font-family:  var(--font-primary);
    font-size: 20px;
    font-weight: bold;
  }
  .typography-body2 {
    font-family:  var(--font-primary);
    letter-spacing: 2px;
    font-size: 16px;
  }
  @media (min-width: 500px) {
  .typography-body2 {
    font-size: 18px;
      }
    }
  .typography-h4 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    letter-spacing: 0.25px;
  }
  
  .typography-h5 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  
  .typography-h6 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.15px;
  }
  
  .typography-body1 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.5px;
  }  

  
  .typography-subtitle1 {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
  }
  
  .typography-subtitle2 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .typography-button {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .typography-caption {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
  }
  .typography-navbar {
    font-family:  var(--font-primary);
    font-size: 10px;
    font-weight: bold;
  }
  .typography-overline {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }`,
  resets: `
  h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
p{margin:0}
  `,
}
