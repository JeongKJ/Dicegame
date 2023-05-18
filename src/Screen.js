import red01 from './assets/red_1.svg';
import red02 from './assets/red_2.svg';
import red03 from './assets/red_3.svg';
import red04 from './assets/red_4.svg';
import red05 from './assets/red_5.svg';
import red06 from './assets/red_6.svg';
import blue01 from './assets/blue-1.svg';
import blue02 from './assets/blue-2.svg';
import blue03 from './assets/blue-3.svg';
import blue04 from './assets/blue-4.svg';
import blue05 from './assets/blue-5.svg';
import blue06 from './assets/blue-6.svg';

const img= {red: [red01, red02, red03, red04, red05, red06],
blue: [blue01,blue02,blue03,blue04,blue05,blue06]};
export default function Screen({color}){
    const src = img[color][0];
    console.log(src);
    return(
        <img src={src} alt=""></img>
    );
}