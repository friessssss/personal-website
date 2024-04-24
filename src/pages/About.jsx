
import { VerticalTimeline, VerticalTimelineElement 
}  from 'react-vertical-timeline-component';

import { styles } from '../styles'
import Footer from '../components/Footer'
import { skills, experiences } from '../constants'
import { Link } from 'react-router-dom'
import pdf from '../assets/Zach Robertson Resume 2024.pdf'

import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className={`${styles.heroHeadText} text-white`}>Hello <span className="blue-gradient_text">!!!</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p>
          I am a mechanical engineer with a passion for software development.
           I have experience in the development and integration of mechanical systems with their
            software counterparts. My projects in the <span className='blue-gradient_text'>Automotive Industry</span> have helped
            push the envelope of Electric Vehicles, and are currently shipped on production vehicles.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className='h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-white'>
          <p>A bit about what I've done!</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
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
  )
}

export default About