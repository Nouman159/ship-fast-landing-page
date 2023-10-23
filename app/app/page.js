import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesListicle from '@/components/FeaturesListicle';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <FeaturesListicle />
      <Footer />
    </>
  );
}