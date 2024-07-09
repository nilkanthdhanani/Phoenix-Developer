import React, { useEffect } from 'react'
import HeroBanner from './heroBanner';
import Design from './design';
import Lady from './lady';
import Digital from './digital';
import WhatWeDo from './whatWeDo';
import Studio from './studio';
import Form from './form';
import Aos from 'aos';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: false,    // Animations should happen multiple times
    });
    return () => {
      Aos.refresh(); // Ensure animations refresh on component unmount
    };
  }, []);

  return (
    <div>
      <HeroBanner/>

      <Design/>

      <Lady/>

      <Digital/>

      <WhatWeDo/>

      <Studio/>

      <Form/>
    </div>
  )
}