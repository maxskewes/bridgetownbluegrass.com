import React from 'react';
import { Heading, Image, Box } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import PageTextBox from '../../components/PageTextBox';

const LineUp = () => {
  const PosterBox = ({ year }) => {
    return (
      <Box paddingY={['1rem', '2rem', null, '3.5rem']}>
        <Heading as='h1' size='4xl' marginBottom={['.25rem', '.5rem', '1rem']} textAlign={'center'}>
          {year}
        </Heading>
        <Image
          src={`/images/lineups/lineup${year}.png`}
          alt={`Line Up ${year}`}
        />
      </Box>
    );
  };

  return (
    <PageContainer heading={'Line-Up and Schedule 2023'}>
      <PageTextBox>
        The 2023 festival schedule is yet to be announced.
      </PageTextBox>
      <PageTextBox>
        Please check out our previous years' schedules to know what to expect.
      </PageTextBox>

      <PosterBox year={'2022'} />

      <Heading as='h3' size='lg' pt={['1rem', '2rem', null, '3.5rem']}>
     * * * * *
      </Heading>
      <Heading as='h3' size='lg'>
        2020 and 2021 Cancelled/Postponed
      </Heading>
      <Heading as='h3' size='lg' lineHeight={2}>
      * * * * *
      </Heading>

      <PosterBox year={'2019'} />
      <PosterBox year={'2018'} />
      <PosterBox year={'2017'} />
    </PageContainer>
  );
};

export default LineUp;
