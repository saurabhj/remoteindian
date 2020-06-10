import Link from 'next/link';
import { HeroSectionWrap } from './style';

const HeroSection = () => (
  <HeroSectionWrap>
    <div className="container">
      <h2>Your success does not depend upon your pincode.</h2>
      {/* <h1>RemoteIndian Community</h1> */}
      <p>Join a community of folks who are working remotely in India 🇮🇳</p>
    </div>
  </HeroSectionWrap>
);

export default HeroSection;
