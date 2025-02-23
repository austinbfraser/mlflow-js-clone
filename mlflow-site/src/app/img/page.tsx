import NavBarImg from '../components/NavBarImg';
import TeamImg from '../components/TeamImg';
import Headline from '../components/Headline';
import Features from '../components/Features';
import DemoImg from '../components/DemoImg';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='mobileWrapper'>
        <NavBarImg />
        <div className='mobileInnerWrapper'>
          <Headline />
          <Features />
          <DemoImg />
        </div>
        <TeamImg />
      </div>
    </div>
  );
}
