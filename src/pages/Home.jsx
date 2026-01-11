import React from 'react';
import Banner from '../component/Banner';
import PopularContests from '../component/PopularContest';
import Services from '../component/Services';
import WinnerAdverticement from '../component/WinnerAdverticement';
import Testimonials from '../component/Testimonials';
import Blogs from '../component/Blogs';
import Footer from '../component/Footer';
import ExtraSection from '../component/ExtraSection';
import ExtraSectionTwo from '../component/ExtraSectionTwo';

import FAQ from '../component/FAQ';



const Home = () => {

    return (
        <div >
            <Banner></Banner>
            <PopularContests></PopularContests>
            <Services></Services>
            <WinnerAdverticement></WinnerAdverticement>
            <Testimonials></Testimonials>
            <ExtraSection></ExtraSection>
            <ExtraSectionTwo></ExtraSectionTwo>
            <Blogs></Blogs>
            
            <FAQ></FAQ>

        </div>
    );
};

export default Home;