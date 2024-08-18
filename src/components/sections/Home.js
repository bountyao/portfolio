import Typewriter from 'typewriter-effect';
import PageBlock from '../common/PageBlock';

function Home() {

  return (
    <PageBlock variant={'home'}>
      <h1>Abram Obligacion</h1>
      <h1>
        <Typewriter
          options={{
            strings: ['I am a Software Developer'],
            autoStart: true,
            loop: false,
          }}
        />
      </h1>
    </PageBlock>
  );
}

export default Home;