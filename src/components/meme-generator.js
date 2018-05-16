
import React from 'react';
import MemeHeading from './meme-heading';
import MemeImg from './meme-img';
import MemeBtn from './meme-btn';

export default class MemeGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: 'https://images3.memedroid.com/images/UPLOADED360/5afc04f864a2f.jpeg',
      altText: 'Blind dog staring at a wall thinking it\'s a window',
    };
  };

  setImgState(imgUrl, altText) {
    this.setState({
      imgUrl,
      altText
    })
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <section >
          <MemeHeading />
          <MemeImg src={this.state.imgUrl} alt={this.state.altText}/>
          <MemeBtn getImgInfo={(imgUrl, altText)  => this.setImgState(imgUrl, altText)}/> 
        </section>
      </main>
    );
  };

}