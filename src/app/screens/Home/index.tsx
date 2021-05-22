import React from 'react';
import {Text} from 'react-native';
import {Container} from '@components/Container';
import HeaderApp from '@components/HeaderApp';

const Home = () => {
  return (
    <>
      <HeaderApp />
      <Container preset={'fixed'} unsafe={true}>
        <Text>Home</Text>
      </Container>
    </>
  );
};
export default Home;
