
import React from 'react';

export default class MemeBtn extends React.Component {

  getImgInfo() {
    let num = Math.floor( Math.random() * 10) + 1;
    let src = '';
    let alt = '';

    switch (num) {
      case 1:
        src="https://images3.memedroid.com/images/UPLOADED360/5afc04f864a2f.jpeg";
        alt="Blind dog staring at a wall thinking it's a window"
        break;
      case 2:
        src="https://images3.memedroid.com/images/UPLOADED50/5afc0e603d197.jpeg";
        alt="Meme: It sucks when I read read as read and not read, so I have to re-read read as read so I can read read correctly and it can make sense";
        break;
      case 3:
        src="https://images3.memedroid.com/images/UPLOADED27/5afc0e65d6de6.jpeg";
        alt="A meme displaying a bible on sale, titled signed copy edition"; 
        break;
      case 4: 
        src="https://images3.memedroid.com/images/UPLOADED452/5afbdffc3a9ef.jpeg";
        alt="Meme: A picture showing a bald man in high heels titled, 'When Mr. Clean switched to Fabuloso'";
        break;
      case 5:
        src="https://images3.memedroid.com/images/UPLOADED154/5afbaece2836c.jpeg";
        alt="Image of a bird attempting to sing and then being abruptly interuppted by another bird singing 'Despacito'";
        break;
      case 6:
        src="https://images7.memedroid.com/images/UPLOADED628/5afc6398b29ab.jpeg";
        alt="Image of Ron Burgendy blowing a flame flute";
        break;
      case 7:
        src="https://images7.memedroid.com/images/UPLOADED767/5afbe7c375371.jpeg";
        alt="Image of Indian man holding another Indian man on train";
        break;
      case 8:
        src="https://images7.memedroid.com/images/UPLOADED983/5af61ae3c1bc2.jpeg";
        alt="Scientist speaking to snails";
        break;
      case 9:
        src="https://images7.memedroid.com/images/UPLOADED345/5afa39ec6c12d.jpeg";
        alt="Image creepo on plane";
        break;
      case 10:
        src="https://images3.memedroid.com/images/UPLOADED995/5af9e1a6a3e97.jpeg";
        alt="Image of dog with santa";
        break;
      default: 
        console.error('No image available');
        console.log(num);
    }

    this.props.getImgInfo(src, alt);
  }

  render() {
    return (
      <button onClick={e => this.getImgInfo()}>Fresh Meme</button>
    );
  }
  

}