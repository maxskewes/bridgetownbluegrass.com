import { extendTheme, theme as base } from '@chakra-ui/react';
import { Della_Respira } from 'next/font/google';

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});


const theme = extendTheme({

  fonts: {
    heading: 'Della Respira',
    text: 'Della Respira',
    link: 'Della Respira',
  },
  components: {
    Button: {
      variants: {
        outlined: {
          height: '48px',
          width: '196px',
          background: '#FFFFFF',
          border: '1px solid #C4C4C4',
          borderRadius: '4px',
          textTransform: 'uppercase',
        },
        solid: {
          height: '48px',
          width: '196px',
          backgroundColor: '#FF914D',
          borderRadius: '4px',
          textTransform: 'uppercase',
          justifyItem: 'flex-end',
        },
      },
    },
    // Typography
    Heading: {
      font: 'Della Respira',
      variants: {
        h1: {
          fontSize: '26px',
          fontWeight: '700',
          color: '#29292A',
          lineHeight: '110%',
          textTransform: 'uppercase',
          margin: '8px 0'
        },
        h2: {
          fontSize: '18px',
          fontWeight: '700',
          color: '#29292A',
          lineHeight: '110%',
          textTransform: 'uppercase',
          margin: '8px 0',
        },
      },
    },
    Text: {
      variants: {
        labelBlack: {
          fontSize: '16px',
          fontWeight: '400',
          color: '#29292A',
          lineHeight: '110%',
          margin: '8px 0',
        },
        labelGray: {
          fontSize: '16px',
          fontWeight: '400',
          color: '#989898',
          lineHeight: '110%',
          margin: '8px 0',
        },
        labelBold: {
          fontSize: '16px',
          fontWeight: '700',
          color: '#29292A',
          lineHeight: '110%',
          margin: '8px 0',
        },
      },
    },
  },
  colors: {
    black: '#333333',
    blacker: '#29292A',
    gray: '#C4C4C4',
    gray_2: '#989898',
    navy_light: '#2542BB',
  },
});

export default theme;
