import { useRef, useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import S2k from '../models/S2000';
import emailjs from '@emailjs/browser';
import { to } from '@react-spring/three';

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Zach Robertson',
        from_email: form.email,
        to_email: 'zach@zachtrobertson.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {  
      setIsLoading(false);

      setForm({ name: '', email: '', message: '' });

    }).catch((error) => {
      setIsLoading(false);
      console.log(error)
    })
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-white-50 font-semibold'>
            Name
            <input 
              type='text' 
              name='name' 
              className='input' 
              placeholder='John Smith'
              required
              value={form.name}
              onChange={handleChange}
              />
          </label>
          <label className='text-white-50 font-semibold'>
            Email
            <input 
              type='email' 
              name='email' 
              className='input' 
              placeholder='xyz@abc.com'
              required
              value={form.email}
              onChange={handleChange}
              />
          </label>
          <label className='text-white-50 font-semibold'>
            Your Message
            <textarea 
              name='message' 
              rows={4}
              className='textarea' 
              placeholder='Your message here...'
              required
              value={form.message}
              onChange={handleChange}
              />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className='btn'
              
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={1} />
          <hemisphereLight skyColor="#ffffff" groundColor="#000000"/>
          <directionalLight color={"#ffffff"} intensity={1.5} position={[-1, -0.25, 0.5]} />
          <Suspense fallback={<Loader />}>
            <S2k
              position={[-0.5, -0.85, 0]}
              rotation={[0.2, -0.75, 0]}
              scale={[2, 2, 2]}
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Contact