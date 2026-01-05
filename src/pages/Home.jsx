import React from 'react';
import { Helmet } from 'react-helmet-async';
import Stars from '../components/Stars';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Services from '../components/Services';
import Metrics from '../components/Metrics';
import Roadmap from '../components/roadmap/Roadmap';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>YildizTech | Yapay Zeka ve Gömülü Sistem Çözümleri</title>
        <meta name="description" content="YildizTech - Endüstriyel yapay zeka, gömülü sistemler ve IoT çözümleri ile geleceği inşa edin. Güvenilir teknoloji ortağınız." />
        <link rel="canonical" href="https://yildiztech.com/" />
      </Helmet>
      <Stars />
      <Hero />
      <Metrics />
      <Technologies />
      <Services />
      <Roadmap />
    </>
  );
};

export default Home;
