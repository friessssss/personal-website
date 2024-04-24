import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import pdf from '../assets/Zach Robertson Resume 2024.pdf'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-white mt-2 leading-relaxed'>
        I've gotten the opportunity to work on some amazing projects. Here are a few of my favorites.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-bold'>
                {project.name}
              </h4>
              <p className='mt-2 text-white'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <section className='cta justify-center'> 
      <p className='text-white font-poppins text-lg'>
        Want to see my resume in more detail? <br className='sm:block hidden' />
        Feel free to reach out to me, or download my resume.
      </p>
      <Link to={pdf} className='btn hover' target='_blank' download>Download Resume</Link>
    </section>
    <section className='cta'> 
      <Footer />
    </section>

    </section>
  );
};

export default Projects;