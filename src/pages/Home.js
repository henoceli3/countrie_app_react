import React from 'react';
import Naviagtion from '../components/Naviagtion';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Logo/>
           <Naviagtion/>
           <Countries/> 
        </div>
    );
};

export default Home;