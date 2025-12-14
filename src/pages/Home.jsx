import React from 'react';
import Banner from '../component/Banner';
import PopularContests from '../component/PopularContest';
import WinnerAdverticement from '../component/WinnerAdverticement';
import Footer from '../component/Footer';
import ExtraSection from '../component/ExtraSection';
import ExtraSectionTwo from '../component/ExtraSectionTwo';



const Home = () => {
   
    return (
        <div >
            <Banner></Banner>
            <PopularContests></PopularContests>
            <WinnerAdverticement></WinnerAdverticement>
            <ExtraSection></ExtraSection>
            <ExtraSectionTwo></ExtraSectionTwo>
            
        </div>
    );
};

export default Home;