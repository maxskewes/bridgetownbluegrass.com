import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const PageTextBox = ({ children }) => {
  return (
    <Center
      sx={{
        position: 'relative',
        marginBottom: 6,
      }}
    >
      <Box
        position={'relative'}
        maxWidth={['600px', null, null, '800px', '1000px']}
        p={1}
        rounded='md'
      >
        <Text
          fontSize={['sm', null, 'md', null, 'lg']}
          letterSpacing={[1, null, null, 1.5]}
          color={'white'}
          textAlign={'justify'}
        >
          <span>&emsp;&emsp;</span>
          {children}
        </Text>
      </Box>
    </Center>
  );
};

export default PageTextBox;
