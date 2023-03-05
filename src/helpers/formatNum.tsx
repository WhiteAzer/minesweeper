import Zero from "../asset/time0.png";
import One from "../asset/time1.png";
import Two from "../asset/time2.png";
import Three from "../asset/time3.png";
import Four from "../asset/time4.png";
import Five from "../asset/time5.png";
import Six from "../asset/time6.png";
import Seven from "../asset/time7.png";
import Eight from "../asset/time8.png";
import Nine from "../asset/time9.png";


const numImgs = [ Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine ];

export const formatNum = ( num: number ) => {
  const imgs = [];
  for ( let i = 0; i < 3; i++ ) {
    imgs.push( numImgs[ num % 10 ] )
    num = Math.floor(num / 10);
  }
  return imgs.reverse();
}