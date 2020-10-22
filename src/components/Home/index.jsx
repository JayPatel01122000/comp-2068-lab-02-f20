import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import Styles from './styles';
// You need to import your shared header...

const Home = () => {
  return (
    <>
      <Header title = "This is a Home Page"/>
       <Styles.Button>
         <Link to="../About">About</Link>
       </Styles.Button>
    </>
  );
}
 
export default Home;