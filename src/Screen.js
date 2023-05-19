import red01 from './assets/red1.png';
import red02 from './assets/red2.png';
import red03 from './assets/red3.png';
import red04 from './assets/red4.png';
import red05 from './assets/red5.png';
import red06 from './assets/red6.png';
import blue01 from './assets/blue1.png';
import blue02 from './assets/blue2.png';
import blue03 from './assets/blue3.png';
import blue04 from './assets/blue4.png';
import blue05 from './assets/blue5.png';
import blue06 from './assets/blue6.png';

const img= {red: [red01, red02, red03, red04, red05, red06],
blue: [blue01,blue02,blue03,blue04,blue05,blue06]};
export default function Screen({ color, dice=1 }) {
    const src = img[color][dice-1];
    return (
        <img src={src} alt=""></img>
    );
}