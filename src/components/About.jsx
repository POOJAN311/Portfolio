import React from 'react'
import { styles } from '../style'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 1)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45, scale: 1, speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'>
          <img src={icon} className='w-16 h-16 object-contain' /><br />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "POOJAN.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "POOJAN PATEL.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]'>
        I'm a Front-End Developer located in India. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support
        When I'm not pushing pixels, you'll find me playing football or working out in my room.
        <button onClick={onButtonClick} className='py-3 mt-2 px-8 rounded-xl outline-none w-fit text-white font-bold bg-slate-800 hover:bg-slate-900'>Download CV</button>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")