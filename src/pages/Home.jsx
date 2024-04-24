import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import { styles } from '../styles'
import Stars from '../models/Stars';
import Footer from '../components/Footer';

const Home = () => { 
  const adjustIslandForScreenSize = () => {

    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -3.5, -7];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -3.5, -7];
    }
    return [ screenScale, screenPosition, rotation ];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col
        justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-blue-500' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="blue-gradient_text">Zach</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I work to integrate mechanical systems with software <br className='sm:block hidden' /> and create innovative solutions.
          </p>
        </div>
      </div>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight
              intensity={1}
              position={[0, 10, 0]}
              color={'#ffffff'}
            />
            <ambientLight
              intensity={0.5}
              color={'#ffffff'}
            />
            <hemisphereLight skyColor="#ffffff" groundColor="#000000"/>

            <Island 
              scale={islandScale} 
              position={islandPosition}
              rotation={islandRotation}
            /> 
            <Stars />

          </Suspense>
      </Canvas>
      <section className='absolute bottom-0 w-full'>
        <Footer />
      </section>
    </section>
  )
}

export default Home