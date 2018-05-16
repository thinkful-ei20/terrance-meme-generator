
import React from 'react';
import MemeHeading from './meme-heading';
import MemeImg from './meme-img';
import MemeBtn from './meme-btn';

export default function MemeSection(props) {

  return (
    <section>
      <MemeHeading />
      <MemeImg />
      <MemeBtn /> 
    </section>
  );

}