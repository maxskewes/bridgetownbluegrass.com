import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MotionBirdFiddle from './MotionBirdFiddle';
import MotionBirdBanjo from './MotionBirdBanjo';
import MotionBirdGuitar from './MotionBirdGuitar';
import MotionBirdMando from './MotionBirdMando';
import MotionBirdBass from './MotionBirdBass';
import BanjoBird from './BanjoBird';
import FiddleSVG from './FiddleSVG';
import FiddlePNG from './FiddlePNG';
import BanjoSVG from './BanjoSVG';

const MotionBirdBox = () => {
  return (
    <Box sx={{ paddingTop:'-10rem'}} >
      {/* <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 1, 1, 1, 1, 0.5] }}
        transition={{ duration: 6 }}
      >
        <Box
          sx={{
            maxWidth: '100vw',
            minHeight: '50px',
            maxHeight: '100px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        > */}
        <Box sx={{ width:'50vw'}}>
        <Flex width={'100%'} flexDirection={'row'} justifyContent={'space-between'}>


         
          {/* <MotionBirdBanjo /> */}
      <FiddleSVG />
      <BanjoSVG />
      {/* <NewFiddle /> */}
          {/* <MotionBirdGuitar />
          <MotionBirdMando />
          <MotionBirdBass /> */}
        </Flex>
        </Box>
      {/* </motion.div> */}
    </Box>
  );
};

export default MotionBirdBox;
