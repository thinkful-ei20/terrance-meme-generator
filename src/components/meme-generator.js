
import React from 'react';
import MemeSection from './meme-section';

export default class MemeGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgUrl,
      altText
    };
  };

  render() {
    return (
      <main>
        <MemeSection />
      </main>
    );
  };

}