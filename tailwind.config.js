module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgGreen: '#EEF1E6',
      green: '#6CA100',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        'rgba209': 'rgba(209,209,209,0.38)',
        '2a2a2a': '#2a2a2a',
        100: '#E5E5E5',
        200: '#F1F1F1',
        300: '#F2F2F2',
        400: '#DFDFDF',
        500: '#8C8C8C',
        600: '#f4f4f4',
        700: '#1A191A',
        800: '#4C4C4C',
        999: '#999',
      },
      blue: {
        400: '#2036FF',
        500: '#B6E1FD',
        600: '#058CDF',
        700: '#0037ff',
      },
      yellow: '#ffe400',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
    },
    extend: {
      width: {
        rc_30: '30%',
        rc_47: '47%',
        rc8: '8px',
        rc11: '11px',
        rc12: '12px',
        rc18: '18px',
        rc28: '28px',
        rc30: '30px',
        rc32: '32px',
        rc50: '50px',
        rc51: '51px',
        rc97: '97px',
        rc213: '213px',
        rc273: '273px',
        rc275: '275px',
        rc282: '282px',
        rc284: '284px',
        rc384: '384px',
        rc242: '242px',
        rc300: '300px',
        rc342: '342px',
        rc377: '377px',
        rc450: '450px',
        rc484: '484px',
        rc525: '525px',
        rc515: '515px',
        rc517: '517px',
        rc521: '512px',
        rc600: '600px',
        rc646: '646px',
        rc691: '691px',
        rc729: '729px',
        rc750: '750px',
        rc864: '864px',
        rc1200: '1200px',
        rc1250: '1250px',
        rc1470: '1470px',
      },
      maxWidth: {
        rc800: '800px !important',
        rc1000: '1000px !important',
      },
      height: {
        rc_35: '35%',
        rc_110: '110%',
        rc1: '1px',
        rc8: '8px',
        rc14: '14px',
        rc16: '16px',
        rc18: '18px',
        rc22: '22px',
        rc26: '26px',
        rc30: '30px',
        rc38: '38px',
        rc49: '49px',
        rc50: '50px',
        rc51: '51px',
        rc57: '57px',
        rc70: '70px',
        rc77: '77px',
        rc80: '80px',
        rc97: '97px',
        rc111: '111px',
        rc135: '135px',
        rc148: '148px',
        rc200: '200px',
        rc212: '212px',
        rc222: '222px',
        rc254: '254px',
        rc268: '268px',
        rc272: '272px',
        rc300: '300px',
        rc479: '479px',
        rc480: '480px',
        rc500: '500px',
        rc793: '793px',
        rc1080: '1080px',
        18: '300px',
      },
      lineHeight: {
        rc1_2: '1.2',
        rc16: '16px',
        rc26: '26px',
        rc32: '32px',
        rc36: '36px',
        rc42: '42px',
        rc43: '43px',
        rc48: '48px',
        rc51: '51px',
        rc55: '55px',
        rc60: '60px',
        rc80: '80px',
        rc111: '111px',
      },
      fontSize: {
        rc12: '12px',
        rc14: '14px',
        rc16: '16px',
        rc17: '17px',
        rc18: '18px',
        rc20: '20px',
        rc22: '22px',
        rc24: '24px',
        rc26: '26px',
        rc28: '28px',
        rc35: '35px',
        rc36: '36px',
        rc40: '40px',
        rc45: '45px',
        rc48: '48px',
        rc50: '50px',
        rc66: '66px',
        rc86: '86px',
        '7vh': '7vh',
      },
      letterSpacing: {
        rc5: '.5px',
        rc7: '.7px',
      },
      padding: {
        rc_3: '3%',
        rc_7: '7%',
        rc_8: '8%',
        rc_9: '9%',
        rc_10: '10%',
        rc_15: '15%',
        rc4: '4px',
        rc5: '5px',
        rc14: '14px',
        rc15: '15px',
        rc20: '20px',
        rc24: '24px',
        rc25: '25px',
        rc30: '30px',
        rc35: '35px',
        rc39: '39px',
        rc40: '40px',
        rc41: '41px',
        rc43: '43px',
        rc44: '44px',
        rc57: '57px',
        rc50: '50px',
        rc58: '58px',
        rc60: '60px',
        rc67: '67px',
        rc84: '84px',
        rc87: '87px',
        rc90: '90px',
        rc92: '92px',
        rc110: '110px !important',
        rc132: '132px',
        rc152: '152px',
        rc354: '354px',
      },
      margin: {
        _rc7: '-7px',
        _rc15: '-15px',
        rc_2: '2%',
        rc_5: '5%',
        rc_7: '7%',
        rc_10: '10%',
        rc_11: '11%',
        rc_15: '15%',
        rc_19: '19%',
        rc_33: '33%',
        rc5: '5px',
        rc6: '6px',
        rc8: '8px',
        rc9: '9px',
        rc10: '10px',
        rc12: '12px',
        rc15: '15px',
        rc18: '18px',
        rc20: '20px',
        rc24: '24px',
        rc25: '25px',
        rc27: '27px',
        rc28: '28px',
        rc30: '30px',
        rc33: '33px',
        rc40: '40px',
        rc43: '43px',
        rc45: '45px',
        rc50: '50px',
        rc56: '56px',
        rc60: '60px',
        rc64: '64px',
        rc65: '65px',
        rc80: '80px',
        rc112: '112px',
        rc134: '134px',
      },
      textColor: {
        rc_568300: '#568300',
        rc_373737: '#373737',
        rc_333333: '#333333',
        rc_666666: '#666666',
        rc_6CA100: '#6CA100 !important',
        rc_058CDF: '#058CDF',
      },
      inset: {
        rc10: '10px',
        rc20: '20px',
        rc30: '30px',
        rc43: '43px',
        rc50: '50px',
        rc62: '62px',
        rc160: '160px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
