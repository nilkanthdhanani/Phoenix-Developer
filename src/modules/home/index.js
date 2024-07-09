import React from 'react'
import HeroBanner from './heroBanner';
import Design from './design';
import Lady from './lady';
import Digital from './digital';
import WhatWeDo from './whatWeDo';
import Studio from './studio';
import Form from './form';

export default function Home() {
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